import { html } from "lit";
import { EOxItemFilter } from "./src/main";
import "./src/main";
import "./src/autocomplete";
import "./src/selectionlist";
import items from "./test/testItems.json";

export default {
  title: "Elements/eox-itemfilter",
  tags: ["autodocs"],
  component: "eox-itemfilter",
  render: (args) => {
    const eoxItemFilter = new EOxItemFilter();
    eoxItemFilter.config = args;
    eoxItemFilter.apply(items);
    return eoxItemFilter;
  },
};

export const Primary = {
  args: {
    titleProperty: "title",
    filterProperties: [
      {
        keys: ["title", "themes"],
        title: "Search",
        type: "text",
        expanded: true,
        state: {
          title: "no2",
          themes: "no2",
        },
      },
      {
        key: "themes",
        title: "Theme",
        type: "multiselect",
        // state: {
        //   air: true,
        //   agriculture: true,
        // },
      },
      {
        key: "timestamp",
        type: "range",
        format: "date",
        // state: {
        //   min: 1685232950,
        //   max: 1686454646,
        // },
      },
      {
        key: "geometry",
        type: "spatial",
        // state: {
        //   mode: "within",
        //   geometry: {
        //     type: "Polygon",
        //     coordinates: [
        //       [
        //         [-97.71428571428572, 38.00407795331557],
        //         [-102.00000000000001, -40.329636215359066],
        //         [81.85714285714282, -47.42214099287611],
        //         [50.57142857142855, 51.0574434128921],
        //         [-97.71428571428572, 38.00407795331557],
        //       ],
        //     ],
        //   },
        // },
      },
    ],
    aggregateResults: "themes",
    enableHighlighting: true,
    onSelect: (item) => {
      console.log(item);
    },
  },
};

export const MultiSelect = {
  args: {
    titleProperty: "title",
    filterProperties: [
      {
        key: "themes",
        title: "Theme",
        type: "multiselect",
        expanded: true,
        state: {
          air: true,
          agriculture: true,
        },
      },
    ],
  },
};

export const Autocomplete = {
  render: () => html`
    <eox-autocomplete
      .items=${[
        { id: "a", label: "Autobus" },
        { id: "b", label: "Bicycle" },
        { id: "c", label: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        document.querySelector("#output").innerHTML = JSON.stringify(
          evt.detail
        );
      }}
    ></eox-autocomplete>
    <span id="output"></span>
  `,
};

export const AutocompleteUnstyled = {
  render: () => html`
    <eox-autocomplete
      unstyled
      .items=${[
        { id: "a", label: "Autobus" },
        { id: "b", label: "Bicycle" },
        { id: "c", label: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        document.querySelector("#output").innerHTML = JSON.stringify(
          evt.detail
        );
      }}
    ></eox-autocomplete>
    <span id="output"></span>
  `,
};

export const AutocompleteMultiple = {
  render: () => html`
    <eox-autocomplete
      multiple
      .items=${[
        { id: "a", label: "Autobus" },
        { id: "b", label: "Bicycle" },
        { id: "c", label: "Catalog" },
      ]}
      @item-selected=${(evt) => {
        console.log(evt);
      }}
    ></eox-autocomplete>
  `,
};

export const AutocompleteMultipleUnstyled = {
  render: () => html`
    <eox-autocomplete
      multiple
      unstyled
      .items=${[
        { id: "a", label: "Autobus" },
        { id: "b", label: "Bicycle" },
        { id: "c", label: "Catalog" },
      ]}
      @item-selected=${(evt) => {
        console.log(evt);
      }}
    ></eox-autocomplete>
  `,
};

export const SelectionList = {
  render: () => html`
    <eox-selectionlist
      .items=${[
        { id: "a", label: "Autobus" },
        { id: "b", label: "Bicycle" },
        { id: "c", label: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        document.querySelector("#output").innerHTML = JSON.stringify(
          evt.detail
        );
      }}
    ></eox-selectionlist>
    <span id="output"></span>
  `,
};

export const SelectionListMultiple = {
  render: () => html`
    <eox-selectionlist
      multiple
      .items=${[
        { id: "a", label: "Autobus" },
        { id: "b", label: "Bicycle" },
        { id: "c", label: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        document.querySelector("#output").innerHTML = JSON.stringify(
          evt.detail
        );
      }}
    ></eox-selectionlist>
    <span id="output"></span>
  `,
};
