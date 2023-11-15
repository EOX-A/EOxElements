import { ElementConfig } from "./main";

export const filter = async (
  items: Array<object>,
  filters: object,
  config: ElementConfig
) => {
  // @ts-ignore
  const response = await fetch(`${config.externalFilter(items, filters)}`);
  const jsonData = await response.json();
  return jsonData.features;
};
