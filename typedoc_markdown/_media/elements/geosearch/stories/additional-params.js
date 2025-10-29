import Primary from "./primary";

export const AdditionalParameters = {
  ...Primary,
  args: {
    ...Primary.args,
    params: {
      language: "en",
      limit: 5,
      countrycode: "us",
    },
  },
};

const Template = AdditionalParameters;

export default Template;
