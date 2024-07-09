declare type Item = {
  [key: string]: unknown;
};

declare type Filter = HTMLElement & {
  reset: () => void;
};

declare type FilterState = { [key: string]: object | boolean | number };

declare type FilterObject = {
  id?: string;
  dirty?: boolean;
  exclusive?: boolean;
  expanded?: boolean;
  featured?: boolean;
  format?: string;
  key?: string;
  keys?: string[];
  reset?: () => void;
  sort?: (a: string, b: string) => number;
  state?: FilterState;
  stringifiedState?: string;
  title?: string;
  type?: "multiselect" | "range" | "select" | "spatial" | "text";
  _inProgress?: boolean;
};
