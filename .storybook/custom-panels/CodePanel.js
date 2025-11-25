import React, { useState } from "react";
import { useChannel, useGlobals, useStorybookApi } from "storybook/manager-api";
import { AddonPanel, Tabs } from "storybook/internal/components";
import { Source } from "@storybook/addon-docs/blocks";

export const CodePanel = (props) => {
  const api = useStorybookApi();

  const [globals, updateGlobals] = useGlobals();
  const selectedCodeLanguage = globals["code-language"];
  const onSelectTab = (id) => {
    updateGlobals({
      ["code-language"]: id,
    });
  };

  const storyData = api.getCurrentStoryData();

  const [codeSnippet, setSourceCode] = useState();
  useChannel({
    ["storybook/docs/snippet-rendered"]: ({ source }) => {
      setSourceCode(source);
    },
  });

  if (!props.active || !storyData?.prepared || !codeSnippet) {
    return (
      <AddonPanel {...props}>
        <div style={{ padding: "20px" }}>Loading...</div>
      </AddonPanel>
    );
  }

  return (
    <AddonPanel {...props}>
      <Tabs actions={{ onSelect: onSelectTab }} selected={selectedCodeLanguage}>
        <div id="vanilla" title="Vanilla JS"></div>
        <div id="react" title="React"></div>
        <div id="vue" title="Vue"></div>
        <div id="svelte" title="Svelte"></div>
      </Tabs>
      <Source
        code={codeSnippet}
        language={selectedCodeLanguage === "react" ? "jsx" : "html"}
      />
    </AddonPanel>
  );
};
