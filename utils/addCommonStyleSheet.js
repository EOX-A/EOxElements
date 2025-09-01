import eoxStyle from "@eox/ui/style.css?inline";
/**
 * Adds the common CSS vars and font settings required
 * to style EOxElements, as CSS vars and fonts need to be
 * defined both inside the shadow DOM as well as outside
 */
export const addCommonStylesheet = () => {
  const id = "eox-elements";
  if (!document.head.querySelector(`style#${id}`)) {
    const eoxUiStyleSheet = new CSSStyleSheet();
    eoxUiStyleSheet.replaceSync(eoxStyle);

    const rootStyles = Array.from(eoxUiStyleSheet.cssRules)
      .filter((r) => r.cssText.includes(":root"))
      .map((r) => r.cssText)
      .join(" ");
    const style = document.createElement("style");
    style.setAttribute("id", id);
    style.innerHTML = `
    @import url("https://eox.at/fonts/inter/inter.css");

    @font-face {
      font-family: "Material Symbols Subset";
      font-style: normal;
      font-weight: 400;
      font-display: block;
      src: url(https://cdn.jsdelivr.net/npm/@eox/ui@0.3.4/dist/material-symbols-subset.woff2) format("woff2");
    }
  
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
      font-family: var(--font);
      font-size: .875rem;
      line-height: 1.5rem;
      letter-spacing: .0313rem;
    }
    ${rootStyles}
  `;
    document.head.appendChild(style);
  }
};
