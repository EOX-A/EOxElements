import type { MarkdownIt, StateCore } from "markdown-it";

export interface CustomMarkdownIt extends MarkdownIt {
  attrs: { keys: Array<number>; sections: object };
  config: { version?: number; versionCheck: boolean };
  nav: Array<string>;
  sections: object;
  showMapLoadingIndicator?: boolean;
}
export type CustomMarkdownItState = StateCore & {
  md: CustomMarkdownIt;
};

declare global {
  interface Window {
    SimpleMDE: object;
    ace: typeof import("ace-builds");
  }
}
