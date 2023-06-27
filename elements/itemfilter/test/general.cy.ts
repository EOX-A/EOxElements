import { EOxItemFilter } from "../src/main";
import testItems from "./testItems.json";

describe("Item Filter", () => {
  beforeEach(() => {
    cy.visit("/elements/itemfilter/test/general.html");
  });

  it("loads the itemfilter", () => {
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      EOxItemFilter.config = {
        titleProperty: "title",
        filterProperties: [
          { key: "osc:variables", title: "Variable" },
          // { key: "code" },
          // { key: "likes", type: "range" },
          // { key: "year", type: "range" },
          // { key: "years", type: "range" },
          { key: "created", type: "range", format: "date" },
          { key: "bbox", type: "spatial" },
        ],
        aggregateResults: "osc:variables",
        enableSearch: true,
        // enableHighlighting: true,
        // showResults: false,
        fuseConfig: {
          // keys: ["title", "description", "themes", "code", "datetime"],
          keys: ["title", "osc:variables"],
        },
        onSelect: (item: any) => {
          console.log(item);
        },
        // matchAllWhenEmpty: true,
        // exclusiveFilters: true,
        // externalSearch: (input, filters) => {
        //   const base =
        //     "https://resource-catalogue.testing.opensciencedata.esa.int/collections/metadata:main/items?type=collection&f=json";
        //   if (filters) {
        //     let filterString = "";
        //     Object.keys(filters).forEach((filter) =>
        //       Object.entries(filters[filter]).forEach(([key, value]) => {
        //         if (value) {
        //           filterString += `${filter.replace("s", "")}:${key}`;
        //         }
        //       })
        //     );
        //     console.log(filterString);
        //     return `${base}&q=${input}&filter=keywords%20ILIKE%20%27%${filterString}%%27`;
        //   } else {
        //     return `${base}&q=${input}`;
        //   }
        // },
      };
      EOxItemFilter.apply(testItems);
    });
  });
});
