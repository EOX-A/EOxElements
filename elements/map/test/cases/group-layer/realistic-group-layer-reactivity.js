import { html } from "lit";

/**
 * Tests to reactively adds layers to group
 */
const realisticGroupLayerReactivity = () => {
  const layersJson = [
    {
      type: "Group",
      properties: {
        id: "group1",
      },
      layers: [
        {
          type: "Vector",
          properties: {
            id: "dummyInsideGroup1",
          },
        },
      ],
    },
    {
      type: "Group",
      properties: {
        id: "group2",
      },
      layers: [
        {
          type: "Vector",
          properties: {
            id: "dummyInsideGroup2",
          },
        },
      ],
    },
    {
      type: "Group",
      properties: {
        id: "group3",
      },
      layers: [
        {
          type: "Vector",
          properties: {
            id: "dummyInsideGroup3",
          },
        },
      ],
    },
  ];

  cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const allRealLayers = eoxMap.getFlatLayersArray(eoxMap.map.getAllLayers());
    expect(allRealLayers.length).to.be.equal(3);
    layersJson[0].layers = [
      {
        type: "Vector",
        properties: {
          id: "newDummyInsideGroup1",
        },
        opacity: 0.5,
      },
    ];
    layersJson[0].layers.push({
      type: "Vector",
      properties: {
        id: "newDummyInsideGroup2",
      },
      opacity: 0.5,
    });
    eoxMap.layers = layersJson;
    const newRealLayers = eoxMap.getFlatLayersArray(eoxMap.map.getAllLayers());

    expect(
      newRealLayers.length,
      "correctly updates a layer inside group",
    ).to.be.equal(4);
    const newLayer = eoxMap.getLayerById("newDummyInsideGroup1");
    expect(
      newLayer.getOpacity(),
      "correctly updates a layer inside group",
    ).to.be.equal(0.5);
  });

  it("update tile layer inside group ", () => {
    cy.intercept(/^.*tiles.maps.eox.*$/, {
      fixture: "./map/test/fixtures/tiles/wms/wms0.png",
    });

    let groupLayer = {
      type: "Group",
      properties: { id: "BASELAYERS", title: "Base Layers" },
      layers: [
        {
          type: "Tile",
          properties: {
            id: "cloudless-2022",
            name: "original layer",
          },
          source: {
            type: "XYZ",
            url: "//tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2022_3857/default/g/{z}/{y}/{x}.jpeg",
          },
        },
      ],
    };

    cy.mount(html`<eox-map .layers=${[groupLayer]}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      groupLayer = {
        type: "Group",
        properties: { id: "BASELAYERS", title: "Base Layers" },
        layers: [
          {
            type: "Tile",
            properties: {
              id: "cloudless-2022",
              name: "updated layer",
            },
            source: {
              type: "XYZ",
              url: "//tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2022_3857/default/g/{z}/{y}/{x}.jpeg",
            },
          },
        ],
      };
      eoxMap.layers = [groupLayer];
      const layer = eoxMap.getLayerById("cloudless-2022");

      expect(
        layer.get("name"),
        "update layer inside group in realistic setting (testing instanceof checks)",
      ).to.be.equal("updated layer");
    });
  });
};

export default realisticGroupLayerReactivity;
