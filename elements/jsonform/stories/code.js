/**
 * Story demonstrating the Ace editor
 */
import codeSchema from "./public/codeSchema.json";
import { html } from "lit";

export default {
  args: {
    schema: codeSchema,
    value: {
      code: `// Some code here
function sayHello() {
  console.log("Hello World!");  
}

sayHello();`,
    },
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema} .value=${args.value}></eox-jsonform>
  `,
};
