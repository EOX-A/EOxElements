import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";

/**
 * SVG path data for numeric circle outline icons (1-9).
 */
const NUMERIC_SVGS = [
  /* 1 */ "M10,7H14V17H12V9H10V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 2 */ "M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V15H15V17H11L9,17V13A2,2 0 0,1 11,11H13V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 3 */ "M15,15A2,2 0 0,1 13,17H9V15H13V13H11V11H13V9H9V7H13A2,2 0 0,1 15,9V10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 15,13.5V15M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 4 */ "M9,7H11V11H13V7H15V17H13V13H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 5 */ "M9,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 6 */ "M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,13V15H13V13H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 7 */ "M11,17H9L13,9H9V7H15V9L11,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 8 */ "M11,13V15H13V13H11M11,9V11H13V9H11M11,17A2,2 0 0,1 9,15V13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 9,10.5V9A2,2 0 0,1 11,7H13A2,2 0 0,1 15,9V10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 15,13.5V15A2,2 0 0,1 13,17H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
  /* 9 */ "M13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17M13,11V9H11V11H13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",
];

const CHECK_CIRCLE_SVG =
  "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z";
const CHEVRON_DOWN_SVG =
  "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
const MENU_DOWN_SVG = "M7,10L12,15L17,10H7Z";

/**
 * Create an SVG element from a path string.
 *
 * @param {string} pathD - The SVG path `d` attribute value
 * @param {string} [title] - Optional title for the SVG
 * @returns {SVGElement}
 */
function createSvgIcon(pathD, title) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  if (title) {
    const titleEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    titleEl.textContent = title;
    svg.appendChild(titleEl);
  }
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD);
  svg.appendChild(path);
  return svg;
}

/**
 * CSS for the steps editor, scoped to `.steps-editor`.
 */
const STEPS_CSS = `
  .steps-editor article.wave {
    cursor: pointer;
  }
  .steps-editor details summary .step-chevron {
    transition: transform 0.3s;
  }
  .steps-editor details[open] summary .step-chevron {
    transform: rotate(180deg);
  }
  .steps-editor .no-pointer-events {
    pointer-events: none;
  }
  .steps-editor details summary .step-icon,
  .steps-editor details[open] summary .step-icon {
    transform: none !important;
  }
`;

/**
 * Parse step definitions from the schema properties.
 * Each child property of the steps object becomes a step.
 *
 * @param {object} properties - The schema properties object
 * @returns {Array<{id: string, title: string, enumValues: Array<string>, enumTitles: Array<string>, enumDescriptions: Array<string>|object, enumMap: object|null, enumTitlesMap: object|null, enumDescriptionsMap: object|null, dependsOn: string|null, disabledLabel: string|null, autoComplete: boolean, gridColumns: number, defaultValue: any}>}
 */
function parseSteps(properties) {
  if (!properties) return [];
  return Object.keys(properties).map((key) => {
    const prop = properties[key];
    const opts = prop.options || {};
    const enumValues = prop.enum || [];
    const enumTitles = opts.enum_titles || [];
    const enumDescriptions = opts.enum_descriptions || [];

    return {
      id: key,
      title: prop.title || key,
      enumValues,
      enumTitles,
      enumDescriptions,
      enumMap: opts.enum_map || null,
      enumTitlesMap: opts.enum_titles_map || null,
      enumDescriptionsMap: opts.enum_descriptions_map || null,
      dependsOn: opts.dependsOn || null,
      disabledLabel: opts.disabledLabel || null,
      autoComplete: !!opts.autoComplete,
      gridColumns: opts.grid_columns || 4,
      defaultValue: prop.default !== undefined ? prop.default : null,
    };
  });
}

/**
 * Get the display title for an option at a given index within the effective enums.
 *
 * @param {object} step - The step definition
 * @param {number} index - Index into the effective enum array
 * @param {Array<string>} [effectiveEnums] - The current effective enum values
 * @param {Array<string>} [effectiveTitles] - The current effective enum titles
 * @returns {string}
 */
function getOptionTitle(step, index, effectiveEnums, effectiveTitles) {
  const titles = effectiveTitles || step.enumTitles;
  if (titles && titles[index]) return titles[index];
  const enums = effectiveEnums || step.enumValues;
  const val = enums[index];
  return typeof val === "string" ? val : "";
}

/**
 * Get the description for an option at a given index within the effective enums.
 *
 * @param {object} step - The step definition
 * @param {number} index - Index into the effective enum array
 * @param {Array<string>} [_effectiveEnums] - The current effective enum values (unused but kept for symmetry)
 * @param {Array<string>} [effectiveDescriptions] - The current effective enum descriptions
 * @returns {string|null}
 */
function getOptionDescription(
  step,
  index,
  _effectiveEnums,
  effectiveDescriptions,
) {
  const descs = effectiveDescriptions || step.enumDescriptions;
  if (Array.isArray(descs)) {
    return descs[index] || null;
  }
  if (descs && typeof descs === "object") {
    const enums = _effectiveEnums || step.enumValues;
    if (enums[index] !== undefined) {
      return descs[enums[index]] || null;
    }
  }
  return null;
}

/**
 * Parse conditional rules (if/then/else) from the schema.
 * Supports both root-level and allOf-wrapped conditions.
 *
 * @param {object} schema - The parent steps schema
 * @returns {Array<{ifBlock: object, thenBlock: object|null, elseBlock: object|null}>}
 */
function parseConditionalRules(schema) {
  const rules = [];
  if (schema.if) {
    rules.push({
      ifBlock: schema.if,
      thenBlock: schema.then || null,
      elseBlock: schema.else || null,
    });
  }
  if (Array.isArray(schema.allOf)) {
    schema.allOf.forEach((entry) => {
      if (entry.if) {
        rules.push({
          ifBlock: entry.if,
          thenBlock: entry.then || null,
          elseBlock: entry.else || null,
        });
      }
    });
  }
  return rules;
}

/**
 * Evaluate whether an if-block condition matches the current values.
 *
 * @param {object} ifBlock - The JSON Schema if block
 * @param {object} values - Current step values
 * @returns {boolean}
 */
function evaluateCondition(ifBlock, values) {
  if (!ifBlock || !ifBlock.properties) return false;
  return Object.keys(ifBlock.properties).every((propId) => {
    const condition = ifBlock.properties[propId];
    const currentVal = values[propId];
    if (currentVal === undefined || currentVal === null) return false;
    if (condition.const !== undefined) return currentVal === condition.const;
    if (Array.isArray(condition.enum))
      return condition.enum.includes(currentVal);
    return true;
  });
}

/**
 * Extract step property overrides from a then/else branch block.
 *
 * @param {object} block - The then or else block
 * @returns {Object<string, object>} Map of stepId to override properties
 */
function extractOverrides(block) {
  if (!block || !block.properties) return {};
  const overrides = {};
  Object.keys(block.properties).forEach((stepId) => {
    const prop = block.properties[stepId];
    const opts = prop.options || {};
    const override = {};
    if (prop.enum !== undefined) override.enumValues = prop.enum;
    if (opts.enum_titles !== undefined) override.enumTitles = opts.enum_titles;
    if (opts.enum_descriptions !== undefined)
      override.enumDescriptions = opts.enum_descriptions;
    if (opts.autoComplete !== undefined)
      override.autoComplete = opts.autoComplete;
    if (prop.default !== undefined) override.defaultValue = prop.default;
    if (opts.disabledLabel !== undefined)
      override.disabledLabel = opts.disabledLabel;
    if (opts.grid_columns !== undefined)
      override.gridColumns = opts.grid_columns;
    overrides[stepId] = override;
  });
  return overrides;
}

/**
 * Compute step property overrides by evaluating all conditional rules.
 *
 * @param {Array} rules - The conditional rules
 * @param {object} values - Current step values
 * @returns {Object<string, object>} Map of stepId to override properties
 */
function computeStepOverrides(rules, values) {
  const overrides = {};
  rules.forEach((rule) => {
    const matches = evaluateCondition(rule.ifBlock, values);
    const branch = matches ? rule.thenBlock : rule.elseBlock;
    if (branch) {
      const branchOverrides = extractOverrides(branch);
      Object.keys(branchOverrides).forEach((stepId) => {
        overrides[stepId] = {
          ...overrides[stepId],
          ...branchOverrides[stepId],
        };
      });
    }
  });
  return overrides;
}

/**
 * Custom editor for rendering a multi-step accordion wizard in json-editor.
 *
 * Use `"format": "steps"` on an object schema. Each child property
 * represents a step, with options for dependencies, auto-complete,
 * grid sizing, and disabled labels.
 *
 * @extends AbstractEditor
 */
export class StepsEditor extends AbstractEditor {
  register() {
    super.register();
  }

  unregister() {
    super.unregister();
  }

  /**
   * Build the steps editor DOM.
   */
  build() {
    const options = this.options;
    const description = this.schema.description;
    const theme = this.theme;

    if (!options.compact) {
      this.header = this.label = theme.getFormInputLabel(
        this.getTitle(),
        this.isRequired(),
      );
    }

    if (description) {
      this.description = theme.getFormInputDescription(
        this.translateProperty(description),
      );
    }

    if (options.infoText) {
      this.infoButton = theme.getInfoButton(
        this.translateProperty(options.infoText),
      );
    }

    // Parse steps from schema properties
    this._steps = parseSteps(this.schema.properties);
    this._currentStep = 1;
    this.value = this.value || {};

    // Initialize default values for auto-complete steps that have no value yet
    this._steps.forEach((step) => {
      if (this.value[step.id] === undefined && step.defaultValue !== null) {
        this.value[step.id] = step.defaultValue;
      }
    });

    // Parse conditional rules and compute initial overrides
    this._conditionalRules = parseConditionalRules(this.schema);
    this._stepOverrides = computeStepOverrides(
      this._conditionalRules,
      this.value,
    );

    // Build wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("steps-editor");

    // Inject scoped CSS
    const styleEl = document.createElement("style");
    styleEl.textContent = STEPS_CSS;
    wrapper.appendChild(styleEl);

    // Store references for each step's DOM elements
    this._stepElements = {};

    this._steps.forEach((step, index) => {
      const stepNum = index + 1;
      const details = document.createElement("details");
      details.classList.add("padding");
      details.dataset.stepId = step.id;

      // Toggle handler
      details.addEventListener("toggle", () => {
        if (details.open) {
          this._currentStep = stepNum;
          this._closeOtherSteps(step.id);
          this._refreshAllSteps();
        }
      });

      // Summary
      const summary = document.createElement("summary");
      summary.classList.add("row");

      // Step icon (inline SVG inside <i>)
      const icon = document.createElement("i");
      icon.classList.add("small", "step-icon");
      // Initial SVG will be set by _refreshAllSteps

      // Title column
      const titleCol = document.createElement("div");
      titleCol.classList.add("max", "column");

      const titleEl = document.createElement("h6");
      titleEl.classList.add("small", "no-margin");
      titleEl.textContent = step.title;

      const subtitleEl = document.createElement("div");
      subtitleEl.classList.add("small-text");

      titleCol.appendChild(titleEl);
      titleCol.appendChild(subtitleEl);

      // Chevron icon (inline SVG inside <i>)
      const chevron = document.createElement("i");
      chevron.classList.add("small", "step-chevron");
      chevron.appendChild(createSvgIcon(CHEVRON_DOWN_SVG, "chevron-down"));

      summary.appendChild(icon);
      summary.appendChild(titleCol);
      summary.appendChild(chevron);
      details.appendChild(summary);

      // Content panel
      const content = document.createElement("div");
      content.classList.add("padding");
      details.appendChild(content);

      wrapper.appendChild(details);

      // Store references
      this._stepElements[step.id] = {
        details,
        summary,
        icon,
        subtitleEl,
        chevron,
        content,
      };

      // Build the options UI
      this._buildStepContent(step);
    });

    this.input = wrapper;
    this.control = theme.getFormControl(
      this.label,
      this.input,
      this.description,
      this.infoButton,
    );
    this.container.appendChild(this.control);

    // Open the first step
    if (this._steps.length > 0) {
      this._currentStep = 1;
      this._stepElements[this._steps[0].id].details.open = true;
    }

    // Initial state refresh
    this._refreshAllSteps();

    if (this.schema.readOnly || this.schema.readonly) {
      this.disable(true);
    }
  }

  /**
   * Build the option cards or dropdown for a single step.
   *
   * @param {object} step - The step definition
   */
  _buildStepContent(step) {
    const effective = this._getEffectiveStep(step);
    const els = this._stepElements[step.id];
    const content = els.content;

    // Clear existing content
    while (content.firstChild) content.removeChild(content.firstChild);

    if (effective.enumValues.length > 10) {
      // Dropdown mode
      this._buildDropdown(effective, content);
    } else {
      // Card grid mode
      this._buildCardGrid(effective, content);
    }
  }

  /**
   * Build a `<select>` dropdown for steps with many options.
   *
   * @param {object} step - The step definition
   * @param {HTMLElement} content - Container element
   */
  _buildDropdown(step, content) {
    const fieldDiv = document.createElement("div");
    fieldDiv.classList.add("field", "suffix", "border", "small");

    const select = document.createElement("select");
    select.dataset.stepId = step.id;

    const placeholder = document.createElement("option");
    placeholder.disabled = true;
    placeholder.value = "";
    placeholder.textContent = "Please select one";
    if (!this.value[step.id]) placeholder.selected = true;
    select.appendChild(placeholder);

    step.enumValues.forEach((val, i) => {
      const option = document.createElement("option");
      option.value = val;
      option.textContent = getOptionTitle(step, i);
      if (this.value[step.id] === val) option.selected = true;
      select.appendChild(option);
    });

    select.addEventListener("change", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._onSelect(step, /** @type {HTMLSelectElement} */ (e.target).value);
    });

    const dropdownIcon = document.createElement("i");
    dropdownIcon.classList.add("small");
    dropdownIcon.appendChild(createSvgIcon(MENU_DOWN_SVG, "menu-down"));

    fieldDiv.appendChild(select);
    fieldDiv.appendChild(dropdownIcon);
    content.appendChild(fieldDiv);

    // Store select reference for setValue updates
    this._stepElements[step.id].select = select;
    this._stepElements[step.id].cards = null;
  }

  /**
   * Build a card grid for steps with ≤10 options.
   *
   * @param {object} step - The step definition
   * @param {HTMLElement} content - Container element
   */
  _buildCardGrid(step, content) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    const cards = [];

    step.enumValues.forEach((val, i) => {
      const article = document.createElement("article");
      article.classList.add("s12", "m6", `l${step.gridColumns}`, "wave");
      article.dataset.value = val;

      if (this.value[step.id] === val) {
        article.classList.add("primary");
      }

      const titleP = document.createElement("p");
      titleP.classList.add("bold");
      titleP.textContent = getOptionTitle(step, i);
      article.appendChild(titleP);

      const desc = getOptionDescription(step, i);
      if (desc) {
        const descP = document.createElement("p");
        descP.classList.add("small-text");
        descP.textContent = desc;
        article.appendChild(descP);
      }

      article.addEventListener("click", () => {
        this._onSelect(step, val);
      });

      cards.push(article);
      grid.appendChild(article);
    });

    content.appendChild(grid);

    // Store card references for setValue updates
    this._stepElements[step.id].cards = cards;
    this._stepElements[step.id].select = null;
  }

  /**
   * Get the effective step definition with conditional overrides applied.
   *
   * @param {object} step - The base step definition
   * @returns {object} Step with overrides merged in
   */
  _getEffectiveStep(step) {
    const overrides = this._stepOverrides && this._stepOverrides[step.id];
    if (!overrides) return step;
    return { ...step, ...overrides };
  }

  /**
   * Re-evaluate conditional rules and rebuild affected steps.
   * Resets values that are no longer valid under the new conditions.
   */
  _applyConditions() {
    if (!this._conditionalRules || this._conditionalRules.length === 0) return;

    const oldOverrides = this._stepOverrides || {};
    const newOverrides = computeStepOverrides(
      this._conditionalRules,
      this.value,
    );

    // Identify steps whose effective enums changed
    const changedStepIds = new Set();
    this._steps.forEach((step) => {
      const oldEnum = oldOverrides[step.id]?.enumValues || step.enumValues;
      const newEnum = newOverrides[step.id]?.enumValues || step.enumValues;
      if (JSON.stringify(oldEnum) !== JSON.stringify(newEnum)) {
        changedStepIds.add(step.id);
      }
    });

    // Update overrides before rebuilding (so _getEffectiveStep uses new values)
    this._stepOverrides = newOverrides;

    // Reset invalid values and rebuild content for changed steps
    this._steps.forEach((step) => {
      if (!changedStepIds.has(step.id)) return;
      const effective = this._getEffectiveStep(step);
      const currentVal = this.value[step.id];
      if (
        currentVal !== undefined &&
        currentVal !== null &&
        !effective.enumValues.includes(currentVal)
      ) {
        this.value[step.id] =
          effective.defaultValue !== null ? effective.defaultValue : undefined;
        this._clearDependentSteps(step.id);
      }
      this._buildStepContent(step);
    });
  }

  /**
   * Handle a user selection on a step.
   *
   * @param {object} step - The step definition
   * @param {string} value - The selected value
   */
  _onSelect(step, value) {
    this.value[step.id] = value;

    // Clear selections of all steps that depend on this one (cascading reset)
    this._clearDependentSteps(step.id);

    // Re-evaluate conditions and rebuild affected steps
    this._applyConditions();

    // Process auto-complete steps
    this._processAutoCompleteSteps();

    this._refreshAllSteps();
    this.onChange(true);

    // Auto-advance to next step
    const currentIndex = this._steps.findIndex((s) => s.id === step.id);
    requestAnimationFrame(() => {
      if (currentIndex < this._steps.length - 1) {
        const nextStep = this._steps[currentIndex + 1];
        if (this._getEffectiveStep(nextStep).autoComplete) {
          // Skip auto-complete step, open the one after it if exists
          const skipToIndex = currentIndex + 2;
          if (skipToIndex < this._steps.length) {
            this._openStep(skipToIndex + 1);
          } else {
            // Close all
            this._closeAllSteps();
          }
        } else {
          this._openStep(currentIndex + 2);
        }
      } else {
        // Last step selected — close all
        this._closeAllSteps();
      }
    });
  }

  /**
   * Clear values of all steps that transitively depend on the given step.
   *
   * @param {string} stepId - The step whose dependents should be cleared
   */
  _clearDependentSteps(stepId) {
    this._steps.forEach((s) => {
      if (s.dependsOn === stepId) {
        this.value[s.id] = s.defaultValue !== null ? s.defaultValue : undefined;
        // Recursively clear further dependents
        this._clearDependentSteps(s.id);
      }
    });
  }

  /**
   * Process auto-complete steps: if dependency is met, auto-select default value.
   */
  _processAutoCompleteSteps() {
    this._steps.forEach((step) => {
      const effective = this._getEffectiveStep(step);
      if (!effective.autoComplete) return;
      if (effective.dependsOn && this.value[effective.dependsOn]) {
        // Dependency met — auto-select default
        const defaultVal = effective.defaultValue;
        if (
          defaultVal !== null &&
          (this.value[step.id] === undefined || this.value[step.id] === null)
        ) {
          this.value[step.id] = defaultVal;
        }
      }
    });
  }

  /**
   * Determine whether a step is disabled.
   *
   * @param {object} step - The step definition
   * @returns {boolean}
   */
  _isStepDisabled(step) {
    const effective = this._getEffectiveStep(step);
    if (effective.autoComplete) {
      // Auto-complete steps are disabled when their dependency is met
      if (effective.dependsOn && this.value[effective.dependsOn]) {
        return true;
      }
      return !effective.dependsOn ? false : true;
    }
    if (!effective.dependsOn) return false;
    return !this.value[effective.dependsOn];
  }

  /**
   * Get the SVG icon data for a step.
   *
   * @param {object} step - The step definition
   * @param {number} stepNum - 1-based step number
   * @returns {{pathD: string, title: string, isCheck: boolean}}
   */
  _getStepIconData(step, stepNum) {
    const effective = this._getEffectiveStep(step);
    const isSelected = !!this.value[step.id];
    const dependencyMet = effective.dependsOn
      ? !!this.value[effective.dependsOn]
      : false;

    if (effective.autoComplete) {
      if (dependencyMet)
        return {
          pathD: CHECK_CIRCLE_SVG,
          title: "check-circle",
          isCheck: true,
        };
      return {
        pathD: NUMERIC_SVGS[stepNum - 1] || NUMERIC_SVGS[0],
        title: `numeric-${stepNum}-circle-outline`,
        isCheck: false,
      };
    }

    if (isSelected) {
      return {
        pathD: CHECK_CIRCLE_SVG,
        title: "check-circle",
        isCheck: true,
      };
    }
    return {
      pathD: NUMERIC_SVGS[stepNum - 1] || NUMERIC_SVGS[0],
      title: `numeric-${stepNum}-circle-outline`,
      isCheck: false,
    };
  }

  /**
   * Get the selection label to show under the step title when collapsed.
   *
   * @param {object} step - The step definition
   * @returns {string|null}
   */
  _getStepSelectionLabel(step) {
    const effective = this._getEffectiveStep(step);
    const val = this.value[step.id];
    const stepIndex = this._steps.findIndex((s) => s.id === step.id);

    // Hide label for auto-complete steps that are disabled but dependency met
    if (
      effective.autoComplete &&
      effective.dependsOn &&
      this.value[effective.dependsOn] &&
      effective.enumValues.length <= 1
    ) {
      return null;
    }

    // Hide if this step is currently open
    if (this._currentStep === stepIndex + 1) {
      return null;
    }

    if (!val) return null;

    // Find the display title for the selected value
    const enumIndex = effective.enumValues.indexOf(val);
    if (enumIndex >= 0) {
      return getOptionTitle(effective, enumIndex);
    }
    return val;
  }

  /**
   * Refresh the visual state of all steps (icons, subtitles, disabled state, card highlights).
   */
  _refreshAllSteps() {
    this._steps.forEach((step, index) => {
      const effective = this._getEffectiveStep(step);
      const stepNum = index + 1;
      const els = this._stepElements[step.id];
      const disabled = this._isStepDisabled(step);

      // Update disabled state on the details element
      if (disabled) {
        els.details.classList.add("grey-text");
        els.summary.classList.add("no-pointer-events");
        els.content.style.display = "none";
      } else {
        els.details.classList.remove("grey-text");
        els.summary.classList.remove("no-pointer-events");
        els.content.style.display = "";
      }

      // Update chevron disabled state
      if (disabled) {
        els.chevron.classList.add("grey-text");
      } else {
        els.chevron.classList.remove("grey-text");
      }

      // Update icon SVG
      const iconData = this._getStepIconData(step, stepNum);
      els.icon.innerHTML = "";
      els.icon.appendChild(createSvgIcon(iconData.pathD, iconData.title));
      if (iconData.isCheck) {
        els.icon.classList.add("green-text");
      } else {
        els.icon.classList.remove("green-text");
      }

      // Update subtitle
      const label = this._getStepSelectionLabel(step);
      if (label && this._currentStep !== stepNum) {
        els.subtitleEl.textContent = label;
        els.subtitleEl.className = "small-text primary-text truncate";
        els.subtitleEl.style.display = "";
      } else if (effective.disabledLabel && disabled) {
        els.subtitleEl.textContent = effective.disabledLabel;
        els.subtitleEl.className = "small-text grey-text";
        els.subtitleEl.style.display = "";
      } else {
        els.subtitleEl.textContent = "";
        els.subtitleEl.style.display = "none";
      }

      // Update card highlights
      if (els.cards) {
        els.cards.forEach((card) => {
          if (card.dataset.value === this.value[step.id]) {
            card.classList.add("primary");
          } else {
            card.classList.remove("primary");
          }
        });
      }

      // Update select value
      if (els.select) {
        els.select.value = this.value[step.id] || "";
      }
    });
  }

  /**
   * Open a specific step by number (1-based) and close others.
   *
   * @param {number} stepNum - 1-based step number to open
   */
  _openStep(stepNum) {
    this._currentStep = stepNum;
    this._steps.forEach((step, index) => {
      const els = this._stepElements[step.id];
      els.details.open = index + 1 === stepNum;
    });
    this._refreshAllSteps();
  }

  /**
   * Close all step details elements.
   */
  _closeAllSteps() {
    this._currentStep = 0;
    this._steps.forEach((step) => {
      this._stepElements[step.id].details.open = false;
    });
    this._refreshAllSteps();
  }

  /**
   * Close all step details except the one with the given id.
   *
   * @param {string} openStepId - The step id to keep open
   */
  _closeOtherSteps(openStepId) {
    this._steps.forEach((step) => {
      if (step.id !== openStepId) {
        this._stepElements[step.id].details.open = false;
      }
    });
  }

  /**
   * Set the value of the editor.
   *
   * @param {object} value - The new value object
   */
  setValue(value) {
    this.value = value || {};
    this._applyConditions();
    this._processAutoCompleteSteps();
    this._refreshAllSteps();
    this.onChange();
  }

  /**
   * Get the current value.
   *
   * @returns {object}
   */
  getValue() {
    return this.value;
  }

  enable() {
    if (!this.always_disabled) {
      super.enable();
    }
  }

  disable(always_disabled) {
    if (always_disabled) this.always_disabled = true;
    super.disable();
  }

  destroy() {
    if (this.input && this.input.parentNode) {
      this.input.parentNode.removeChild(this.input);
    }
    this._stepElements = null;
    this._steps = null;
    this._conditionalRules = null;
    this._stepOverrides = null;
    super.destroy();
  }
}
