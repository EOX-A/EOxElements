import { html } from "lit";
import "./src/main";
import basicSchema from "./examples/basicSchema.json";
import catalogSchema from "./examples/catalogSchema.json";
import collectionSchema from "./examples/collectionSchema.json";
import catalogStartVals from "./examples/catalogStartVals.json";
import collectionStartVals from "./examples/collectionStartVals.json";

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
