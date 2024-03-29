import { html } from "lit";
import "./src/main";
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
