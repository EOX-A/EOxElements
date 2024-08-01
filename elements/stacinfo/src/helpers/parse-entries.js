import { transformProperties } from "./index";

export default function parseEntries(list, that, type) {
  return transformProperties(
    Object.entries(that.stacProperties)
      .filter(([key]) => {
        return list === that.properties && (!list || list.length < 1)
          ? true
          : list?.includes(key);
      })
      .reverse()
      .sort(([keyA], [keyB]) =>
        list?.indexOf(keyA) > list?.indexOf(keyB) ? 1 : -1
      ),
    type
  );
}
