declare type Item = {
  [key: string]: unknown;
};

declare type Filter = HTMLElement & {
  reset: () => void;
};

declare type FilterState = { [key: string]: object };

declare type FilterObject = {
  dirty?: boolean;
  exclusive?: boolean;
  expanded?: boolean;
  featured?: boolean;
  format?: string;
  key?: string;
  keys?: string[];
  reset: Function;
  state?: FilterState;
  stringifiedState?: string;
  title?: string;
  type?: "multiselect" | "range" | "select" | "spatial" | "text";
};
