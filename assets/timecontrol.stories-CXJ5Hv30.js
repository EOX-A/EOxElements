import{n as e}from"./chunk-jRWAZmH_.js";import{gt as t,n,t as r,xt as i}from"./iframe-CUA5ekX4.js";import{n as a,t as o}from"./taggedTemplateLiteral-bYsn3Ild.js";var s,c=e((()=>{t(),n(),s={args:{for:`eox-map#only-date`,storyAdditionalComponents:{"eox-map":{id:`only-date`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:r.format}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `}})),l,u=e((()=>{t(),n(),l={args:{layerIdKey:r.layerIdKey,for:`eox-map#date-with-navigation`,storyAdditionalComponents:{"eox-map":{id:`date-with-navigation`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:r.format,navigation:!0}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
        .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `}})),d,f=e((()=>{t(),n(),d={args:{layerIdKey:r.layerIdKey,for:`eox-map#date-picker-popup`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-picker-popup`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:r.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:r.format,showDots:!0,popup:!0}}},render:e=>i`
    <style>
      eox-map {
        width: 100%;
        height: 500px;
      }
    </style>
    <eox-map
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
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
        .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
        .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .format=${e.storyAdditionalComponents[`eox-timecontrol-picker`].format}
        .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
        .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})),p,m=e((()=>{t(),n(),p={args:{layerIdKey:r.layerIdKey,for:`eox-map#date-picker-standalone`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-picker-standalone`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:r.format,showDots:!0}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
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
        .format=${e.storyAdditionalComponents[`eox-timecontrol-picker`].format}
        .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})),h,g=e((()=>{t(),n(),h={args:{layerIdKey:r.layerIdKey,for:`eox-map#timeline`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`timeline`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0,showItems:!0}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
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
        .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
        .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
        .showItems=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showItems}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})),ee,_,te=e((()=>{t(),n(),a(),_={args:{layerIdKey:r.layerIdKey,titleKey:r.titleKey,externalMapRendering:!0,animate:!0,for:`eox-map#external-map-rendering-mosaic`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`external-map-rendering-mosaic`,zoom:10,center:[12,42]},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,showItems:!0,popup:!0}}},render:e=>i(ee||=o([`
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
  `]),e.storyAdditionalComponents[`eox-map`].id,e.storyAdditionalComponents[`eox-map`].zoom,e.storyAdditionalComponents[`eox-map`].center,e.for,e.layerIdKey,e.titleKey,e.filters,e.externalMapRendering,e.select,e.storyAdditionalComponents[`eox-timecontrol-date`].navigation,e.storyAdditionalComponents[`eox-timecontrol-picker`].range,e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots,e.storyAdditionalComponents[`eox-timecontrol-picker`].showItems,e.storyAdditionalComponents[`eox-timecontrol-picker`].popup)}})),ne,v,re=e((()=>{t(),n(),a(),v={args:{layerIdKey:r.layerIdKey,titleKey:r.titleKey,filters:r.filters,externalMapRendering:!0,animate:!0,for:`eox-map#external-map-rendering-mosaic`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`external-map-rendering-mosaic`,zoom:10,center:[12,42]},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,popup:!0},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storySlot:!0}}},render:e=>i(ne||=o([`
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
  `]),e.storyAdditionalComponents[`eox-map`].id,e.storyAdditionalComponents[`eox-map`].zoom,e.storyAdditionalComponents[`eox-map`].center,e.for,e.layerIdKey,e.titleKey,e.externalMapRendering,e.select,e.storyAdditionalComponents[`eox-timecontrol-date`].navigation,e.storyAdditionalComponents[`eox-timecontrol-picker`].range,e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots,e.storyAdditionalComponents[`eox-timecontrol-picker`].popup,!0,`id`,!1,e.filters)}})),ie,y,b=e((()=>{t(),n(),a(),y={args:{layerIdKey:r.layerIdKey,titleKey:r.titleKey,filters:r.filters,externalMapRendering:!0,animate:!0,for:`eox-map#external-map-rendering-mosaic`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`external-map-rendering-mosaic`,zoom:10,center:[12,42]},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,popup:!0},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-timelapse":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storySlot:!0}}},render:e=>i(ie||=o([`
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
  `]),e.storyAdditionalComponents[`eox-map`].id,e.storyAdditionalComponents[`eox-map`].zoom,e.storyAdditionalComponents[`eox-map`].center,e.for,e.layerIdKey,e.titleKey,e.externalMapRendering,e.select,e.storyAdditionalComponents[`eox-timecontrol-date`].navigation,e.storyAdditionalComponents[`eox-timecontrol-picker`].range,e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots,e.storyAdditionalComponents[`eox-timecontrol-picker`].popup,!0,`id`,!1,e.filters)}})),x,S=e((()=>{t(),n(),x={args:{layerIdKey:r.layerIdKey,for:`eox-map#slider`,storyAdditionalComponents:{"eox-map":{id:`slider`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:r.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0},"eox-timecontrol-slider":{storyImport:!1,storySlot:!0,animateOnClickInterval:`0.3s`}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
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
          .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
          .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
          .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
        ></eox-timecontrol-picker>
      </div>
      <eox-timecontrol-slider
        style="width: 600px;"
        .animateOnClickInterval=${e.storyAdditionalComponents[`eox-timecontrol-slider`].animateOnClickInterval}
      ></eox-timecontrol-slider>
    </eox-timecontrol>
  `}})),C,w=e((()=>{t(),n(),C={args:{layerIdKey:r.layerIdKey,titleKey:r.titleKey,filters:r.filters,externalMapRendering:r.externalMapRendering,for:`eox-map#timeline`,updateView:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`timeline`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
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
        .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
        .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})),T,E=e((()=>{t(),n(),T={args:{layerIdKey:r.layerIdKey,navigation:!0,popup:!0,for:`eox-map#date-picker-popup`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-picker-popup`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:r.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:r.format,showDots:!0,popup:!0,showItems:!0}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
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
        .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
        .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .format=${e.storyAdditionalComponents[`eox-timecontrol-picker`].format}
        .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
        .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
        .showItems=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showItems}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})),D,O=e((()=>{t(),n(),D={args:{layerIdKey:r.layerIdKey,titleKey:r.titleKey,filters:r.filters,navigation:!0,popup:!0,position:[`bottom`,`left`],select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:r.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:r.format,showDots:!0,popup:!0,position:[`bottom`,`left`]},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-slider":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storyImport:!1,storySlot:!0}}},render:e=>i`
    <eox-timecontrol
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .controlValues=${r.layers.map(e=>e.properties)}
      @select=${e.select}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
          .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .format=${e.storyAdditionalComponents[`eox-timecontrol-picker`].format}
          .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
          .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
          .position=${e.storyAdditionalComponents[`eox-timecontrol-picker`].position}
        ></eox-timecontrol-picker>
        <div style="display: flex;align-items: center;">
          <eox-itemfilter
            id="timecontrol-filter"
            .inlineMode=${!0}
            .titleProperty=${`id`}
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
  `}})),k,A=e((()=>{t(),n(),k={args:{for:`eox-map#date-with-init-date`,initDate:[`2021-02-28`],storyAdditionalComponents:{"eox-map":{id:`date-with-init-date`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:`D. MMMM YYYY`}},select:e=>{console.log(e.detail)}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
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
        .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `}})),j,M=e((()=>{t(),n(),j={args:{layerIdKey:r.layerIdKey,for:`eox-map#date-in-utc`,showUTC:!0,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-in-utc`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:`YYYY-MM-DDTHH:mm:ss`,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:r.format,showDots:!0,popup:!0}}},render:e=>i`
    <style>
      eox-map {
        width: 100%;
        height: 500px;
      }
    </style>
    <eox-map
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .showUTC=${e.showUTC}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
      @select=${e.select}
    >
      <eox-timecontrol-date
        .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
        .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .format=${e.storyAdditionalComponents[`eox-timecontrol-picker`].format}
        .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
        .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})),N,ae=e((()=>{t(),n(),N={args:{layerIdKey:r.layerIdKey,for:`eox-map#timeline-selection-duration`,storyAdditionalComponents:{"eox-map":{id:`timeline-selection-duration`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0,selectionDuration:{months:1}}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
    >
      <eox-timecontrol-timeline
        .selectionDuration=${e.storyAdditionalComponents[`eox-timecontrol-timeline`].selectionDuration}
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
  `}})),P,oe=e((()=>{t(),n(),P={args:{layerIdKey:r.layerIdKey,for:`eox-map#timeline-selection-resizable`,storyAdditionalComponents:{"eox-map":{id:`timeline-selection-resizable`,zoom:r.zoom,center:r.center,layers:r.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0,selectionDuration:{months:1},selectionResizable:!1}}},render:e=>i`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .externalMapRendering=${e.externalMapRendering}
    >
      <eox-timecontrol-timeline
        .selectionDuration=${e.storyAdditionalComponents[`eox-timecontrol-timeline`].selectionDuration}
        .selectionResizable=${e.storyAdditionalComponents[`eox-timecontrol-timeline`].selectionResizable}
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
  `}})),F=e((()=>{c(),u(),f(),m(),g(),te(),re(),b(),S(),w(),E(),O(),A(),M(),ae(),oe()})),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{t(),F(),I={title:`Elements/eox-timecontrol`,tags:[`autodocs`],component:`eox-timecontrol`,render:e=>i`
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .externalMapRendering=${e.externalMapRendering}
    ></eox-timecontrol>
  `},L=s,R=k,z=l,B=d,V=T,H=j,U=p,W=x,G=h,K=N,q=P,J=_,Y=v,X=C,Z=D,Q=y,L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`OnlyDateStory`,...L.parameters?.docs?.source},description:{story:'Basic timecontrol rendered using only the date display component\n\nThis renders a timecontrol element with just the `<eox-timecontrol-date>` component, which displays\nthe currently selected date(s) from the associated map layers. The date is automatically extracted\nfrom layers that have `timeControlValues` and `timeControlProperty` properties.\n\nThe component links to an `<eox-map>` instance using the `for` attribute, which can be either a\nselector string (e.g., `"eox-map#primary"`) or a direct reference to the map element.',...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`DateWithInitDateStory`,...R.parameters?.docs?.source},description:{story:"Date display component with init date\n\nThis example shows the `<eox-timecontrol-date>` component with the `initDate` property added,\nwhich sets the initial date range. Also, it uses the date `format` of `D. MMMM YYYY`.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`DateWithNavigationStory`,...z.parameters?.docs?.source},description:{story:`Date display component with navigation buttons for stepping through available dates

This example shows the \`<eox-timecontrol-date>\` component with the \`navigation\` property enabled,
which adds previous/next buttons to step through available dates. Clicking these buttons will
automatically update the selected date range and apply it to the map layers.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`DatePickerPopupStory`,...B.parameters?.docs?.source},description:{story:"Calendar date picker displayed in popup mode, triggered by clicking the date input field\n\nThis example demonstrates the `<eox-timecontrol-picker>` component with `popup` enabled.\nThe calendar appears as a popup overlay when clicking on the date input field (provided by\n`<eox-timecontrol-date>`). The picker supports both single date and range selection modes.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`DatePickerPopupItemsStory`,...V.parameters?.docs?.source},description:{story:"Calendar date picker displayed in popup mode and shows items in the popup\n\nThis example demonstrates the `<eox-timecontrol-picker>` component with `showItems` enabled.\nThe calendar appears as a popup overlay when clicking on the date input field (provided by\n`<eox-timecontrol-date>`). The picker shows items in the popup.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`DateInUTCStory`,...H.parameters?.docs?.source},description:{story:"Date is displayed in UTC format when the showUTC property / show-utc attribute is true\n\nThis example demonstrates the `<eox-timecontrol-date>` component with `showUTC` enabled.\nThe date is displayed in the UTC format and not the local timezone format.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`DatePickerStandaloneStory`,...U.parameters?.docs?.source},description:{story:`Calendar date picker displayed inline (not in popup mode)

This example shows the \`<eox-timecontrol-picker>\` component without the \`popup\` attribute,
displaying the calendar inline within the component. Useful for always-visible date selection
interfaces.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`SliderStory`,...W.parameters?.docs?.source},description:{story:`Range slider for selecting date ranges with visual indicators for years and months

This example demonstrates the \`<eox-timecontrol-slider>\` component, which provides a visual
range slider for selecting start and end dates. The slider displays tick marks for years and
months, and tooltips show the formatted dates when hovering over or dragging the handles.
The slider automatically extracts available dates from timeline items and allows users to
select a date range by dragging the handles. The selected range is immediately applied to
the map layers.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`TimelineStory`,...G.parameters?.docs?.source},description:{story:`Timeline visualization using vis-timeline with date picker and calendar integration

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
comprehensive time navigation interface.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`TimelineSelectionDurationStory`,...K.parameters?.docs?.source},description:{story:'Timeline visualization with custom selection duration\n\nThis example demonstrates the `selectionDuration` property, which allows defining the\ndefault selection duration (if no item is clicked).\nIt strictly supports native dayjs duration formats (e.g., `{ months: 1 }`, `"P1M"`, or `100` for milliseconds).',...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`TimelineSelectionResizableStory`,...q.parameters?.docs?.source},description:{story:`Timeline visualization with non-resizable selection

This example demonstrates the \`selectionResizable\` property. If enabled, the selected
range can be modified by the user. If false (as shown here), then the user can **not**
modify the range.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`ExternalMapRenderingStory`,...J.parameters?.docs?.source},description:{story:`External map rendering mode for timelapse export with custom map rendering logic

This example demonstrates the \`externalMapRendering\` feature, which allows custom handling
of map layer updates for timelapse export. When enabled, the timecontrol dispatches an
\`export\` event with detailed information about selected items, allowing external code to
handle the map rendering and snapshot generation.

This is useful when you need custom control over how map layers are rendered for each
time step, or when using map rendering services that require special handling.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`DateFilterStory`,...Y.parameters?.docs?.source},description:{story:`Date filtering using eox-itemfilter for filtering timeline items by metadata properties

This example shows how to use the \`<eox-itemfilter>\` component in conjunction with timecontrol
to filter timeline items based on metadata properties (e.g., cloud coverage). The filter
component allows users to set filter criteria, and the timeline automatically updates to
show only matching items.

The calendar picker also respects the filter, showing dots only for dates that have data
matching the current filter criteria. Filtered-out dates are displayed with reduced opacity.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`UpdateViewStory`,...X.parameters?.docs?.source},description:{story:`Update view event story

This example demonstrates the \`update:view\` event, which is dispatched when the view range of the timeline changes.
The event is dispatched with the start and end dates of the view range.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`NoMapStory`,...Z.parameters?.docs?.source},description:{story:`No map story

This example demonstrates the timecontrol component without a map. The component can be used
standalone by providing \`controlValues\` directly instead of linking to a map via the \`for\` attribute.
This is useful when you want to use timecontrol for date selection without map integration.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`ExpertStory`,...Q.parameters?.docs?.source},description:{story:`Expert example showcasing all timecontrol features together

This comprehensive example demonstrates all available timecontrol components and features:
- Date display with navigation
- Calendar picker in popup mode with dots
- Range slider for date selection
- Timeline visualization
- Timelapse export functionality
- Date filtering

This example serves as a reference for building complex time navigation interfaces with
multiple interaction methods and visualization options.`,...Q.parameters?.docs?.description}}},$=[`OnlyDate`,`DateWithInitDate`,`DateWithNavigation`,`DatePickerPopup`,`DatePickerPopupItems`,`DateInUTC`,`DatePickerStandalone`,`Slider`,`Timeline`,`TimelineSelectionDuration`,`TimelineSelectionResizable`,`ExternalMapRendering`,`DateFilter`,`UpdateView`,`NoMap`,`Expert`]}))();export{Y as DateFilter,H as DateInUTC,B as DatePickerPopup,V as DatePickerPopupItems,U as DatePickerStandalone,R as DateWithInitDate,z as DateWithNavigation,Q as Expert,J as ExternalMapRendering,Z as NoMap,L as OnlyDate,W as Slider,G as Timeline,K as TimelineSelectionDuration,q as TimelineSelectionResizable,X as UpdateView,$ as __namedExportsOrder,I as default};