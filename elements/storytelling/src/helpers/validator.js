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

const modeBasedSchema = {
  hero: {
    img: joi.object({ ...basicHeroSchema }).unknown(),
    video: joi.object({ ...basicHeroSchema }).unknown(),
  },
  tour: {
    "eox-map": joi.object({ ...basicSchema }).unknown(),
  },
};

export async function validateMarkdownAttrs(attrs) {
  for (const section of Object.keys(attrs)) {
    const attr = attrs[section];
    if (attr.mode && attr.as) {
      const schema = modeBasedSchema[attr.mode]?.[attr.as];
      if (schema) {
        const result = await schema.validate(attr, { abortEarly: false });
        result.error?.details.forEach((error) => {
          console.error(section, error.message);
        });
      }
    }
  }
}
