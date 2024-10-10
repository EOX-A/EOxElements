/**
 * @type {import("vega-embed").VisualizationSpec}
 */
export const DEFAULT_SPEC = {
  // @ts-expect-error see https://vega.github.io/vega-lite/docs/size.html#specifying-responsive-width-and-height
  width: "container",
  // @ts-expect-error see https://vega.github.io/vega-lite/docs/size.html#specifying-responsive-width-and-height
  height: "container",
  autosize: "fit",
  resize: true,
};
