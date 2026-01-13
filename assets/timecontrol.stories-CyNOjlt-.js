var w=Object.freeze,C=Object.defineProperty;var h=(e,f)=>w(C(e,"raw",{value:w(f||e.slice())}));import{Q as t,x as o}from"./iframe-ns-Uou3V.js";import"./preload-helper-PPVm8Dsz.js";const v={args:{for:"eox-map#only-date",storyAdditionalComponents:{"eox-map":{id:"only-date",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:t.format}}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents["eox-timecontrol-date"].format}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `},I={args:{layerIdKey:t.layerIdKey,for:"eox-map#date-with-navigation",storyAdditionalComponents:{"eox-map":{id:"date-with-navigation",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:t.format,navigation:!0}}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents["eox-timecontrol-date"].format}
        .navigation=${e.storyAdditionalComponents["eox-timecontrol-date"].navigation}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `},D={args:{layerIdKey:t.layerIdKey,for:"eox-map#date-picker-popup",select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"date-picker-popup",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:t.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:t.format,showDots:!0,popup:!0}}},render:e=>o`
    <style>
      eox-map {
        width: 100%;
        height: 500px;
      }
    </style>
    <eox-map
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
      @select=${e.select}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents["eox-timecontrol-date"].format}
        .navigation=${e.storyAdditionalComponents["eox-timecontrol-date"].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .format=${e.storyAdditionalComponents["eox-timecontrol-picker"].format}
        .showDots=${e.storyAdditionalComponents["eox-timecontrol-picker"].showDots}
        .popup=${e.storyAdditionalComponents["eox-timecontrol-picker"].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `},k={args:{layerIdKey:t.layerIdKey,for:"eox-map#date-picker-standalone",select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"date-picker-standalone",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:t.format,showDots:!0}}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
      @select=${e.select}
    >
      <eox-timecontrol-picker
        style="width: fit-content; border: 1.5px solid #80808026; border-radius: 6px;"
        .format=${e.storyAdditionalComponents["eox-timecontrol-picker"].format}
        .showDots=${e.storyAdditionalComponents["eox-timecontrol-picker"].showDots}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `},A={args:{layerIdKey:t.layerIdKey,for:"eox-map#timeline",select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"timeline",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0}}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
      @select=${e.select}
    >
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
      <eox-timecontrol-date
        .navigation=${e.storyAdditionalComponents["eox-timecontrol-date"].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${e.storyAdditionalComponents["eox-timecontrol-picker"].showDots}
        .popup=${e.storyAdditionalComponents["eox-timecontrol-picker"].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `};var $;const M={args:{layerIdKey:t.layerIdKey,titleKey:t.titleKey,externalMapRendering:!0,animate:!0,for:"eox-map#external-map-rendering-mosaic",select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"external-map-rendering-mosaic",zoom:10,center:[12,42]},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,showItems:!0,popup:!0}}},render:e=>o($||($=h([`
    <eox-map
      style="width: 100%; height: 500px;"
      id=`,`
      .zoom=`,`
      .center=`,`
    ></eox-map>
    <eox-timecontrol
      .for=`,`
      .layerIdKey=`,`
      .titleKey=`,`
      .filters=`,`
      .externalMapRendering=`,`
      @select=`,`
    >
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
      <eox-timecontrol-date
        .navigation=`,`
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .range=`,`
        .showDots=`,`
        .showItems=`,`
        .popup=`,`
      ></eox-timecontrol-picker>
    </eox-timecontrol>
    <script>
      globalThis.externalStorySetup = () => {
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
            const now = Date.now();
            if (!items.length) return;
            const start = new Date(e.detail.date[0]);
            const end = new Date(e.detail.date[1]);
            tileJson = await registerMosaic(
              start.toISOString(),
              end.toISOString(),
            );
            eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
          });
        document
          .querySelector("eox-timecontrol")
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
                  layers: [osmLayer, createMosaicLayer([], currentTileJson)],
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
          eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
        });
      };
      externalStorySetup();
    <\/script>
  `])),e.storyAdditionalComponents["eox-map"].id,e.storyAdditionalComponents["eox-map"].zoom,e.storyAdditionalComponents["eox-map"].center,e.for,e.layerIdKey,e.titleKey,e.filters,e.externalMapRendering,e.select,e.storyAdditionalComponents["eox-timecontrol-date"].navigation,e.storyAdditionalComponents["eox-timecontrol-picker"].range,e.storyAdditionalComponents["eox-timecontrol-picker"].showDots,e.storyAdditionalComponents["eox-timecontrol-picker"].showItems,e.storyAdditionalComponents["eox-timecontrol-picker"].popup)};var g;const K={args:{layerIdKey:t.layerIdKey,titleKey:t.titleKey,filters:t.filters,externalMapRendering:!0,animate:!0,for:"eox-map#external-map-rendering-mosaic",select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"external-map-rendering-mosaic",zoom:10,center:[12,42]},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,popup:!0},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storySlot:!0}}},render:e=>o(g||(g=h([`
    <eox-map
      style="width: 100%; height: 500px;"
      id=`,`
      .zoom=`,`
      .center=`,`
    ></eox-map>
    <eox-timecontrol
      .for=`,`
      .layerIdKey=`,`
      .titleKey=`,`
      .externalMapRendering=`,`
      @select=`,`
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .navigation=`,`
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .range=`,`
          .showDots=`,`
          .popup=`,`
        ></eox-timecontrol-picker>
        <eox-itemfilter
          id="timecontrol-filter"
          .inlineMode=`,`
          .titleProperty=`,`
          .showResults=`,`
          .filterProperties=`,`
          style="--inline-container-height: 40px"
        ></eox-itemfilter>
      </div>
      <eox-timecontrol-timeline
        style="margin-top: 10px;"
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
    <script>
      globalThis.dateFilterStorySetup = () => {
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
            const now = Date.now();
            if (!items.length) return;
            const start = new Date(e.detail.date[0]);
            const end = new Date(e.detail.date[1]);
            tileJson = await registerMosaic(
              start.toISOString(),
              end.toISOString(),
            );
            eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
          });
        document
          .querySelector("eox-timecontrol")
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
                  layers: [osmLayer, createMosaicLayer([], currentTileJson)],
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
          eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
        });
      };
      dateFilterStorySetup();
    <\/script>
  `])),e.storyAdditionalComponents["eox-map"].id,e.storyAdditionalComponents["eox-map"].zoom,e.storyAdditionalComponents["eox-map"].center,e.for,e.layerIdKey,e.titleKey,e.externalMapRendering,e.select,e.storyAdditionalComponents["eox-timecontrol-date"].navigation,e.storyAdditionalComponents["eox-timecontrol-picker"].range,e.storyAdditionalComponents["eox-timecontrol-picker"].showDots,e.storyAdditionalComponents["eox-timecontrol-picker"].popup,!0,"id",!1,e.filters)};var S;const R={args:{layerIdKey:t.layerIdKey,titleKey:t.titleKey,filters:t.filters,externalMapRendering:!0,animate:!0,for:"eox-map#external-map-rendering-mosaic",select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"external-map-rendering-mosaic",zoom:10,center:[12,42]},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,popup:!0},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-timelapse":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storySlot:!0}}},render:e=>o(S||(S=h([`
    <eox-map
      style="width: 100%; height: 500px;"
      id=`,`
      .zoom=`,`
      .center=`,`
    ></eox-map>
    <eox-timecontrol
      .for=`,`
      .layerIdKey=`,`
      .titleKey=`,`
      .externalMapRendering=`,`
      @select=`,`
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .navigation=`,`
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .range=`,`
          .showDots=`,`
          .popup=`,`
        ></eox-timecontrol-picker>
        <div style="display: flex;align-items: center;">
          <eox-itemfilter
            id="timecontrol-filter"
            .inlineMode=`,`
            .titleProperty=`,`
            .showResults=`,`
            .filterProperties=`,`
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
      globalThis.expertStorySetup = () => {
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
            eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
          });
        document
          .querySelector("eox-timecontrol-timelapse")
          .addEventListener("export", async (e) => {
            const mapLayers = [];

            const minCloudCover = e.detail.filters.cloudCoverage?.state.min;
            const maxCloudCover = e.detail.filters.cloudCoverage?.state.max;

            for (const dateKey in e.detail.selectedRangeItems) {
              const date = e.detail.selectedRangeItems[dateKey][0].originalDate;
              const start = new Date(date);
              const end = new Date(
                new Date(start).setDate(new Date(start).getDate() + 1),
              );
              if (
                date &&
                date.length &&
                !e.detail.selectedRangeItems[dateKey].some(
                  (o) =>
                    o.cloudCoverage > maxCloudCover ||
                    o.cloudCoverage < minCloudCover,
                )
              ) {
                const currentTileJson = await registerMosaic(
                  start.toISOString(),
                  end.toISOString(),
                );
                mapLayers.push({
                  layers: [osmLayer, createMosaicLayer([], currentTileJson)],
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
          eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
        });
      };
      expertStorySetup();
    <\/script>
  `])),e.storyAdditionalComponents["eox-map"].id,e.storyAdditionalComponents["eox-map"].zoom,e.storyAdditionalComponents["eox-map"].center,e.for,e.layerIdKey,e.titleKey,e.externalMapRendering,e.select,e.storyAdditionalComponents["eox-timecontrol-date"].navigation,e.storyAdditionalComponents["eox-timecontrol-picker"].range,e.storyAdditionalComponents["eox-timecontrol-picker"].showDots,e.storyAdditionalComponents["eox-timecontrol-picker"].popup,!0,"id",!1,e.filters)},T={args:{layerIdKey:t.layerIdKey,for:"eox-map#slider",storyAdditionalComponents:{"eox-map":{id:"slider",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:t.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0},"eox-timecontrol-slider":{storyImport:!1,storySlot:!0}}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          .format=${e.storyAdditionalComponents["eox-timecontrol-date"].format}
          .navigation=${e.storyAdditionalComponents["eox-timecontrol-date"].navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .showDots=${e.storyAdditionalComponents["eox-timecontrol-picker"].showDots}
          .popup=${e.storyAdditionalComponents["eox-timecontrol-picker"].popup}
        ></eox-timecontrol-picker>
      </div>
      <eox-timecontrol-slider style="width: 600px;"></eox-timecontrol-slider>
    </eox-timecontrol>
  `},b={args:{layerIdKey:t.layerIdKey,titleKey:t.titleKey,filters:t.filters,externalMapRendering:t.externalMapRendering,for:"eox-map#timeline",updateView:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"timeline",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0}}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
      @update:view=${e.updateView}
    >
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
      <eox-timecontrol-date
        .navigation=${e.storyAdditionalComponents["eox-timecontrol-date"].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${e.storyAdditionalComponents["eox-timecontrol-picker"].showDots}
        .popup=${e.storyAdditionalComponents["eox-timecontrol-picker"].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `},z={args:{layerIdKey:t.layerIdKey,navigation:!0,popup:!0,for:"eox-map#date-picker-popup",select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:"date-picker-popup",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:t.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:t.format,showDots:!0,popup:!0,showItems:!0}}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
      @select=${e.select}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents["eox-timecontrol-date"].format}
        .navigation=${e.storyAdditionalComponents["eox-timecontrol-date"].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .format=${e.storyAdditionalComponents["eox-timecontrol-picker"].format}
        .showDots=${e.storyAdditionalComponents["eox-timecontrol-picker"].showDots}
        .popup=${e.storyAdditionalComponents["eox-timecontrol-picker"].popup}
        .showItems=${e.storyAdditionalComponents["eox-timecontrol-picker"].showItems}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `},L={args:{layerIdKey:t.layerIdKey,titleKey:t.titleKey,filters:t.filters,navigation:!0,popup:!0,position:["bottom","left"],select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:t.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:t.format,showDots:!0,popup:!0,position:["bottom","left"]},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-slider":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storyImport:!1,storySlot:!0}}},render:e=>o`
    <eox-timecontrol
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .controlValues=${t.layers.map(f=>f.properties)}
      @select=${e.select}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .format=${e.storyAdditionalComponents["eox-timecontrol-date"].format}
          .navigation=${e.storyAdditionalComponents["eox-timecontrol-date"].navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .format=${e.storyAdditionalComponents["eox-timecontrol-picker"].format}
          .showDots=${e.storyAdditionalComponents["eox-timecontrol-picker"].showDots}
          .popup=${e.storyAdditionalComponents["eox-timecontrol-picker"].popup}
          .position=${e.storyAdditionalComponents["eox-timecontrol-picker"].position}
        ></eox-timecontrol-picker>
        <div style="display: flex;align-items: center;">
          <eox-itemfilter
            id="timecontrol-filter"
            .inlineMode=${!0}
            .titleProperty=${"id"}
            .showResults=${!1}
            .filterProperties=${e.filters}
            style="--inline-container-height: 40px"
          ></eox-itemfilter>
        </div>
      </div>
      <eox-timecontrol-timeline
        style="margin-top: 10px;"
      ></eox-timecontrol-timeline>
      <eox-timecontrol-slider
        style="width: 600px; margin-top: 10px;"
      ></eox-timecontrol-slider>
    </eox-timecontrol>
  `},O={args:{for:"eox-map#date-with-init-date",initDate:["2021-02-28"],storyAdditionalComponents:{"eox-map":{id:"date-with-init-date",zoom:t.zoom,center:t.center,layers:t.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:"D. MMMM YYYY"}},select:e=>{console.log(e.detail)}},render:e=>o`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents["eox-map"].id}
      .zoom=${e.storyAdditionalComponents["eox-map"].zoom}
      .center=${e.storyAdditionalComponents["eox-map"].center}
      .layers=${e.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      @select=${e.select}
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
      .initDate=${e.initDate}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents["eox-timecontrol-date"].format}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `},j={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol",render:e=>o`
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .externalMapRendering=${e.externalMapRendering}
    ></eox-timecontrol>
  `},i=v,r=O,n=I,a=D,s=z,l=k,d=T,m=A,p=M,c=K,y=b,x=L,u=R;i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"OnlyDateStory",...i.parameters?.docs?.source},description:{story:'Basic timecontrol rendered using only the date display component\n\nThis renders a timecontrol element with just the `<eox-timecontrol-date>` component, which displays\nthe currently selected date(s) from the associated map layers. The date is automatically extracted\nfrom layers that have `timeControlValues` and `timeControlProperty` properties.\n\nThe component links to an `<eox-map>` instance using the `for` attribute, which can be either a\nselector string (e.g., `"eox-map#primary"`) or a direct reference to the map element.',...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"DateWithInitDateStory",...r.parameters?.docs?.source},description:{story:"Date display component with init date\n\nThis example shows the `<eox-timecontrol-date>` component with the `initDate` property added,\nwhich sets the initial date range. Also, it uses the date `format` of `D. MMMM YYYY`.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"DateWithNavigationStory",...n.parameters?.docs?.source},description:{story:"Date display component with navigation buttons for stepping through available dates\n\nThis example shows the `<eox-timecontrol-date>` component with the `navigation` property enabled,\nwhich adds previous/next buttons to step through available dates. Clicking these buttons will\nautomatically update the selected date range and apply it to the map layers.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"DatePickerPopupStory",...a.parameters?.docs?.source},description:{story:"Calendar date picker displayed in popup mode, triggered by clicking the date input field\n\nThis example demonstrates the `<eox-timecontrol-picker>` component with `popup` enabled.\nThe calendar appears as a popup overlay when clicking on the date input field (provided by\n`<eox-timecontrol-date>`). The picker supports both single date and range selection modes.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"DatePickerPopupItemsStory",...s.parameters?.docs?.source},description:{story:"Calendar date picker displayed in popup mode and shows items in the popup\n\nThis example demonstrates the `<eox-timecontrol-picker>` component with `showItems` enabled.\nThe calendar appears as a popup overlay when clicking on the date input field (provided by\n`<eox-timecontrol-date>`). The picker shows items in the popup.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"DatePickerStandaloneStory",...l.parameters?.docs?.source},description:{story:"Calendar date picker displayed inline (not in popup mode)\n\nThis example shows the `<eox-timecontrol-picker>` component without the `popup` attribute,\ndisplaying the calendar inline within the component. Useful for always-visible date selection\ninterfaces.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"SliderStory",...d.parameters?.docs?.source},description:{story:`Range slider for selecting date ranges with visual indicators for years and months

This example demonstrates the \`<eox-timecontrol-slider>\` component, which provides a visual
range slider for selecting start and end dates. The slider displays tick marks for years and
months, and tooltips show the formatted dates when hovering over or dragging the handles.
The slider automatically extracts available dates from timeline items and allows users to
select a date range by dragging the handles. The selected range is immediately applied to
the map layers.`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"TimelineStory",...m.parameters?.docs?.source},description:{story:`Timeline visualization using vis-timeline with date picker and calendar integration

This example shows the full power of the timecontrol component with the \`<eox-timecontrol-timeline>\`
component. The timeline displays timeline items as milestones grouped by layer, allowing users
to visualize time-based data across multiple layers.

Features demonstrated:
- Timeline visualization with groups and items
- Date picker with dots indicating available data (\`showDots\` attribute)
- Date display with navigation buttons
- Range selection via custom time markers on the timeline
- Click events on timeline items to select specific dates

The timeline automatically syncs with the date picker and other components, providing a
comprehensive time navigation interface.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"ExternalMapRenderingStory",...p.parameters?.docs?.source},description:{story:`External map rendering mode for timelapse export with custom map rendering logic

This example demonstrates the \`externalMapRendering\` feature, which allows custom handling
of map layer updates for timelapse export. When enabled, the timecontrol dispatches an
\`export\` event with detailed information about selected items, allowing external code to
handle the map rendering and snapshot generation.

This is useful when you need custom control over how map layers are rendered for each
time step, or when using map rendering services that require special handling.`,...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"DateFilterStory",...c.parameters?.docs?.source},description:{story:`Date filtering using eox-itemfilter for filtering timeline items by metadata properties

This example shows how to use the \`<eox-itemfilter>\` component in conjunction with timecontrol
to filter timeline items based on metadata properties (e.g., cloud coverage). The filter
component allows users to set filter criteria, and the timeline automatically updates to
show only matching items.

The calendar picker also respects the filter, showing dots only for dates that have data
matching the current filter criteria. Filtered-out dates are displayed with reduced opacity.`,...c.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"UpdateViewStory",...y.parameters?.docs?.source},description:{story:`Update view event story

This example demonstrates the \`update:view\` event, which is dispatched when the view range of the timeline changes.
The event is dispatched with the start and end dates of the view range.`,...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"NoMapStory",...x.parameters?.docs?.source},description:{story:"No map story\n\nThis example demonstrates the timecontrol component without a map. The component can be used\nstandalone by providing `controlValues` directly instead of linking to a map via the `for` attribute.\nThis is useful when you want to use timecontrol for date selection without map integration.",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"ExpertStory",...u.parameters?.docs?.source},description:{story:`Expert example showcasing all timecontrol features together

This comprehensive example demonstrates all available timecontrol components and features:
- Date display with navigation
- Calendar picker in popup mode with dots
- Range slider for date selection
- Timeline visualization
- Timelapse export functionality
- Date filtering

This example serves as a reference for building complex time navigation interfaces with
multiple interaction methods and visualization options.`,...u.parameters?.docs?.description}}};const B=["OnlyDate","DateWithInitDate","DateWithNavigation","DatePickerPopup","DatePickerPopupItems","DatePickerStandalone","Slider","Timeline","ExternalMapRendering","DateFilter","UpdateView","NoMap","Expert"];export{c as DateFilter,a as DatePickerPopup,s as DatePickerPopupItems,l as DatePickerStandalone,r as DateWithInitDate,n as DateWithNavigation,u as Expert,p as ExternalMapRendering,x as NoMap,i as OnlyDate,d as Slider,m as Timeline,y as UpdateView,B as __namedExportsOrder,j as default};
