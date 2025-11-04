import React, { useCallback, useEffect, useState } from "react";
import { useGlobals, useStorybookApi } from "storybook/manager-api";
import { AddonPanel, Tabs } from "storybook/internal/components";
import { Source } from "@storybook/addon-docs/blocks";
import { renderReact, renderSvelte, renderVanilla, renderVue } from "./methods";

export const CodePanel = (props) => {
  const api = useStorybookApi();
  const [globals, updateGlobals] = useGlobals();

  const storyData = api.getCurrentStoryData();

  if (!props.active || !storyData?.prepared) {
    return <AddonPanel {...props}>Loading...</AddonPanel>;
  }

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

  const selectedCodeLanguage = globals["code-language"];

  const onSelectTab = (id) => {
    updateGlobals({
      ["code-language"]: id,
    });
  };

  return (
    <AddonPanel {...props}>
      <Tabs actions={{ onSelect: onSelectTab }} selected={selectedCodeLanguage}>
        <div id="vanilla" title="Vanilla JS">
          <div style={{ margin: "0 20px" }}>
            <Source language="html" code={vanilla} />
          </div>
        </div>
        <div id="react" title="React">
          <div style={{ margin: "0 20px" }}>
            <Source language="jsx" code={react} />
          </div>
        </div>
        <div id="vue" title="Vue">
          <div style={{ margin: "0 20px" }}>
            <Source language="html" code={vue} />
          </div>
        </div>
        <div id="svelte" title="Svelte">
          <div style={{ margin: "0 20px" }}>
            <Source language="html" code={svelte} />
          </div>
        </div>
      </Tabs>
    </AddonPanel>
  );
};
