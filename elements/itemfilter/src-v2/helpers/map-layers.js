export default function getMapLayers(geometry, url) {
  return [
    {
      type: "Vector",
      properties: {
        id: "draw",
      },
      source: {
        type: "Vector",
        ...(geometry && { format: "GeoJSON" }),
        ...(geometry && { url }),
      },
      zIndex: 1,
      interactions: [
        {
          type: "draw",
          options: {
            id: "drawInteraction",
            type: "Box",
            modify: true,
          },
        },
      ],
    },
    {
      type: "Tile",
      source: {
        type: "XYZ",
        url: "https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",
        attribution:
          "{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }",
      },
    },
  ];
}
