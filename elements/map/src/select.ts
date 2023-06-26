import Select from "ol/interaction/Select";
import { EOxMap } from "../main";
import { pointerMove } from "ol/events/condition";
import { Overlay } from "ol";
import "./tooltip";

export function addSelect(EOxMap: EOxMap, layerId: string, options: any): void {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${options.id} already exists.`);
  }

  const map = EOxMap.map;

  const selectLayer = EOxMap.getLayerById(layerId);

  const hoverInteraction = new Select({
    condition: pointerMove,
    style: null,
    layers: [selectLayer],
  });

  // identifier to retrieve the interaction
  map.addInteraction(hoverInteraction);

  if (options.showTooltip) {
    const tooltip = document.createElement("eox-map-tooltip");
    EOxMap.shadow.appendChild(tooltip);
    const overlay = new Overlay({
      element: tooltip,
      position: undefined,
      positioning: "top-left",
    });

    hoverInteraction.on("select", (e) => {
      map.addOverlay(overlay);
      if (e.selected.length) {
        tooltip.innerHTML = JSON.stringify(e.selected[0].get("name"));
        overlay.setPosition(
          EOxMap.map.getEventCoordinate(e.mapBrowserEvent.originalEvent)
        );
      } else {
        overlay.setPosition(null);
      }
    });
  }

  EOxMap.interactions[options.id] = hoverInteraction;
}
