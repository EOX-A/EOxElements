const GeoDB = {
  args: {
    spec: {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "A chart visualizing data fetched from a geoDB endpoint",
      data: {
        url: "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-01-05)&select=no2_ec_station_ppbv,date",
        parse: {
          no2_ec_station_ppbv: "number",
          date: "date",
        },
      },
      encoding: {
        x: { field: "date", type: "temporal" },
      },
      layer: [
        {
          encoding: {
            y: {
              field: "no2_ec_station_ppbv",
              type: "quantitative",
            },
          },
          layer: [
            { mark: "line" },
            {
              transform: [{ filter: { param: "hover", empty: false } }],
              mark: "point",
            },
          ],
        },
        {
          mark: "rule",
          encoding: {
            opacity: {
              condition: { value: 0.3, param: "hover", empty: false },
              value: 0,
            },
            tooltip: [
              {
                field: "no2_ec_station_ppbv",
                type: "quantitative",
              },
            ],
          },
          params: [
            {
              name: "hover",
              select: {
                type: "point",
                fields: ["date"],
                nearest: true,
                on: "pointerover",
                clear: "pointerout",
              },
            },
          ],
        },
      ],
      // mark: { type: "line", tooltip: true, stroke: "#004170" },
      // params: [
      //   {
      //     name: "hover",
      //     select: {
      //       type: "point",
      //       fields: ["date"],
      //       nearest: true,
      //       on: "pointerover",
      //       clear: "pointerout",
      //     },
      //   },
      // ],
    },
  },
};
export default GeoDB;
