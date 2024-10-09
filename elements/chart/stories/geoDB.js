const GeoDB = {
  args: {
    spec: {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "A chart visualizing data fetched from a geoDB endpoint",
      data: {
        url: "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-03-30)&select=no2_ec_station_ppbv,date",
        parse: {
          no2_ec_station_ppbv: "number",
          date: "date",
        },
      },
      mark: { type: "line", tooltip: true, stroke: "#004170" },
      encoding: {
        x: { field: "date", type: "temporal" },
        y: { field: "no2_ec_station_ppbv", type: "quantitative" },
      },
    },
  },
};
export default GeoDB;
