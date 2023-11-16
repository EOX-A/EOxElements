import { html } from "lit";
import "./src/main";
import catalogSchema from "./schema/catalog.json";
import collectionSchema from "./schema/collection.json";
import exampleCatalog from "./exampleCatalog.json";
import exampleCollection from "./exampleCollection.json";

export default {
  title: "Elements/eox-jsonform",
  tags: ["autodocs"],
  component: "eox-jsonform",
};

export const Catalog = {
  args: {
    schema: catalogSchema,
    defaultValues: exampleCatalog,
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .defaultValues=${args.defaultValues}
    ></eox-jsonform>
  `,
};

export const Collection = {
  args: {
    schema: collectionSchema,
    defaultValues: exampleCollection,
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .defaultValues=${args.defaultValues}
    ></eox-jsonform>
  `,
};
