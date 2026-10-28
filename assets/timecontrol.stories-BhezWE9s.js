import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{d as t,t as n}from"./lit-Dt0tyVZI.js";import{i as r,r as i}from"./iframe-CKkaw9gU.js";import{t as a}from"./taggedTemplateLiteral-8F0WHLkG.js";var o;function ee(){return(ee=e((()=>{n(),r(),o={args:{for:`eox-map#only-date`,storyAdditionalComponents:{"eox-map":{id:`only-date`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:i.format}}},render:e=>t`
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
  `}})))()}var s;function te(){return(te=e((()=>{n(),r(),s={args:{showUTC:!0,initDate:`first`,for:`eox-map#editable-date`,layerIdKey:i.layerIdKey,titleKey:i.titleKey,select:e=>console.log(`Selected date range:`,e.detail.date),storyAdditionalComponents:{"eox-map":{id:`editable-date`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:`YYYY-MM-DD`,navigation:!0,editable:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,popup:!0,position:[`bottom`,`left`],showDots:!0}}},render:e=>t`
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
      .showUTC=${e.showUTC}
      .initDate=${e.initDate}
      @select=${e.select}
    >
      <eox-timecontrol-date
        .editable=${e.storyAdditionalComponents[`eox-timecontrol-date`].editable}
        .format=${e.storyAdditionalComponents[`eox-timecontrol-date`].format}
        .navigation=${e.storyAdditionalComponents[`eox-timecontrol-date`].navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots}
        .popup=${e.storyAdditionalComponents[`eox-timecontrol-picker`].popup}
        .position=${e.storyAdditionalComponents[`eox-timecontrol-picker`].position}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})))()}var ne;function re(){return(re=e((()=>{n(),r(),ne={args:{layerIdKey:i.layerIdKey,for:`eox-map#date-with-navigation`,storyAdditionalComponents:{"eox-map":{id:`date-with-navigation`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:i.format,navigation:!0}}},render:e=>t`
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
  `}})))()}var ie;function ae(){return(ae=e((()=>{n(),r(),ie={args:{layerIdKey:i.layerIdKey,for:`eox-map#date-picker-popup`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-picker-popup`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:i.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:i.format,showDots:!0,popup:!0}}},render:e=>t`
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
  `}})))()}var oe;function se(){return(se=e((()=>{n(),r(),oe={args:{layerIdKey:i.layerIdKey,for:`eox-map#date-picker-standalone`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-picker-standalone`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:i.format,showDots:!0}}},render:e=>t`
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
  `}})))()}var ce;function le(){return(le=e((()=>{n(),r(),ce={args:{layerIdKey:i.layerIdKey,for:`eox-map#timeline`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`timeline`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0,showItems:!0}}},render:e=>t`
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
  `}})))()}var ue,de;function fe(){return(fe=e((()=>{n(),r(),de={args:{layerIdKey:i.layerIdKey,titleKey:i.titleKey,externalMapRendering:!0,animate:!0,for:`eox-map#external-map-rendering-mosaic`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`external-map-rendering-mosaic`,zoom:10,center:[12,42]},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0,format:`YYYY-MM-DD HH:mm:ss`},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,showItems:!0,popup:!0}}},render:e=>t(ue||=a([`
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
        .format=`,`
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
  `]),e.storyAdditionalComponents[`eox-map`].id,e.storyAdditionalComponents[`eox-map`].zoom,e.storyAdditionalComponents[`eox-map`].center,e.for,e.layerIdKey,e.titleKey,e.filters,e.externalMapRendering,e.select,e.storyAdditionalComponents[`eox-timecontrol-date`].format,e.storyAdditionalComponents[`eox-timecontrol-date`].navigation,e.storyAdditionalComponents[`eox-timecontrol-picker`].range,e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots,e.storyAdditionalComponents[`eox-timecontrol-picker`].showItems,e.storyAdditionalComponents[`eox-timecontrol-picker`].popup)}})))()}var pe,me;function he(){return(he=e((()=>{n(),r(),me={args:{layerIdKey:i.layerIdKey,titleKey:i.titleKey,filters:i.filters,externalMapRendering:!0,animate:!0,for:`eox-map#external-map-rendering-mosaic`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`external-map-rendering-mosaic`,zoom:10,center:[12,42]},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,popup:!0},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storySlot:!0}}},render:e=>t(pe||=a([`
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
  `]),e.storyAdditionalComponents[`eox-map`].id,e.storyAdditionalComponents[`eox-map`].zoom,e.storyAdditionalComponents[`eox-map`].center,e.for,e.layerIdKey,e.titleKey,e.externalMapRendering,e.select,e.storyAdditionalComponents[`eox-timecontrol-date`].navigation,e.storyAdditionalComponents[`eox-timecontrol-picker`].range,e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots,e.storyAdditionalComponents[`eox-timecontrol-picker`].popup,!0,`id`,!1,e.filters)}})))()}var ge,_e;function ve(){return(ve=e((()=>{n(),r(),_e={args:{layerIdKey:i.layerIdKey,titleKey:i.titleKey,filters:i.filters,externalMapRendering:!0,animate:!0,for:`eox-map#external-map-rendering-mosaic`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`external-map-rendering-mosaic`,zoom:10,center:[12,42]},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,range:!0,showDots:!0,popup:!0},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-timelapse":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storySlot:!0}}},render:e=>t(ge||=a([`
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
  `]),e.storyAdditionalComponents[`eox-map`].id,e.storyAdditionalComponents[`eox-map`].zoom,e.storyAdditionalComponents[`eox-map`].center,e.for,e.layerIdKey,e.titleKey,e.externalMapRendering,e.select,e.storyAdditionalComponents[`eox-timecontrol-date`].navigation,e.storyAdditionalComponents[`eox-timecontrol-picker`].range,e.storyAdditionalComponents[`eox-timecontrol-picker`].showDots,e.storyAdditionalComponents[`eox-timecontrol-picker`].popup,!0,`id`,!1,e.filters)}})))()}function ye(e,t){return[{id:`monthly-observations`,timeControlValues:Array.from({length:t},(t,n)=>({date:new Date(Date.UTC(e,9+n,4)).toISOString()}))}]}var be;function c(){return(c=e((()=>{n(),be={args:{narrowControlValues:ye(2018,90),manyYearsControlValues:ye(1900,1506)},render:e=>t`
    <p>Drag either panel's bottom-right corner to resize its slider.</p>
    <h3>Partial first and last years (2018–2026)</h3>
    <div
      class="border round"
      style="width: 320px; min-width: 320px; max-width: 100%; resize: horizontal; overflow: auto; padding: 16px; box-sizing: border-box;"
    >
      <eox-timecontrol .controlValues=${e.narrowControlValues} show-utc>
        <eox-timecontrol-date navigation></eox-timecontrol-date>
        <eox-timecontrol-slider></eox-timecontrol-slider>
      </eox-timecontrol>
    </div>
    <h3>Many years (1900–2026)</h3>
    <div
      class="border round"
      style="width: 320px; min-width: 320px; max-width: 100%; resize: horizontal; overflow: auto; padding: 16px; box-sizing: border-box;"
    >
      <eox-timecontrol .controlValues=${e.manyYearsControlValues} show-utc>
        <eox-timecontrol-date navigation></eox-timecontrol-date>
        <eox-timecontrol-slider></eox-timecontrol-slider>
      </eox-timecontrol>
    </div>
  `}})))()}var l;function u(){return(u=e((()=>{n(),r(),l={args:{layerIdKey:i.layerIdKey,for:`eox-map#slider`,storyAdditionalComponents:{"eox-map":{id:`slider`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:i.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0},"eox-timecontrol-slider":{storyImport:!1,storySlot:!0,animateOnClickInterval:`0.3s`}}},render:e=>t`
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
  `}})))()}var d;function f(){return(f=e((()=>{n(),r(),d={args:{layerIdKey:i.layerIdKey,titleKey:i.titleKey,filters:i.filters,externalMapRendering:i.externalMapRendering,for:`eox-map#timeline`,updateView:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`timeline`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,showDots:!0,popup:!0}}},render:e=>t`
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
  `}})))()}var p;function m(){return(m=e((()=>{n(),r(),p={argTypes:{showItems:{control:{type:`boolean`},description:`Whether to show the items popup card when hovering over available dates.`},itemTitleKey:{control:{type:`select`},options:[void 0,`cloudCoverage`,`layerName`,`itemId`,`id`],description:"Property key on the timeline item used as the primary title in the card (e.g. `cloudCoverage`, `layerName`, `itemId`, `id`)."},showTime:{control:{type:`boolean`},description:`Whether to show time in the popup items card (automatically omitted for date-only items).`},timeFormat:{control:{type:`text`},description:`Format string for time display in the popup items card.`}},args:{layerIdKey:i.layerIdKey,navigation:!0,popup:!0,showItems:!0,itemTitleKey:void 0,showTime:!0,timeFormat:`HH:mm`,for:`eox-map#date-picker-popup`,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-picker-popup`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:i.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:i.format,showDots:!0,popup:!0,showItems:!0,itemTitleKey:void 0,showTime:!0,timeFormat:`HH:mm`}}},render:e=>t`
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
        .showItems=${e.showItems??e.storyAdditionalComponents[`eox-timecontrol-picker`].showItems}
        .itemTitleKey=${e.itemTitleKey??e.storyAdditionalComponents[`eox-timecontrol-picker`].itemTitleKey}
        .showTime=${e.showTime??e.storyAdditionalComponents[`eox-timecontrol-picker`].showTime}
        .timeFormat=${e.timeFormat??e.storyAdditionalComponents[`eox-timecontrol-picker`].timeFormat}
        .propertyTransform=${e.propertyTransform??e.storyAdditionalComponents[`eox-timecontrol-picker`].propertyTransform}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})))()}var h;function g(){return(g=e((()=>{n(),r(),h={args:{layerIdKey:i.layerIdKey,titleKey:i.titleKey,filters:i.filters,navigation:!0,popup:!0,position:[`bottom`,`left`],select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:i.format,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:i.format,showDots:!0,popup:!0,position:[`bottom`,`left`]},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0},"eox-timecontrol-slider":{storyImport:!1,storySlot:!0},"eox-itemfilter":{storyImport:!1,storySlot:!0}}},render:e=>t`
    <eox-timecontrol
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .filters=${e.filters}
      .controlValues=${i.layers.map(e=>e.properties)}
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
  `}})))()}var _;function v(){return(v=e((()=>{n(),r(),_={args:{for:`eox-map#date-with-init-date`,initDate:[`2021-02-28`],storyAdditionalComponents:{"eox-map":{id:`date-with-init-date`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:`D. MMMM YYYY`}},select:e=>{console.log(e.detail)}},render:e=>t`
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
  `}})))()}var y;function b(){return(b=e((()=>{n(),r(),y={args:{layerIdKey:i.layerIdKey,for:`eox-map#date-in-utc`,showUTC:!0,select:e=>{console.log(e.detail)},storyAdditionalComponents:{"eox-map":{id:`date-in-utc`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-date":{storyImport:!1,storySlot:!0,format:`YYYY-MM-DDTHH:mm:ss`,navigation:!0},"eox-timecontrol-picker":{storyImport:!1,storySlot:!0,format:i.format,showDots:!0,popup:!0}}},render:e=>t`
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
  `}})))()}var x;function S(){return(S=e((()=>{n(),r(),x={args:{layerIdKey:i.layerIdKey,for:`eox-map#timeline-selection-duration`,storyAdditionalComponents:{"eox-map":{id:`timeline-selection-duration`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0,selectionDuration:{months:1}}}},render:e=>t`
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
  `}})))()}var C;function w(){return(w=e((()=>{n(),r(),C={args:{layerIdKey:i.layerIdKey,for:`eox-map#timeline-selection-resizable`,storyAdditionalComponents:{"eox-map":{id:`timeline-selection-resizable`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0,selectionDuration:{months:1},selectionResizable:!1}}},render:e=>t`
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
  `}})))()}var T;function E(){return(E=e((()=>{n(),r(),T={args:{layerIdKey:i.layerIdKey,for:`eox-map#timeline-with-clustering`,storyAdditionalComponents:{"eox-map":{id:`timeline-with-clustering`,zoom:i.zoom,center:i.center,layers:i.layers},"eox-timecontrol-timeline":{storyImport:!1,storySlot:!0,clustering:!0}}},render:e=>t`
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
        .clustering=${e.storyAdditionalComponents[`eox-timecontrol-timeline`].clustering}
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
  `}})))()}var D;function O(){return(O=e((()=>{n(),r(),D={name:`Timecontrol with Compare maps`,args:{for:`eox-map-compare#timecontrol-compare`},render:e=>t`
    <eox-map-compare id="timecontrol-compare" style="height: 500px;">
      <eox-map
        id="compare-wind"
        slot="first"
        style="height: 100%;"
        .zoom=${i.zoom}
        .center=${i.center}
        .layers=${[i.layers[0],i.layers[1]]}
      ></eox-map>
      <eox-map
        id="compare-no2"
        slot="second"
        sync="eox-map#compare-wind"
        style="height: 100%;"
        .layers=${[i.layers[0],i.layers[2]]}
      ></eox-map>
    </eox-map-compare>
    <eox-timecontrol .for=${e.for}>
      <eox-timecontrol-date navigation></eox-timecontrol-date>
      <eox-timecontrol-picker
        popup
        show-dots
        show-items
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `}})))()}var k;function A(){return(A=e((()=>{n(),k={args:{showUTC:!0,initDate:`first`,controlValues:[{id:`observations`,timeControlValues:[{date:`2024-01-01`},{date:`2024-01-02`},{date:`2024-01-03`},{date:`2024-01-04`},{date:`2024-01-05`},{date:`2024-01-06`},{date:`2024-01-07`},{date:`2024-01-08`},{date:`2024-01-09`},{date:`2024-01-10`}]}],storyAdditionalComponents:{"eox-timecontrol-date":{storyImport:!1,storySlot:!0,navigation:!0,dateWrap:!1}}},render:e=>t`
    <eox-timecontrol
      .showUTC=${e.showUTC}
      .initDate=${e.initDate}
      .controlValues=${e.controlValues}
    >
      <eox-timecontrol-date
        navigation
        .dateWrap=${e.storyAdditionalComponents[`eox-timecontrol-date`].dateWrap}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `}})))()}function j(){return(j=e((()=>{ee(),te(),re(),ae(),se(),le(),fe(),he(),ve(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A()})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,xe;function Se(){return(Se=e((()=>{n(),j(),M={title:`Elements/eox-timecontrol`,tags:[`autodocs`],component:`eox-timecontrol`,render:e=>t`
    <eox-timecontrol
      .for=${e.for}
      .layerIdKey=${e.layerIdKey}
      .titleKey=${e.titleKey}
      .externalMapRendering=${e.externalMapRendering}
    ></eox-timecontrol>
  `},N=o,P=s,F=_,I=ne,L=k,R=ie,z=p,B=y,V=oe,H=be,U=l,W=D,G=ce,K=T,q=x,J=C,Y=de,X=me,Z=d,Q=h,$=_e,xe=[`OnlyDate`,`EditableDate`,`DateWithInitDate`,`DateWithNavigation`,`DateWithoutWrap`,`DatePickerPopup`,`DatePickerPopupItems`,`DateInUTC`,`DatePickerStandalone`,`Slider`,`SliderWithMap`,`TimecontrolWithCompareMaps`,`Timeline`,`TimelineWithClustering`,`TimelineSelectionDuration`,`TimelineSelectionResizable`,`ExternalMapRendering`,`DateFilter`,`UpdateView`,`NoMap`,`Expert`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`OnlyDateStory`,...N.parameters?.docs?.source},description:{story:'Basic timecontrol rendered using only the date display component\n\nThis renders a timecontrol element with just the `<eox-timecontrol-date>` component, which displays\nthe currently selected date(s) from the associated map layers. The date is automatically extracted\nfrom layers that have `timeControlValues` and `timeControlProperty` properties.\n\nThe component links to an `<eox-map>` instance using the `for` attribute, which can be either a\nselector string (e.g., `"eox-map#primary"`) or a direct reference to the map element.',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`EditableDateStory`,...P.parameters?.docs?.source},description:{story:"Editable date field with map navigation and a popup picker\n\nSet `editable` to enter dates using the assigned `format`. Press Enter or leave the field\nto apply valid edits; invalid input restores the previous date without firing a change.\nThe picker enables editing automatically, and time is shown only when included in `format`.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`DateWithInitDateStory`,...F.parameters?.docs?.source},description:{story:"Date display component with init date\n\nThis example shows the `<eox-timecontrol-date>` component with the `initDate` property added,\nwhich sets the initial date range. Also, it uses the date `format` of `D. MMMM YYYY`.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`DateWithNavigationStory`,...I.parameters?.docs?.source},description:{story:`Date display component with navigation buttons for stepping through available dates

This example shows the \`<eox-timecontrol-date>\` component with the \`navigation\` property enabled,
which adds previous/next buttons to step through available dates. Clicking these buttons will
automatically update the selected date range and apply it to the map layers.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`DateWithoutWrapStory`,...L.parameters?.docs?.source},description:{story:'Date navigation that stops at the first and last available dates\n\nThis example sets `dateWrap` to `false` on `<eox-timecontrol-date>` to disable\nprevious/next buttons at the date boundaries. The `initDate` value `"first"`\nselects the first available date on initialization.',...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`DatePickerPopupStory`,...R.parameters?.docs?.source},description:{story:"Calendar date picker displayed in popup mode, triggered by clicking the date input field\n\nThis example demonstrates the `<eox-timecontrol-picker>` component with `popup` enabled.\nThe calendar appears as a popup overlay when clicking on the date input field (provided by\n`<eox-timecontrol-date>`). The picker supports both single date and range selection modes.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`DatePickerPopupItemsStory`,...z.parameters?.docs?.source},description:{story:'Calendar date picker displayed in popup mode with configurable items popup card\n\nThis example demonstrates the `<eox-timecontrol-picker>` component with `showItems` enabled.\nThe calendar appears as a popup overlay when clicking on the date input field (provided by\n`<eox-timecontrol-date>`). Hovering over a date with available data displays a popup card.\n\nCard content is configurable using:\n- `itemTitleKey` / `item-title-key`: Selects which property on the timeline item to display on the primary line.\n  - Available item properties include:\n    - `layerName`: The layer title/name (from `layer.properties[titleKey]`).\n    - `group`: The layer ID (from `layer.properties[layerIdKey]`).\n    - `itemId`: The item identifier (from `timeControlValues[i].id` or generated UUID).\n    - `originalDate`: The raw date string from `timeControlValues[i].date`.\n    - Any custom properties defined on `timeControlValues` objects (e.g., `cloudCoverage`).\n  - Defaults to `undefined` (which falls back to the layer title `layerName`).\n- `showTime` / `show-time`: Controls whether time is shown in the card metadata (defaults to `true`; time is automatically omitted for date-only items).\n- `timeFormat` / `time-format`: Dayjs format string for displaying item time (defaults to `"HH:mm"`).\n- `propertyTransform`: Optional function to customize or transform item rendering (receives `{ title, subtitle, time, dotColor, layerName, group, itemId, originalDate, ...customItemProps }` and returns transformed object or custom HTML string).\n\n```html\n<eox-timecontrol for="eox-map#my-map">\n  <eox-timecontrol-date navigation></eox-timecontrol-date>\n  <eox-timecontrol-picker\n    popup\n    show-dots\n    show-items\n    item-title-key="layerName"\n    show-time\n  ></eox-timecontrol-picker>\n</eox-timecontrol>\n```',...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`DateInUTCStory`,...B.parameters?.docs?.source},description:{story:"Date is displayed in UTC format when the showUTC property / show-utc attribute is true\n\nThis example demonstrates the `<eox-timecontrol-date>` component with `showUTC` enabled.\nThe date is displayed in the UTC format and not the local timezone format.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`DatePickerStandaloneStory`,...V.parameters?.docs?.source},description:{story:`Calendar date picker displayed inline (not in popup mode)

This example shows the \`<eox-timecontrol-picker>\` component without the \`popup\` attribute,
displaying the calendar inline within the component. Useful for always-visible date selection
interfaces.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`SliderStory`,...H.parameters?.docs?.source},description:{story:`Two independently resizable, map-free sliders covering 2018–2026 and 1900–2026.
Use these examples for partial endpoint years and long time series in narrow
dashboards. First and last years remain visible, with intermediate labels
shown when they fit. Minor ticks stay at least 12 pixels apart.
Every date remains selectable. Resize either
parent panel to reveal more years.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`SliderWithMapStory`,...U.parameters?.docs?.source},description:{story:`Range slider for selecting date ranges with visual indicators for years and months

This example demonstrates the \`<eox-timecontrol-slider>\` component, which provides a visual
range slider for selecting start and end dates. The slider displays tick marks for years and
months, and tooltips show the formatted dates when hovering over or dragging the handles.
The slider automatically extracts available dates from timeline items and allows users to
select a date range by dragging the handles. The selected range is immediately applied to
the map layers.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`TimecontrolWithCompareMapsStory`,...W.parameters?.docs?.source},description:{story:'Wind and NO₂ on separate comparison maps, controlled by date navigation and a calendar.\nUse `for="eox-map-compare#timecontrol-compare"` to collect both maps\' layers.\nFor separate maps linked with `sync`, set `.for` to an array of map selectors\nor element references. Layer identifiers may be reused across maps; each source\nis updated independently.',...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`TimelineStory`,...G.parameters?.docs?.source},description:{story:`Timeline visualization using vis-timeline with date picker and calendar integration

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
comprehensive time navigation interface.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`TimelineWithClusteringStory`,...K.parameters?.docs?.source},description:{story:`Timeline visualization using vis-timeline with clustering configuration

This example shows the \`<eox-timecontrol-timeline>\` component with \`clustering\` enabled,
which groups timeline items into clusters for better visualization of large datasets.

Features demonstrated:
- Timeline visualization with clustering enabled
- Items are automatically grouped into clusters when there are many items`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`TimelineSelectionDurationStory`,...q.parameters?.docs?.source},description:{story:'Timeline visualization with custom selection duration\n\nThis example demonstrates the `selectionDuration` property, which allows defining the\ndefault selection duration (if no item is clicked).\nIt strictly supports native dayjs duration formats (e.g., `{ months: 1 }`, `"P1M"`, or `100` for milliseconds).',...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`TimelineSelectionResizableStory`,...J.parameters?.docs?.source},description:{story:`Timeline visualization with non-resizable selection

This example demonstrates the \`selectionResizable\` property. If enabled, the selected
range can be modified by the user. If false (as shown here), then the user can **not**
modify the range.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`ExternalMapRenderingStory`,...Y.parameters?.docs?.source},description:{story:`External map rendering mode for timelapse export with custom map rendering logic

This example demonstrates the \`externalMapRendering\` feature, which allows custom handling
of map layer updates for timelapse export. When enabled, the timecontrol dispatches an
\`export\` event with detailed information about selected items, allowing external code to
handle the map rendering and snapshot generation.

This is useful when you need custom control over how map layers are rendered for each
time step, or when using map rendering services that require special handling.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`DateFilterStory`,...X.parameters?.docs?.source},description:{story:`Date filtering using eox-itemfilter for filtering timeline items by metadata properties

This example shows how to use the \`<eox-itemfilter>\` component in conjunction with timecontrol
to filter timeline items based on metadata properties (e.g., cloud coverage). The filter
component allows users to set filter criteria, and the timeline automatically updates to
show only matching items.

The calendar picker also respects the filter, showing dots only for dates that have data
matching the current filter criteria. Filtered-out dates are displayed with reduced opacity.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`UpdateViewStory`,...Z.parameters?.docs?.source},description:{story:`Update view event story

This example demonstrates the \`update:view\` event, which is dispatched when the view range of the timeline changes.
The event is dispatched with the start and end dates of the view range.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`NoMapStory`,...Q.parameters?.docs?.source},description:{story:`No map story

This example demonstrates the timecontrol component without a map. The component can be used
standalone by providing \`controlValues\` directly instead of linking to a map via the \`for\` attribute.
This is useful when you want to use timecontrol for date selection without map integration.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`ExpertStory`,...$.parameters?.docs?.source},description:{story:`Expert example showcasing all timecontrol features together

This comprehensive example demonstrates all available timecontrol components and features:
- Date display with navigation
- Calendar picker in popup mode with dots
- Range slider for date selection
- Timeline visualization
- Timelapse export functionality
- Date filtering

This example serves as a reference for building complex time navigation interfaces with
multiple interaction methods and visualization options.`,...$.parameters?.docs?.description}}}})))()}Se();export{X as DateFilter,B as DateInUTC,R as DatePickerPopup,z as DatePickerPopupItems,V as DatePickerStandalone,F as DateWithInitDate,I as DateWithNavigation,L as DateWithoutWrap,P as EditableDate,$ as Expert,Y as ExternalMapRendering,Q as NoMap,N as OnlyDate,H as Slider,U as SliderWithMap,W as TimecontrolWithCompareMaps,G as Timeline,q as TimelineSelectionDuration,J as TimelineSelectionResizable,K as TimelineWithClustering,Z as UpdateView,xe as __namedExportsOrder,M as default};