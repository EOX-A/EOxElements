export const ELEMENT_CONFIG = Object.freeze({
  /**
   * Aggregate results by a property key
   */
  aggregateResults: undefined,

  /**
   * Automatically spread single item summaries
   * removing the summary header
   */
  autoSpreadSingle: false,

  /**
   * Highlighting of search result character matches
   */
  enableHighlighting: false,

  /**
   * Use an external search endpoint instead of fuse search.
   * Passed properties: input string, filters object
   *
   * (input, filters) => {}
   */
  externalFilter: () => {},

  /**
   * The filter properties.
   */
  filterProperties: [],

  /**
   * Native fuse.js config override
   */
  fuseConfig: {},

  /**
   * Inline mode, for rendering the itemfilter in a very condensed space.
   * Expects showResults to be false
   */
  inlineMode: false,

  /**
   * Show all result items if nothing is input by the user
   * @default true
   */
  matchAllWhenEmpty: true,

  /**
   * Display results list
   */
  showResults: true,

  /**
   * Unique id property of items
   */
  idProperty: "id",

  /**
   * The property of the result items used for display
   */
  titleProperty: "title",

  /**
   * The property of the result items used for a subtitle
   */
  subTitleProperty: undefined,

  /**
   * Allow opening multiple filter accordions in parallel
   * @default true
   */
  expandMultipleFilters: true,

  /**
   * Initialize result accordions expanded
   * @default true
   */
  expandResults: true,

  /**
   * Allow opening multiple result accordions in parallel
   * @default true
   */
  expandMultipleResults: true,
});
