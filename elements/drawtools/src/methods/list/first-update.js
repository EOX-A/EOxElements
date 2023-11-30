/**
 * Handles initial settings and event triggers upon the component's first update.
 *
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
const firstUpdatedMethod = (EoxDrawToolList) => {
  // Set hover and click interactions
  // Assign the hover and click interactions from eoxMap to respective variables in EoxDrawToolList
  EoxDrawToolList.hoverInteraction =
    EoxDrawToolList.eoxMap.selectInteractions["selectHover"];
  EoxDrawToolList.clickInteraction =
    EoxDrawToolList.eoxMap.selectInteractions["selectClick"];

  // Function to trigger an update when the style changes due to interaction
  const handleInteractionStyleChange = () => {
    EoxDrawToolList.requestUpdate();
  };

  // Event triggers for style change due to interaction
  // Add listeners for style change in both hover and click interactions
  EoxDrawToolList.hoverInteraction.selectStyleLayer.on(
    "change",
    handleInteractionStyleChange
  );
  EoxDrawToolList.clickInteraction.selectStyleLayer.on(
    "change",
    handleInteractionStyleChange
  );
};

export default firstUpdatedMethod;
