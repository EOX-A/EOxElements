import { html } from "lit";
import "./src/main";
import catalogSchema from "./schema/catalog.json";
import collectionSchema from "./schema/collection.json";
import exampleCatalog from "./examples/catalog.json";
import exampleCollection from "./examples/collection.json";

export default {
  title: "Elements/eox-jsonform",
  tags: ["autodocs"],
  component: "eox-jsonform",
};

export const Catalog = {
  args: {
    schema: catalogSchema,
    startVals: exampleCatalog,
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
    startVals: exampleCollection,
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .startVals=${args.startVals}
    ></eox-jsonform>
  `,
};
