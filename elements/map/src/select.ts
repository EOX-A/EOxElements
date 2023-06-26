import Select from "ol/interaction/Select";
import { EOxMap } from "../main";
import { pointerMove } from "ol/events/condition";
import { MapBrowserEvent, Overlay } from "ol";
import "./tooltip";

export function addSelect(EOxMap: EOxMap, layerId: string, options: any): void {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${options.id} already exists.`);
  }

  const map = EOxMap.map;

  const selectLayer = EOxMap.getLayerById(layerId);

  const selectInteraction = new Select({
    condition: pointerMove,
    style: null,
    layers: [selectLayer],
  });

  // identifier to retrieve the interaction
  map.addInteraction(selectInteraction);

  if (options.showTooltip) {
    const tooltip = document.createElement("eox-map-tooltip");
    EOxMap.shadow.appendChild(tooltip);
    const overlay = new Overlay({
      element: tooltip,
      position: undefined,
      offset: [0, -30],
      positioning: "top-center",
    });

    // if pointermove condition, update the position of the tooltip on pointermove
    // instead of only when selection changes
    if (options.condition === "pointermove") {
      const pointermoveListener = (e: MapBrowserEvent<any>) => {
        if (e.dragging) {
          return;
        }
        if (selectInteraction.getFeatures().getLength()) {
          overlay.setPosition(e.coordinate);
        }
      };
      map.on("pointermove", pointermoveListener);

      map.getInteractions().on("remove", (e) => {
        if (e.element === selectInteraction) {
          // remove the pointermove-listener when select-interaction is removed
          map.un("pointermove", pointermoveListener);
        }
      });
    }

    selectInteraction.on("select", (e) => {
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

    map.getInteractions().on("remove", (e) => {
      if (e.element === selectInteraction) {
        // remove the pointermove-listener when select-interaction is removed
        map.removeOverlay(overlay)
      }
    });
  }

  EOxMap.interactions[options.id] = selectInteraction;
}
