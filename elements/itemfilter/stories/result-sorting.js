import { html } from "lit";
import testItems from "../test/testItems.json";

/**
 * Demonstrates the `resultSorting` property for custom sorting of results.
 * It's possible to sort results by any property of the items, including custom functions and sort directions.
 *
 * ```html
 * <eox-itemfilter .resultSorting="${{ key: 'title', order: 'desc' }}"></eox-itemfilter>
 * ```
 */
export const ResultSortingStory = () => ({
  render: (args) =>
    html`<eox-itemfilter
      .items=${args.items}
      .resultSorting=${args.resultSorting}
    ></eox-itemfilter>`,
  args: {
    items: testItems,
    resultSorting: { key: "themes", order: "desc" },
  },
});
