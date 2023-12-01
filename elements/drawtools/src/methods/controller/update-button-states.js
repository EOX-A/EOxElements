/**
 * Update button state of draw and discard buttons based on specific conditions.
 *
 * @param {import("../../components/controller").EOxDrawToolsController} EoxDrawToolController - The controller instance.
 * @returns {{ drawDisabled: boolean | import("lit").nothing, discardDisabled: boolean | import("lit").nothing }} - The updated button states.
 */
const updateButtonStatesMethod = (EoxDrawToolController) => {
  // Destructure relevant properties from the controller
  const { multipleFeatures, drawnFeatures, currentlyDrawing } =
    EoxDrawToolController;

  // Determine draw button's disabled state based on conditions
  const drawDisabled =
    (!multipleFeatures && drawnFeatures?.length > 0) || currentlyDrawing;

  // Determine discard button's disabled state based on conditions
  const discardDisabled = !drawnFeatures?.length && !currentlyDrawing;

  // Return the updated button states
  return { drawDisabled, discardDisabled };
};

export default updateButtonStatesMethod;
