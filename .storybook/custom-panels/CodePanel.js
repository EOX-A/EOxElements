import React, { useEffect, useState } from "react";
import { useStorybookApi } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";
import { Markdown } from "@storybook/addon-docs/blocks";
import { renderReact, renderSvelte, renderVanilla, renderVue } from "./methods";

export const CodePanel = (props) => {
  const api = useStorybookApi();

  const storyData = api.getCurrentStoryData();
  if (!storyData?.prepared) {
    return;
  }
  // const [args, updateArgs, resetArgs] = useArgs();
  // console.log(args)
  console.log(storyData);
  // console.log(api)
  // debugger

  const [react, updateReact] = useState();
  const [svelte, updateSvelte] = useState();
  const [vanilla, updateVanilla] = useState();
  const [vue, updateVue] = useState();
  useEffect(() => {
    const renderCode = async () => {
      updateReact(await renderReact(storyData));
      updateSvelte(await renderSvelte(storyData));
      updateVanilla(await renderVanilla(storyData));
      updateVue(await renderVue(storyData));
    };
    renderCode();
  });

  return (
    <AddonPanel {...props}>
      <div style={{ padding: "10px 20px" }}>
        <h3>Vanilla JS</h3>
        <Markdown>{vanilla}</Markdown>
        <h3>React</h3>
        <Markdown>{react}</Markdown>
        <h3>Vue</h3>
        <Markdown>{vue}</Markdown>
        <h3>Svelte</h3>
        <Markdown>{svelte}</Markdown>
      </div>
    </AddonPanel>
  );
};
