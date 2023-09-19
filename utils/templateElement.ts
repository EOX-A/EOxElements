import { LitElement, html } from "lit";

/**
 * Inspired by microsoft-graph-toolkit
 * https://github.com/microsoftgraph/microsoft-graph-toolkit/blob/main/packages/mgt-element/src/components/templatedComponent.ts
 *
 * Allows to render parts of the web component via templateas, e.g.
 * @example ```
 * <template data-type="result">
 *   <div>
 *     The title: <strong>{{result.title}}</strong> -
 *     <small>{{result.id}}</small>
 *   </div>
 * </template>
 * ```
 *
 * To implement it in a web component, just extend this TemplateElement
 * while creating and include e.g.
 * ```
 * this.renderTemplate("result", item, `result-${item.id}`),
 * ```
 */
export abstract class TemplateElement extends LitElement {
  /**
   * Set an alternative binding syntax. Default is {{ <value> }}
   *
   * @param {string} startStr start of binding syntax
   * @param {string} endStr end of binding syntax
   */
  public setBindingSyntax(startStr: string, endStr: string) {
    this._startExpression = startStr;
    this._endExpression = endStr;

    const start = this.escapeRegex(this._startExpression);
    const end = this.escapeRegex(this._endExpression);

    this._expression = new RegExp(
      `${start}\\s*([$\\w\\.,'"\\s()\\[\\]]+)\\s*${end}`,
      "g"
    );
  }

  /**
   * Check if a specific template has been provided.
   *
   * @param {string} templateName
   * @returns {boolean}
   */
  public hasTemplate(templateName: string): boolean {
    // @ts-ignore
    return this.templates && !!this.templates[templateName];
  }

  /**
   * Render a <template> by type and return content to render
   *
   * @param templateType type of template (indicated by the data-type attribute)
   * @param context the data context that should be expanded in template
   * @param slotName the slot name that will be used to host the new rendered template. set to a unique value if multiple templates of this type will be rendered. default is templateType
   */
  public renderTemplate(
    templateType: string,
    context: object,
    slotName?: string
  ) {
    if (!this.hasTemplate(templateType)) {
      return null;
    }

    slotName = slotName || templateType;

    const template = html` <slot name=${slotName}></slot> `;

    const dataContext = { [templateType]: { ...context } };
    if (this._renderedTemplates.hasOwnProperty(slotName)) {
      const { slot } =
        // @ts-ignore
        this._renderedTemplates[slotName];
      if (this.contains(slot)) {
        this.removeChild(slot);
      }
    }

    const div = document.createElement("div");
    div.slot = slotName;
    div.dataset.generated = "template";

    // @ts-ignore
    this._renderTemplate(div, this.templates[templateType], dataContext);

    this.appendChild(div);

    // @ts-ignore
    this._renderedTemplates[slotName] = { context: dataContext, slot: div };

    return template;
  }

  private templates = {};
  private _renderedTemplates = {};

  private _startExpression: string;
  private _endExpression: string;
  private _expression: RegExp;

  private getTemplates() {
    const templates: any = {};

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.nodeName === "RENDER-TEMPLATE") {
        const template = child as HTMLElement;
        if (template.dataset.type) {
          templates[template.dataset.type] = template;
        } else {
          templates.default = template;
        }

        (template as any).templateOrder = i;
      }
    }
    return templates;
  }

  private _renderTemplate(
    root: HTMLElement,
    template: HTMLTemplateElement,
    context: object
  ) {
    let rendered: Node;
    if (template && template.childNodes.length) {
      const templateContent = template.cloneNode(true);
      rendered = this.renderNode(templateContent, root, context);
    }

    if (rendered) {
      root.appendChild(rendered);
    }
  }

  private expandExpressionsAsString(str: string, context: object) {
    return str.replace(this.expression, (match, p1) => {
      const value = this.evalInContext(
        p1 || this.trimExpression(match),
        context
      );
      if (value) {
        if (typeof value === "object") {
          return JSON.stringify(value);
        } else {
          return (value as any).toString();
        }
      }
      return "";
    });
  }

  private get expression() {
    if (!this._expression) {
      this.setBindingSyntax("{{", "}}");
    }

    return this._expression;
  }

  private escapeRegex(str: string) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  private evalInContext(expression: string, context: Object) {
    context = { ...context };
    const func = new Function("with(this) { return " + expression + ";}");
    let result;
    try {
      result = func.call(context);
    } catch (e) {}
    return result;
  }

  private trimExpression(expression: string) {
    expression = expression.trim();

    if (
      expression.startsWith(this._startExpression) &&
      expression.endsWith(this._endExpression)
    ) {
      expression = expression.substr(
        this._startExpression.length,
        expression.length -
          this._startExpression.length -
          this._endExpression.length
      );
      expression = expression.trim();
    }

    return expression;
  }

  private renderNode(node: Node, root: HTMLElement, context: object) {
    if (node.nodeName === "#text") {
      node.textContent = this.expandExpressionsAsString(
        node.textContent,
        context
      );
      return node;
    } else if (node.nodeName === "TEMPLATE") {
      (node as any).$parentTemplateContext = context;
      return node;
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      this.renderNode(childNode, root, context);
    }
    return node;
  }

  firstUpdated() {
    this.templates = this.getTemplates();
  }
}
