/**
 * Story demonstrating the Ace editor
 */
import codeSchema from "./public/codeSchema.json";

const Code = {
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
};
export default Code;
