export {};

declare global {
  interface Window {
    SimpleMDE: object;
    ace: { [key: string]: any };
  }
}
