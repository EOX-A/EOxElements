import React from "react";
import { useStorybookApi } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export const DescriptionPanel = (props) => {
  const api = useStorybookApi();

  const storyData = api.getCurrentStoryData();

  if (!props.active || !storyData?.prepared) {
    return null;
  }

  const storyDescription = storyData.parameters?.docs?.description?.story || "";
  const renderedHtml = md.render(storyDescription);

  return (
    <AddonPanel {...props}>
      <div
        style={{ padding: "10px 20px" }}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    </AddonPanel>
  );
};
