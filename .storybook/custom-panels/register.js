import * as React from "react";
import { addons, types } from "storybook/manager-api";
import { DescriptionPanel } from "./DescriptionPanel.js";

addons.register("eox/storybook-custom-panels", () => {
  addons.add("eox/storybook-custom-panels/description", {
    type: types.PANEL,
    title: "Description",
    match: ({ tabId, viewMode }) => !tabId && viewMode === "story",
    render: ({ active }) => <DescriptionPanel active={active} />,
  });
});
