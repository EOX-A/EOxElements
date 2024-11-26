/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Allows users to select a bounding box on a map as a form input
 */
import pointSchema from "./public/pointSchema.json";

const Point = {
  args: {
    schema: pointSchema,
  },
};
export default Point;
