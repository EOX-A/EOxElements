declare type Filter = HTMLElement & {
  reset: Function;
};

declare type FilterState = { [key: string]: any };

declare type FilterObject = {
  exclusive?: Boolean;
  expanded?: Boolean;
  format?: string;
  key?: string;
  state?: FilterState;
  title?: string;
  type?: string;
};
