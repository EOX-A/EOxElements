import MarkdownIt from "markdown-it";

declare global {
  interface CustomMarkdownIt extends MarkdownIt {
    attrs: { keys: Array<Number>; sections: Object };
    config: { version?: number; versionCheck: Boolean };
    nav: Array<String>;
    sections: Object;
  }
  interface CustomMarkdownItState extends MarkdownIt.StateBlock {
    md: CustomMarkdownIt;
  }
}
