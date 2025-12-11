import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const Expert = {
  args: {
    ...STORY_ARGS,
    center: [12, 42],
    zoom: 10,
    layerIdKey: "id",
    titleKey: "name",
    externalMapRendering: true,
    animate: true,
    for: "eox-map#external-map-rendering-mosaic",
    select: (e) => {
      console.log(e.detail);
    },
  },
  render: (args) => html`
    <eox-map
      id="external-map-rendering-mosaic"
      style="width: 100%; height: 500px;"
      .zoom=${args.zoom}
      .center=${args.center}
    ></eox-map>
    <eox-timecontrol
      .for=${args.for}
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .externalMapRendering=${args.externalMapRendering}
      @select=${args.select}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .navigation=${true}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .range=${true}
          .showDots=${true}
          .popup=${true}
        ></eox-timecontrol-picker>
        <div style="display: flex;align-items: center;">
          <eox-itemfilter
            id="timecontrol-filter"
            .inlineMode=${true}
            .titleProperty=${"id"}
            .showResults=${false}
            .filterProperties=${args.filters}
            style="--inline-container-height: 40px"
          ></eox-itemfilter>
          <eox-timecontrol-timelapse></eox-timecontrol-timelapse>
        </div>
      </div>
      <eox-timecontrol-timeline
        style="margin-top: 10px;"
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
    <script>
      const eoxMap = document.querySelector(
        "eox-map#external-map-rendering-mosaic",
      );
      let items = [];
      let tileJson = "";
      let startDate = "2025-09-01T00:00:00Z";
      let endDate = new Date().toISOString();

      const osmLayer = {
        type: "Tile",
        properties: {
          id: "OSM",
        },
        source: {
          type: "OSM",
        },
      };

      const createMosaicLayer = (items, tileJson) => ({
        type: "Tile",
        source: {
          type: "TileJSON",
          url:
            tileJson +
            "?&tile_scale=2&assets=B04&assets=B03&assets=B02&color_formula=Gamma%20RGB%203.2%20Saturation%200.8%20Sigmoidal%20RGB%2025%200.35&nodata=0&minzoom=9&collection=sentinel-2-l2a&format=png",
          crossOrigin: "anonymous",
        },
        properties: {
          id: "sentinel-2",
          title: items.length ? items[0].properties.datetime : "dummy title",
          timeControlValues:
            items?.map((f) => ({
              date: f.properties.datetime,
              itemId: f.id,
              cloudCoverage: f.properties["eo:cloud_cover"],
            })) || [],
          timeControlProperty: "dummy",
        },
      });

      const fetchItems = async (extent, dateStart, dateEnd) => {
        const url =
          "https://planetarycomputer.microsoft.com/api/stac/v1/search?collections=sentinel-2-l2a&bbox=" +
          eoxMap.lonLatExtent +
          "&limit=200&datetime=" +
          dateStart +
          "/" +
          dateEnd +
          "&sortby=-datetime";
        const searchResponse = await fetch(url);
        const { features } = await searchResponse.json();
        return features;
      };

      const registerMosaic = async (dateStart, dateEnd) => {
        const registerResponse = await fetch(
          "https://planetarycomputer.microsoft.com/api/data/v1/mosaic/register",
          {
            method: "POST",
            body: JSON.stringify({
              "filter-lang": "cql2-json",
              filter: {
                op: "and",
                args: [
                  {
                    op: "=",
                    args: [{ property: "collection" }, "sentinel-2-l2a"],
                  },
                  {
                    op: "anyinteracts",
                    args: [
                      { property: "datetime" },
                      { interval: [dateStart, dateEnd] },
                    ],
                  },
                ],
              },
              sortby: [{ field: "datetime", direction: "desc" }],
            }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const { links } = await registerResponse.json();
        return links.find((l) => l.rel === "tilejson").href;
      };

      // Listen for timeslider updates and update map layers accordingly
      document
        .querySelector("eox-timecontrol")
        .addEventListener("select", async (e) => {
          console.log(e.detail);
          const now = Date.now();
          if (!items.length) return;
          const start = new Date(e.detail.date[0]);
          const end = new Date(e.detail.date[1]);
          tileJson = await registerMosaic(
            start.toISOString(),
            end.toISOString(),
          );
          eoxMap.layers = [createMosaicLayer(items, tileJson), osmLayer];
        });
      document
        .querySelector("eox-timecontrol-timelapse")
        .addEventListener("export", async (e) => {
          const mapLayers = [];
          for (const dateKey in e.detail.selectedRangeItems) {
            const date = e.detail.selectedRangeItems[dateKey][0].originalDate;
            const start = new Date(date);
            const end = new Date(
              new Date(start).setDate(new Date(start).getDate() + 1),
            );
            if (date && date.length) {
              const currentTileJson = await registerMosaic(
                start.toISOString(),
                end.toISOString(),
              );
              mapLayers.push({
                layers: [createMosaicLayer([], currentTileJson), osmLayer],
                date: dateKey,
              });
            }
          }
          e.detail.generate({
            mapLayers,
          });
        });

      // Initial rendering
      eoxMap.layers = [osmLayer];

      eoxMap.map.on("moveend", async () => {
        items = await fetchItems(eoxMap.lonLatExtent, startDate, endDate);
        eoxMap.layers = [createMosaicLayer(items, tileJson), osmLayer];
      });
    </script>
  `,
};

export default Expert;
