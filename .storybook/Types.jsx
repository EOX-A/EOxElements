import React from "react";
import { useOf } from "@storybook/addon-docs/blocks";

export const Types = ({ of }) => {
  const { component } = useOf("component");
  return (
    <iframe
      src={`${window.location.origin}${window.location.pathname
        .split("/")
        .splice(0, window.location.pathname.split("/").length - 1)
        .join(
          "/",
        )}/typedoc_html/modules/${component.replace("eox-", "elements_")}.html`}
      style={{ width: "100%", border: "none", height: "1000px" }}
    ></iframe>
  );
};
