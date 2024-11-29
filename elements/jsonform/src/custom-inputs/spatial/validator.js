import {
  isBox,
  isGeoJSON,
  isMulti,
  isPoint,
  isPolygon,
  isSelection,
  isSupported,
  isWKT,
  satisfiesType,
} from "./utils";

/**
 *  @param {{
 *   type?: string
 *   format: string
 *   func: Record<string,any> & { new (): any }
 * }[]} inputs
 **/
function spatialValidatorCreator(inputs) {
  /**
   * Validates values of supported spatial types and formats
   *
   * @param {*} schema
   * @param {*} value
   * @param {*} path
   */
  return function (schema, value, path) {
    let errors = [];
    if (!schema.properties) {
      return errors;
    }

    Object.keys(schema.properties).forEach((key) => {
      const subSchema = schema.properties[key];
      const toBeValidated =
        isSupported(subSchema) &&
        (subSchema.format === "feature" ||
          inputs.some(
            (i) => i.format === subSchema.format && i.type === subSchema.type,
          ));

      if (!toBeValidated) {
        // only validate defined types and formats using the spatial editor
        return;
      }

      const undefinedError = undefinedValidator(key, value[key], path);
      if (undefinedError.length) {
        errors.push(...undefinedError);
        return;
      }

      switch (true) {
        case isWKT(subSchema): {
          errors.push(...wktValidator(key, value[key], path));
          break;
        }
        case isGeoJSON(subSchema): {
          errors.push(...geoJsonValidator(key, value[key], path, subSchema));
          break;
        }
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
        case isPoint(subSchema): {
          errors.push(
            ...handleMultiValidation({
              key,
              subValue: value[key],
              subSchema,
              path,
              validationFn: pointValidator,
            }),
          );
          break;
        }
        default:
          break;
      }
    });
    return errors;
  };
}
export default spatialValidatorCreator;
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
    } else if (!subValue.length) {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to have at least one value`,
          property: "format",
        },
      ];
    }

    return subValue?.flatMap((v, i) =>
      validationFn(`${key}.${i}`, v, path, subSchema),
    );
  } else {
    return validationFn(key, subValue, path, subSchema);
  }
}

/**
 * Bounding box validator
 */
function bBoxValidator(key, val, path) {
  // expect to return the spatial extent
  const errors = [];
  if (val.length !== 4) {
    return [
      {
        path: `${path}.${key}`,
        message: `Value is expected to have 4 items but got ${val.length}`,
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
  let expected;
  if (isMulti(subSchema)) {
    expected = subSchema?.items?.type;
  } else {
    expected = subSchema.type;
  }
  if (expected) {
    // type can be "string","number","boolean","object","array"
    if (satisfiesType(val, expected)) {
      return [];
    } else {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to be a valid ${expected}`,
          property: "format",
        },
      ];
    }
  }
  return [];
}
function polygonValidator(key, val, path) {
  if (typeof val !== "object" || !Object.keys(val).length) {
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

function pointValidator(key, val, path) {
  // expect to return point coordinates
  const errors = [];
  if (val.length !== 2) {
    return [
      {
        path: `${path}.${key}`,
        message: `Value is expected to have 2 items but got ${val.length}`,
        property: "format",
      },
    ];
  }

  val.forEach((v, i) => {
    if (typeof v !== "number") {
      errors.push({
        path: `${path}.${key}.${i}`,
        message: `coordinates is expected to be of type number but got ${v}`,
        property: "format",
      });
    }
  });
  return errors;
}

function undefinedValidator(key, val, path) {
  if (!val) {
    return [
      {
        path: `${path}.${key}`,
        message: `invalid value ${JSON.stringify(val)}`,
        property: "type",
      },
    ];
  }
  return [];
}

function wktValidator(key, val, path) {
  if (typeof val !== "string") {
    return [
      {
        path: `${path}.${key}`,
        message: `Value is expected to be a valid wkt string`,
        property: "type",
      },
    ];
  }
  if (val === "GEOMETRYCOLLECTION EMPTY") {
    return [
      {
        path: `${path}.${key}`,
        message: `Should have at least 1 Geometry`,
        property: "type",
      },
    ];
  }
  return [];
}

function geoJsonValidator(key, val, path, subSchema) {
  if (typeof val !== "object" || !Object.keys(val).length) {
    return [
      {
        path: `${path}.${key}`,
        message: `Value is expected to be a valid geojson object`,
        property: "type",
      },
    ];
  }

  if (isMulti(subSchema)) {
    if (val.type !== "FeatureCollection") {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to be a valid FeaturesCollection geojson`,
          property: "type",
        },
      ];
    }
    if (!val?.features?.length) {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to have at least one feature`,
          property: "type",
        },
      ];
    }
  } else {
    if (val.type !== "Feature") {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to be a Feature geojson`,
          property: "type",
        },
      ];
    }
    if (!val?.geometry.type) {
      return [
        {
          path: `${path}.${key}`,
          message: `Value is expected to have a valid geometry`,
          property: "type",
        },
      ];
    }
  }
  return [];
}
