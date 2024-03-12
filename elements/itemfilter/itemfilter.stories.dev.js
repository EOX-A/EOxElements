import { html } from "lit";

export default {
  title: "Elements/eox-itemfilter",
  tags: ["autodocs"],
  component: "eox-itemfilter",
};

export const Autocomplete = {
  render: () => html`
    <eox-autocomplete
      .items=${[
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        console.log(evt.detail);
      }}
    ></eox-autocomplete>
  `,
};

export const AutocompleteUnstyled = {
  render: () => html`
    <eox-autocomplete
      unstyled
      .items=${[
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        console.log(evt.detail);
      }}
    ></eox-autocomplete>
  `,
};

export const AutocompleteMultiple = {
  render: () => html`
    <eox-autocomplete
      multiple
      .items=${[
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        console.log(evt.detail);
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
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        console.log(evt.detail);
      }}
    ></eox-autocomplete>
  `,
};

export const Chips = {
  render: () => html`
    <eox-itemfilter-chips
      .items=${[
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        console.log(evt.detail);
      }}
    ></eox-itemfilter-chips>
  `,
};

export const ChipsUnstyled = {
  render: () => html`
    <eox-itemfilter-chips
      .items=${[
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      unstyled
      @items-selected=${(evt) => {
        console.log(evt.detail);
      }}
    ></eox-itemfilter-chips>
  `,
};

export const SelectionList = {
  render: () => html`
    <eox-selectionlist
      .items=${[
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      @items-selected=${(evt) => {
        console.log(evt.detail);
      }}
    ></eox-selectionlist>
  `,
};

export const SelectionListMultiple = {
  render: () => html`
    <eox-selectionlist
      multiple
      .items=${[
        { id: "a", title: "Autobus" },
        { id: "b", title: "Bicycle" },
        { id: "c", title: "Catalog" },
      ]}
      .selectedItems=${[{ id: "b", title: "Bicycle" }]}
      @items-selected=${(evt) => {
        console.log(evt.detail);
      }}
    ></eox-selectionlist>
  `,
};
