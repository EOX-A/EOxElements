// @ts-nocheck
// adapted from https://gist.github.com/evenfrost/1ba123656ded32fb7a0cd4651efd4db0
export const highlight = (
  fuseSearchResult: unknown,
  highlightClassName = "highlight",
  matchKey = "title",
) => {
  const set = (
    obj: { [key: string]: unknown },
    path: string,
    value: unknown,
  ) => {
    const pathValue = path.split(".");
    let i;

    for (i = 0; i < pathValue.length - 1; i++) {
      obj = obj[pathValue[i]];
    }

    obj[pathValue[i]] = value;
  };

  const generateHighlightedText = (
    inputText: string,
    regions: number[] = [],
  ) => {
    let content = "";
    let nextUnhighlightedRegionStartingIndex = 0;

    regions.forEach((region: number) => {
      const lastRegionNextIndex = region[1] + 1;

      content += [
        inputText.substring(nextUnhighlightedRegionStartingIndex, region[0]),
        `<mark class="${highlightClassName}">`,
        inputText.substring(region[0], lastRegionNextIndex),
        "</mark>",
      ].join("");

      nextUnhighlightedRegionStartingIndex = lastRegionNextIndex;
    });

    content += inputText.substring(nextUnhighlightedRegionStartingIndex);

    return content;
  };

  return (fuseSearchResult as Array<{ matches?: unknown[]; item: unknown }>)
    .filter(({ matches }) => matches && matches.length)
    .map(({ item, matches }) => {
      const highlightedItem: { [key: string]: unknown } = {};
      for (const [key, value] of Object.entries(item)) {
        highlightedItem[key] = value;
      }

      (matches as Array<{ [key: string]: unknown }>).forEach((match) => {
        if (match.key !== matchKey) return;
        set(
          highlightedItem,
          match.key as string,
          generateHighlightedText(
            match.value as string,
            match.indices as number[],
          ),
        );
      });

      return highlightedItem;
    });
};
