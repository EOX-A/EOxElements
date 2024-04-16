import joi from "joi";

const basicHero = {
  id: joi.string().required(),
  as: joi.string().valid("img", "video").required(),
  src: joi.string().uri().required(),
  position: joi.string().valid("center", "left", "right"),
};

const modeBasedSchema = {
  hero: {
    img: joi.object({ ...basicHero }).unknown(),
    video: joi.object({ ...basicHero }).unknown(),
  },
};

export async function validateMarkdownAttrs(attrs) {
  for (const section of Object.keys(attrs)) {
    const attr = attrs[section];
    if (attr.mode && attr.as) {
      const schema = modeBasedSchema[attr.mode][attr.as];
      const result = await schema.validate(attr, { abortEarly: false });
      result.error?.details.forEach((error) => {
        console.error(section, error.message);
      });
    }
  }
}
