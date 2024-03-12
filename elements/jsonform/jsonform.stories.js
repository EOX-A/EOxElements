import { html } from "lit";
import basicSchema from "./stories/public/basicSchema.json";
import catalogSchema from "./stories/public/catalogSchema.json";
import collectionSchema from "./stories/public/collectionSchema.json";
import catalogStartVals from "./stories/public/catalogStartVals.json";
import collectionStartVals from "./stories/public/collectionStartVals.json";

const externalSchema = `${
  window.location.href.split("iframe.html")[0]
}/catalogSchema.json`;
const externalStartVals = `${
  window.location.href.split("iframe.html")[0]
}/catalogStartVals.json`;

export default {
  title: "Elements/eox-jsonform",
  tags: ["autodocs"],
  component: "eox-jsonform",
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .startVals=${args.startVals}
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
    startVals: catalogStartVals,
  },
};

export const Collection = {
  args: {
    schema: collectionSchema,
    startVals: collectionStartVals,
  },
};

export const External = {
  args: {
    schema: externalSchema,
    startVals: externalStartVals,
  },
};
