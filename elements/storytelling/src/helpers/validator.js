import joi from "joi";

// Basic schema for all type
const basicSchema = {
  id: joi.string().required(),
};

// Basic validate schema for all hero sections
const basicHeroSchema = {
  ...basicSchema,
  as: joi.string().valid("img", "video").required(),
  src: joi.string().uri().required(),
  position: joi.string().valid("center", "left", "right"),
};

// EOxMap validation schema
const eoxMapSchema = {
  layers: joi
    .array()
    .items(
      joi
        .object({
          type: joi.string().required(),
          properties: joi
            .object({
              id: joi.string().required(),
            })
            .unknown()
            .required(),
          source: joi
            .object({
              type: joi.string().required(),
            })
            .unknown()
            .required(),
        })
        .unknown()
        .required()
    )
    .optional(),
  center: joi.array().items(joi.number()).min(2).max(2).optional(),
  zoom: joi.number().optional(),
};

// EOxMap config attribute validation schema
const eoxMapSchemaConfig = {
  config: joi
    .object({
      ...eoxMapSchema,
    })
    .unknown()
    .optional(),
};

// Tag based (as) validation schema
const tagBasedSchema = {
  "eox-map": joi
    .object({ ...basicSchema, ...eoxMapSchema, ...eoxMapSchemaConfig })
    .unknown(),
};

// Mode based validation schema
const modeBasedSchema = {
  hero: {
    img: joi.object({ ...basicHeroSchema }).unknown(),
    video: joi.object({ ...basicHeroSchema }).unknown(),
  },
  tour: {
    "eox-map": tagBasedSchema["eox-map"],
    "section-step": joi
      .object({ ...eoxMapSchema, ...eoxMapSchemaConfig })
      .unknown(),
  },
};

/**
 * Validate markdown attributes based on mode and as
 *
 * @param {Object} attrs - List of attributes
 */
export function validateMarkdownAttrs(attrs) {
  for (const section of Object.keys(attrs)) {
    const attr = attrs[section];
    if (attr.as) {
      // Identifying schema based on mode and as
      const schema = attr.mode
        ? modeBasedSchema[attr.mode]?.[attr.as]
        : tagBasedSchema[attr.as];
      if (schema) {
        const result = schema.validate(attr, { abortEarly: false });
        result.error?.details.forEach((error) => {
          console.error(`#${section}`, error.message);
        });
      }
    }
  }
}
