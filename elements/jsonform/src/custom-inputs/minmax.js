import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";
import "toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js";
import "toolcool-range-slider";

/**
 * Return decimal places for step (supports scientific notation).
 *
 * @param {number|string|undefined} val
 * @returns {number|undefined}
 */
function getDecimalPlaces(val) {
  const num = Number(val);
  if (!Number.isFinite(num) || num <= 0) return undefined;
  const [coeff, exp = 0] = num.toString().toLowerCase().split("e");
  return Math.max(0, (coeff.split(".")[1]?.length ?? 0) - Number(exp));
}

// Define a custom editor class extending AbstractEditor
export class MinMaxEditor extends AbstractEditor {
  _getConfig() {
    const props = this.schema?.properties || {};
    const minKey = Object.keys(props).find((k) => k.includes("min")) || "min";
    const maxKey = Object.keys(props).find((k) => k.includes("max")) || "max";
    const minProp = props[minKey] || {};
    const maxProp = props[maxKey] || {};
    const step = minProp.step ?? maxProp.step;
    return {
      minKey,
      maxKey,
      minProp,
      maxProp,
      step,
      round: getDecimalPlaces(step),
    };
  }

  getDefault() {
    const { minKey, maxKey, minProp, maxProp } = this._getConfig();
    return { [minKey]: minProp.default, [maxKey]: maxProp.default };
  }

  getValue() {
    if (!this.dependenciesFulfilled) return undefined;
    const { minKey, maxKey, minProp, maxProp } = this._getConfig();
    return {
      [minKey]: this.input?.value1 ?? this.value?.[minKey] ?? minProp.default,
      [maxKey]: this.input?.value2 ?? this.value?.[maxKey] ?? maxProp.default,
    };
  }

  setValue(value) {
    const { minKey, maxKey, minProp, maxProp, round } = this._getConfig();
    let vMin =
      typeof value?.[minKey] === "number" && Number.isFinite(value[minKey])
        ? value[minKey]
        : minProp.default;
    let vMax =
      typeof value?.[maxKey] === "number" && Number.isFinite(value[maxKey])
        ? value[maxKey]
        : maxProp.default;

    if (minProp.minimum !== undefined && vMin < minProp.minimum)
      vMin = minProp.default;
    if (maxProp.maximum !== undefined && vMax > maxProp.maximum)
      vMax = maxProp.default;

    this.value = { [minKey]: vMin, [maxKey]: vMax };

    if (this.input) {
      if (round !== undefined) {
        this.input.round = round;
        this.input.setAttribute("round", String(round));
      }
      if (vMin !== undefined) {
        this.input.value1 = vMin;
        this.input.setAttribute("value1", String(vMin));
      }
      if (vMax !== undefined) {
        this.input.value2 = vMax;
        this.input.setAttribute("value2", String(vMax));
      }
    }

    this.onChange(true);
  }

  // Build the editor UI
  build() {
    const { minKey, maxKey, minProp, maxProp, step, round } = this._getConfig();
    const { options = {}, schema = {}, theme } = this;
    const startVals = options.startval ?? this.defaults?.startVals?.[this.key];

    // Create label and description elements if not in compact mode
    if (!options.compact)
      this.header = this.label = theme.getFormInputLabel(
        this.getTitle(),
        this.isRequired(),
      );
    if (schema.description)
      this.description = theme.getFormInputDescription(
        this.translateProperty(schema.description),
      );
    if (options.infoText)
      this.infoButton = theme.getInfoButton(
        this.translateProperty(options.infoText),
      );

    // Create the range slider element
    const range =
      /** @type {HTMLInputElement & { round?: number, value1?: number, value2?: number }} */ (
        document.createElement("tc-range-slider")
      );

    const attrs = {
      ...(round !== undefined && { round }),
      ...(minProp.minimum !== undefined && { min: minProp.minimum }),
      ...(maxProp.maximum !== undefined && { max: maxProp.maximum }),
      ...(step !== undefined && { step }),
      "generate-labels": "true",
      "generate-labels-text-color": "currentColor",
      "slider-width": "100%",
      "range-dragging": "false",
    };
    Object.entries(attrs).forEach(([k, v]) => range.setAttribute(k, String(v)));

    this.input = range;
    this.input.id = this.formname;
    this.control = theme.getFormControl(
      this.label,
      this.input,
      this.description,
      this.infoButton,
    );

    if (schema.readOnly || schema.readonly) {
      this.disable(true);
      this.input.disabled = true;
    }

    // Add event listener for change events on the range slider
    this.input.addEventListener("change", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.value = {
        [minKey]: range.value1 ?? e.detail.value1,
        [maxKey]: range.value2 ?? e.detail.value2,
      };
      this.onChange(true);
    });

    this.container.appendChild(this.control);

    // Initialize values and precision
    this.setValue(
      startVals ?? {
        [minKey]: minProp.default,
        [maxKey]: maxProp.default,
      },
    );
  }

  // Destroy the editor and remove all associated elements
  destroy() {
    this.label?.parentNode?.removeChild(this.label);
    this.description?.parentNode?.removeChild(this.description);
    this.input?.parentNode?.removeChild(this.input);
    super.destroy();
  }
}
