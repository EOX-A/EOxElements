import React from "react";
import { useStorybookApi } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";
import { Markdown } from "@storybook/addon-docs/blocks";

export const DescriptionPanel = (props) => {
  const api = useStorybookApi();

  const storyData = api.getCurrentStoryData();

  if (!props.active || !storyData?.prepared) {
    return;
  }

  return (
    <AddonPanel {...props}>
      <div style={{ padding: "10px 20px" }}>
        <Markdown>{storyData.parameters?.docs?.description?.story}</Markdown>
      </div>
    </AddonPanel>
  );
};
