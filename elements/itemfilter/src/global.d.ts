declare type Item = {
  [key: string]: any;
};

declare type Filter = HTMLElement & {
  reset: Function;
};

declare type FilterState = { [key: string]: any };

declare type FilterObject = {
  dirty?: boolean;
  exclusive?: boolean;
  expanded?: boolean;
  featured?: boolean;
  format?: string;
  key: string;
  state?: FilterState;
  title?: string;
  type?: "multiselect" | "range" | "select" | "spatial" | "text";
};
