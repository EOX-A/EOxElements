// @ts-ignore
import Sortable from "sortablejs/modular/sortable.core.esm.js";
import { layerSwitcherTemplate, layerSwitcherItem } from "./template";
import { EOxMap } from "../../map/main";

const template = document.createElement("template");
template.innerHTML = layerSwitcherTemplate;

export class EOxLayerSwitcher extends HTMLElement {
  shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    this.shadowRoot.appendChild(div);

    const eoxMap = <EOxMap>document.querySelector("eox-map");
    eoxMap.map.once("loadend", () => {
      const collection = eoxMap.map.getLayers();
      const initialLayers = [...collection.getArray()].reverse();
      const ul = this.shadowRoot.querySelector("ul");
      ul.innerHTML = "";
      initialLayers.forEach((layer) => {
        const li = document.createElement("template");
        li.innerHTML = layerSwitcherItem;
        // @ts-ignore
        const item: Element = li.content.cloneNode(true);

        if (layer.getVisible()) {
          item
            .querySelector("input[type='checkbox']")
            .setAttribute("checked", "true");
        }
        item
          .querySelector("input[type='checkbox']")
          .addEventListener("click", () => {
            layer.setVisible(!layer.getVisible());
          });
        item
          .querySelector("input[type='range']")
          .addEventListener("input", (evt) => {
            // @ts-ignore
            layer.setOpacity(evt.target.value / 100);
          });
        item.querySelector("span.title").innerHTML = layer.get("title");
        item.querySelector("li").setAttribute("layerid", layer.get("title")); // TODO replace by id?

        ul.appendChild(item);
      });
      Sortable.create(ul, {
        handle: ".dragHandle",
        onChange: (evt: any) => {
          // current state of layers
          const layers = eoxMap.map.getLayers().getArray();
          const draggedItem = layers.find(
            (l) => l.get("title") === evt.item.getAttribute("layerid")
          ); // TODO replace by id?
          collection.removeAt(layers.findIndex((l) => l === draggedItem));
          collection.insertAt(layers.length - evt.newIndex, draggedItem);
        },
      });
    });
  }
}

customElements.define("eox-layerswitcher", EOxLayerSwitcher);
