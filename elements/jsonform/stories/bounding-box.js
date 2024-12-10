/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Allows users to select a bounding box on a map as a form input
 */
import boundingBoxSchema from "./public/boundingBoxSchema.json";

const BoundingBox = {
  args: {
    schema: boundingBoxSchema,
  },
};
export default BoundingBox;
