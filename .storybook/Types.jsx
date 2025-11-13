import React from "react";
import { useOf } from "@storybook/addon-docs/blocks";
import typedocJson from "../types.json";

export const Types = ({ of }) => {
  const { component } = useOf("component");
  const hasTypes = Object.values(typedocJson.files.entries).find(
    (e) => e.includes(component.replace("eox-", "")) && e.includes(".ts"),
  );
  if (hasTypes) {
    return [
      <h3 id="types" key="title">
        Types
      </h3>,
      <iframe
        key="types-frame"
        src={`${window.location.origin}${window.location.pathname
          .split("/")
          .splice(0, window.location.pathname.split("/").length - 1)
          .join(
            "/",
          )}/typedoc_html/modules/${component.replace("eox-", "elements_")}.html`}
        style={{ width: "100%", border: "none", height: "1000px" }}
      ></iframe>,
    ];
  }
};
