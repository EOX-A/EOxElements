import * as React from "react";
import { addons, types } from "storybook/manager-api";
import { DescriptionPanel } from "./DescriptionPanel.js";
import { CodePanel } from "./CodePanel.js";

addons.register("eox/storybook-custom-panels", () => {
  addons.add("eox/storybook-custom-panels/description", {
    type: types.PANEL,
    title: "Description",
    match: ({ tabId, viewMode }) => !tabId && viewMode === "story",
    render: ({ active }) => <DescriptionPanel active={active} />,
  });
  addons.add("eox/storybook-custom-panels/code", {
    type: types.PANEL,
    title: "View Code </>",
    match: ({ tabId, viewMode }) => !tabId && viewMode === "story",
    render: ({ active }) => <CodePanel active={active} />,
  });
});
