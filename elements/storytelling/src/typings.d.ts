import MarkdownIt from "markdown-it";

declare global {
  interface CustomMarkdownIt extends MarkdownIt {
    attrs: { keys: Array<number>; sections: object };
    config: { version?: number; versionCheck: boolean };
    nav: Array<string>;
    sections: object;
  }
  interface CustomMarkdownItState extends MarkdownIt.StateBlock {
    md: CustomMarkdownIt;
  }
}
