export {};

declare global {
  interface Window {
    SimpleMDE: object;
    ace: typeof import("ace-builds");
  }
}
