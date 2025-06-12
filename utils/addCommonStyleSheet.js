import eoxStyle from "@eox/ui/style.css?inline";
/**
 * Adds the common CSS vars and font settings required
 * to style EOxElements, as CSS vars and fonts need to be
 * defined both inside the shadow DOM as well as outside
 */
export const addCommonStylesheet = () => {
  const commentFlag = "/* EOxElements shared stylesheet */";
  if (
    !Array.from(document.head.querySelectorAll("style")).some((s) =>
      s.innerHTML.includes(commentFlag),
    )
  ) {
    const eoxUiStyleSheet = new CSSStyleSheet();
    eoxUiStyleSheet.replaceSync(eoxStyle);

    const rootStyles = Array.from(eoxUiStyleSheet.cssRules)
      .filter((r) => r.cssText.includes(":root"))
      .map((r) => r.cssText)
      .join(" ");
    const style = document.createElement("style");
    style.innerHTML = `
    ${commentFlag}
    @import url("https://eox.at/fonts/inter/inter.css");
  
    eox-chart,
    eox-drawtools,
    eox-feedback,
    eox-geosearch,
    eox-itemfilter,
    eox-jsonform,
    eox-layercontrol,
    eox-map,
    eox-stacinfo,
    eox-storytelling,
    eox-timecontrol {
      font-family: Inter;
    }
    ${rootStyles}
  `;
    document.head.appendChild(style);
  }
};
