import {
  isBox,
  isMulti,
  isPolygon,
  isSelection,
  isSupported,
  satisfiesType,
} from "./utils";

/**
 * Validates values of supported spatial types and formats
 *
 * @param {*} schema
 * @param {*} value
 * @param {*} path
 * @returns {{}}
 */
function spatialValidator(schema, value, path) {
  let errors = [];
  if (!schema.properties) {
    return errors;
  }

  Object.keys(schema.properties).forEach((key) => {
    const subSchema = schema.properties[key];
    if (subSchema.type !== "spatial" || !isSupported(subSchema)) {
      // only validate spatial types and defined formats
      return;
    }

    const undefinedError = undefinedValidator(key, value[key], path);
    if (undefinedError.length) {
      errors.push(...undefinedError);
      return;
    }

    switch (true) {
      case isSelection(subSchema): {
        errors.push(
          ...handleMultiValidation({
            key,
            subValue: value[key],
            subSchema,
            path,
            validationFn: selectValidator,
          }),
        );
        break;
      }
      case isBox(subSchema): {
        errors.push(
          ...handleMultiValidation({
            key,
            subValue: value[key],
            subSchema,
            path,
            validationFn: bBoxValidator,
          }),
        );
        break;
      }
      case isPolygon(subSchema): {
        errors.push(
          ...handleMultiValidation({
            key,
            subValue: value[key],
            subSchema,
            path,
            validationFn: polygonValidator,
          }),
        );
        break;
      }
      default:
        break;
    }
  });
  return errors;
}

export default spatialValidator;
/**
 * Handles validating array values of type spatial
 */
function handleMultiValidation({
  key,
  subValue,
  path,
  subSchema,
  validationFn,
}) {
  if (isMulti(subSchema)) {
    if (!Array.isArray(subValue)) {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to be an array but got typeof ${typeof subValue}`,
          property: "format",
        },
      ];
    } else {
      return subValue.flatMap((v, i) =>
        validationFn(`${key}.${i}`, v, path, subSchema),
      );
    }
  } else {
    return validationFn(key, subValue, path, subSchema);
  }
}

/**
 * Bounding box validator
 */
function bBoxValidator(key, val, path) {
  // expect to return the spacial extent
  const errors = [];
  if (val.length !== 4) {
    return [
      {
        path: `${path}.${key}`,
        message: `Value is expected to have 4 values but got ${val.length}`,
        property: "format",
      },
    ];
  }

  val.forEach((v, i) => {
    if (typeof v !== "number") {
      errors.push({
        path: `${path}.${key}.${i}`,
        message: `extent is expected to be of type number but got ${v}`,
        property: "format",
      });
    }
  });
  return errors;
}

/**
 * Feature selection validator
 */
function selectValidator(key, val, path, subSchema) {
  // type can be "string","number","boolean","object","array"
  const expected = subSchema.options?.type;
  if (expected) {
    if (satisfiesType(val, expected)) {
      return [];
    } else {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to be of type ${expected} but got typeof ${typeof val}`,
          property: "format",
        },
      ];
    }
  }
  return [];
}

function polygonValidator(key, val, path) {
  if (typeof val !== "object" && !Object.keys(val).length) {
    return [
      {
        path: `${path}.${key}`,
        message: `Value was expected to be a feature object `,
        property: "format",
      },
    ];
  }
  return [];
}

function undefinedValidator(key, val, path) {
  if (!val) {
    return [
      {
        path: `${path}.${key}`,
        message: `Value is undefined`,
        property: "type",
      },
    ];
  }
  return [];
}
