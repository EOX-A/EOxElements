import { animateToStateMethod } from "./";

export default function firstUpdatedMethod(zoomExtent, EOxMap) {
  EOxMap.map.once("change:target", (e) => {
    e.target.getView().setCenter(EOxMap.center);
  });
  EOxMap.map.setTarget(EOxMap.renderRoot.querySelector("div"));

  if (zoomExtent) EOxMap.map.getView().fit(zoomExtent, EOxMap.animationOptions);
  else animateToStateMethod(EOxMap);

  EOxMap.map.on("loadend", () => {
    EOxMap.dispatchEvent(new CustomEvent("loadend", { detail: EOxMap.map }));
  });
  EOxMap.dispatchEvent(new CustomEvent("mapmounted", { detail: EOxMap.map }));
}
