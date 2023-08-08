declare type RangeFilterObject = FilterObject & {
  format: string;
  min: number;
  max: number;
};

declare type SpatialFilterObject = FilterObject & {
  mode: string;
  geometry: any;
};

declare type TextFilterObject = FilterObject & {
  keys: Array<string>;
};
