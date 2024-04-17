import joi from "joi";

const basicSchema = {
  id: joi.string().required(),
};

const basicHeroSchema = {
  ...basicSchema,
  as: joi.string().valid("img", "video").required(),
  src: joi.string().uri().required(),
  position: joi.string().valid("center", "left", "right"),
};

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

const eoxMapSchemaConfig = {
  config: joi
    .object({
      ...eoxMapSchema,
    })
    .unknown()
    .optional(),
};

const tagBasedSchema = {
  "eox-map": joi
    .object({ ...basicSchema, ...eoxMapSchema, ...eoxMapSchemaConfig })
    .unknown(),
};

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

export function validateMarkdownAttrs(attrs) {
  for (const section of Object.keys(attrs)) {
    const attr = attrs[section];
    if (attr.as) {
      const schema = attr.mode
        ? modeBasedSchema[attr.mode]?.[attr.as]
        : tagBasedSchema[attr.as];
      if (schema) {
        const result = schema.validate(attr, { abortEarly: false });
        result.error?.details.forEach((error) => {
          console.error(section, error.message);
        });
      }
    }
  }
}
