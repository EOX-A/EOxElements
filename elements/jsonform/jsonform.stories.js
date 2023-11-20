import { html } from "lit";
import "./src/main";
import catalogSchema from "./examples/catalogSchema.json";
import collectionSchema from "./examples/collectionSchema.json";
import catalogStartVals from "./examples/catalogStartVals.json";
import collectionStartVals from "./examples/collectionStartVals.json";

export default {
  title: "Elements/eox-jsonform",
  tags: ["autodocs"],
  component: "eox-jsonform",
};

export const Catalog = {
  args: {
    schema: catalogSchema,
    startVals: catalogStartVals,
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .startVals=${args.startVals}
    ></eox-jsonform>
  `,
};

export const Collection = {
  args: {
    schema: collectionSchema,
    startVals: collectionStartVals,
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .startVals=${args.startVals}
    ></eox-jsonform>
  `,
};
