import {
  AdditionalParametersStory,
  ButtonModeStory,
  CustomAlignmentsStory,
  CustomLoaderStory,
  ExtentLimitStory,
  PrimaryStory,
} from "./index.js";

export default {
  title: "Elements/eox-geosearch",
  tags: ["autodocs"],
  component: "eox-geosearch",
};

/**
 * Basic usage of eox-geosearch with a default OpenCage endpoint. The search bar is positioned on the map and interacts with the map to zoom to selected results.
 * Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
 * In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.
 */
export const Primary = PrimaryStory;

/**
 * Button mode hides the input field until the button is clicked. Useful for compact map controls.
 * Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
 * In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.
 */
export const ButtonMode = ButtonModeStory;

/**
 * Demonstrates multiple eox-geosearch elements with different alignments and directions.
 * Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
 * In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.
 */
export const CustomAlignments = CustomAlignmentsStory;

/**
 * Shows how to use a custom SVG loader for the search input.
 * Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
 * In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.
 */
export const CustomLoader = CustomLoaderStory;

/**
 * Limits search results to a specified geographic extent. Tooltip and direction are also customizable via attributes.
 * Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
 * In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.
 */
export const ExtentLimit = ExtentLimitStory;

/**
 * Demonstrates passing additional parameters to the OpenCage API, such as language, result limit, and country code, all via the `params` property.
 * Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
 * In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.
 */
export const AdditionalParameters = AdditionalParametersStory;
