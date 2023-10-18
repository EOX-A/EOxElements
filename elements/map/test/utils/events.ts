import { Map, MapBrowserEvent } from "ol";

const width = 400;
const height = 400;
/**
 * Simulates a browser event on the map viewport.
 */
export function simulateEvent(
  map: Map,
  type: "pointermove" | "pointerup" | "pointerdown" | "click",
  x: number,
  y: number
) {
  const viewport = map.getViewport();
  // calculated in case body has top < 0 (test runner with small window)
  const position = viewport.getBoundingClientRect();
  const event = {
    type: type,
    target: viewport.firstChild,
    clientX: position.left + x + width / 2,
    clientY: position.top + y + height / 2,
    preventDefault: function () {},
    pointerType: "mouse",
  };
  // @ts-ignore
  const simulatedEvent = new MapBrowserEvent(type, map, event);
  map.handleMapBrowserEvent(simulatedEvent);
  return simulatedEvent;
}
