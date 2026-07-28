import { nothing } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";
import { createRef, ref } from "lit/directives/ref.js";
import { A2uiLitElement, A2uiController } from "@a2ui/lit/v0_9";
import { eoxCatalog } from "./eox-catalog.js";
import { componentTransformers } from "./transformers/index.js";

function isEqual(a, b) {
  if (a === b) return true;
  if (
    typeof a === "object" &&
    typeof b === "object" &&
    a !== null &&
    b !== null
  ) {
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch (e) {
      return false;
    }
  }
  return false;
}

function safeClone(val) {
  if (typeof val === "object" && val !== null) {
    try {
      return JSON.parse(JSON.stringify(val));
    } catch (e) {
      return val;
    }
  }
  return val;
}

export class EOxA2uiElement extends A2uiLitElement {
  constructor() {
    super();
    this._elementRef = createRef();
    this._appliedProps = {};
  }

  createRenderRoot() {
    return this;
  }

  createController() {
    const type = this.context.componentModel.type;
    const api = eoxCatalog.components.get(type);
    if (!api) {
      throw new Error(
        `Component implementation not found in eoxCatalog for type: ${type}`,
      );
    }
    return new A2uiController(this, api);
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const element = this._elementRef.value;
    if (element) {
      const type = this.context.componentModel.type;
      const api = eoxCatalog.components.get(type);
      const eventsToForward = api?.events || [];

      eventsToForward.forEach((eventName) => {
        element.addEventListener(eventName, (e) => {
          this.dispatchEvent(
            new CustomEvent(eventName, {
              detail: e.detail,
              bubbles: true,
              composed: true,
            }),
          );
        });
      });
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    const element = this._elementRef.value;
    if (element && this.controller?.props) {
      const type = this.context.componentModel.type;
      const transformer = componentTransformers[type];
      let transformedProps = {};

      if (transformer) {
        const children = Array.isArray(this.controller.props.children)
          ? this.controller.props.children
          : [];
        const resolvedChildren = children
          .map((child) => {
            const isReference =
              typeof child === "object" &&
              child !== null &&
              child.id &&
              !child.component &&
              !child.type;
            const isInline =
              typeof child === "object" &&
              child !== null &&
              (child.component || child.type);

            if (isInline) {
              const typeName = child.type || child.component;
              let nestedChildren = [];
              if (Array.isArray(child.children)) {
                nestedChildren = child.children
                  .map((nestedChild) => {
                    const isNestedInline =
                      typeof nestedChild === "object" &&
                      nestedChild !== null &&
                      (nestedChild.component || nestedChild.type);
                    if (isNestedInline) {
                      return {
                        id: nestedChild.id,
                        type: nestedChild.type || nestedChild.component,
                        ...nestedChild,
                      };
                    }
                    const nestedChildId =
                      typeof nestedChild === "object" && nestedChild !== null
                        ? nestedChild.id
                        : nestedChild;
                    const nestedChildModel =
                      this.context.surfaceComponents.get(nestedChildId);
                    if (nestedChildModel) {
                      return {
                        id: nestedChildModel.id,
                        type: nestedChildModel.type,
                        ...nestedChildModel.properties,
                      };
                    }
                    return null;
                  })
                  .filter(Boolean);
              }
              return {
                id: child.id,
                type: typeName,
                ...child,
                children:
                  nestedChildren.length > 0
                    ? nestedChildren
                    : child.children || [],
              };
            }

            const childId =
              typeof child === "object" && child !== null ? child.id : child;
            const childModel = this.context.surfaceComponents.get(childId);
            if (childModel) {
              let nestedChildren = [];
              if (Array.isArray(childModel.properties?.children)) {
                nestedChildren = childModel.properties.children
                  .map((nestedChild) => {
                    const isNestedInline =
                      typeof nestedChild === "object" &&
                      nestedChild !== null &&
                      (nestedChild.component || nestedChild.type);
                    if (isNestedInline) {
                      return {
                        id: nestedChild.id,
                        type: nestedChild.type || nestedChild.component,
                        ...nestedChild,
                      };
                    }
                    const nestedChildId =
                      typeof nestedChild === "object" && nestedChild !== null
                        ? nestedChild.id
                        : nestedChild;
                    const nestedChildModel =
                      this.context.surfaceComponents.get(nestedChildId);
                    if (nestedChildModel) {
                      return {
                        id: nestedChildModel.id,
                        type: nestedChildModel.type,
                        ...nestedChildModel.properties,
                      };
                    }
                    return null;
                  })
                  .filter(Boolean);
              }
              return {
                id: childModel.id,
                type: childModel.type,
                ...childModel.properties,
                children:
                  nestedChildren.length > 0
                    ? nestedChildren
                    : childModel.properties?.children || [],
              };
            }
            return null;
          })
          .filter(Boolean);

        transformedProps = transformer(resolvedChildren, this.controller.props);
      }

      // Pass all properties to the EOxElement
      const mergedProps = { ...this.controller.props, ...transformedProps };
      for (const [key, value] of Object.entries(mergedProps)) {
        if (key === "children") {
          continue;
        }
        if (!isEqual(this._appliedProps[key], value)) {
          element[key] = value;
          this._appliedProps[key] = safeClone(value);
        }
      }
    }
  }

  render() {
    const type = this.context.componentModel.type;
    const api = eoxCatalog.components.get(type);
    if (!api) {
      return nothing;
    }

    const targetTag = unsafeStatic(api.targetTagName);
    const hasTransformer = !!componentTransformers[type];
    const children = Array.isArray(this.controller?.props?.children)
      ? this.controller.props.children
      : [];

    return html`<${targetTag}
      id=${this.context.componentModel.id}
      ${ref(this._elementRef)}
    >${hasTransformer ? nothing : children.map((child) => this.renderNode(child))}</${targetTag}>`;
  }
}

customElements.define("eox-a2ui-element", EOxA2uiElement);
