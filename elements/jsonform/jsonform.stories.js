// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import basicSchema from "./stories/public/basicSchema.json";
import catalogSchema from "./stories/public/catalogSchema.json";
import collectionSchema from "./stories/public/collectionSchema.json";
import catalogValue from "./stories/public/catalogValue.json";
import collectionValue from "./stories/public/collectionValue.json";

const externalSchema = `${
  window.location.href.split("iframe.html")[0]
}/catalogSchema.json`;
const externalValue = `${
  window.location.href.split("iframe.html")[0]
}/catalogValue.json`;

export default {
  title: "Elements/eox-jsonform",
  tags: ["autodocs"],
  component: "eox-jsonform",
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .noShadow=${true}
      .unstyled=${args.unstyled}
    ></eox-jsonform>
  `,
};

export const Primary = {
  args: {
    schema: basicSchema,
  },
};

export const Catalog = {
  args: {
    schema: catalogSchema,
    value: catalogValue,
  },
};

export const Collection = {
  args: {
    schema: collectionSchema,
    value: collectionValue,
  },
};

export const External = {
  args: {
    schema: externalSchema,
    value: externalValue,
  },
};

export const Markdown = {
  args: {
    schema: {
      type: "object",
      properties: {
        md: {
          type: "string",
          format: "markdown",
          options: {
            simplemde: {
              spellChecker: false,
            },
          },
        },
      },
    },
    value: {
      md: "# Hello world! This is [markdown](https://en.wikipedia.org/wiki/Markdown).",
    },
  },
};
