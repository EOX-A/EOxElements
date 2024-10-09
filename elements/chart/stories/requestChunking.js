const RequestChunking = {
  args: {
    requestChunking: {
      dataName: "aggregatedData",
      chunkUrls: [
        "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-01-05T23:59:59)&select=no2_ec_station_ppbv,date",
        "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-11,date.lte.2022-01-15)&select=no2_ec_station_ppbv,date",
        "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-06,date.lte.2022-01-10T23:59:59)&select=no2_ec_station_ppbv,date",
      ],
    },
    spec: {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "A chart visualizing data fetched from a geoDB endpoint",
      data: {
        name: "aggregatedData",
      },
      parse: {
        no2_ec_station_ppbv: "number",
        date: "date",
      },
      encoding: {
        x: { field: "date", type: "temporal" },
        y: {
          field: "no2_ec_station_ppbv",
          type: "quantitative",
        },
      },
      mark: { type: "line", stroke: "#004170" },
    },
  },
};
export default RequestChunking;
