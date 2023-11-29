/**
 * Handles initial settings and event triggers upon component's first update.
 *
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
const firstUpdatedMethod = (EoxDrawToolList) => {
  // Set hover and click interactions
  EoxDrawToolList.hoverInteraction =
    EoxDrawToolList.eoxMap.selectInteractions["selectHover"];
  EoxDrawToolList.clickInteraction =
    EoxDrawToolList.eoxMap.selectInteractions["selectClick"];

  // Trigger an update when the style changes due to interaction
  const handleInteractionStyleChange = () => {
    EoxDrawToolList.requestUpdate();
  };

  // Event triggers for style change due to interaction
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
