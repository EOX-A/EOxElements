declare module "*.css?inline" {
  const content: string;
  export default content;
}

export declare function addCommonStylesheet(): void;

export declare function getElement(
  stringOrElement: string | HTMLElement | undefined,
): HTMLElement | undefined;

export interface EOxActivityDetail<T = unknown> {
  element: string;
  action: string;
  payload: T;
  originalEvent?: unknown;
}

export interface DispatchElementEventOptions<T = unknown> {
  detail?: T;
  activity?: boolean;
  action?: string;
  activityPayload?: unknown;
  originalEvent?: unknown;
  bubbles?: boolean;
  composed?: boolean;
  cancelable?: boolean;
}

export declare const ACTIVITY_EVENT_NAME = "eox:activity";

export declare function findHost(
  element: Element | null | undefined,
  tagName: string,
): HTMLElement | null;

export declare function emitActivity<T = unknown>(
  element: HTMLElement | Element,
  action: string,
  payload?: T,
  originalEvent?: unknown,
): CustomEvent<EOxActivityDetail<T>>;

export declare function dispatchElementEvent<T = unknown>(
  element: HTMLElement | Element,
  eventOrType: string | Event | CustomEvent<T>,
  options?: DispatchElementEventOptions<T>,
): CustomEvent<T> & { isUser?: boolean };

export declare function safeCloneValue<T = unknown>(val: T): T;

export declare function computeStep(min: number, max: number): number;

export declare function getStepDecimals(step: number): number;

export declare function roundRangeBounds(
  range: [number, number],
): [number, number];

export declare function computeLegendTickFormat(
  domain: [number, number],
): string;

export declare function parseRangeAttribute(
  raw: unknown,
): [number, number] | null;

export declare function resolveRangeDefaults(
  validRange: number[] | null | undefined,
  visualizationRange?: number[] | null,
): {
  min: number;
  max: number;
  boundsRange: [number, number] | null;
};

export declare function buildMinMaxProperties(
  min?: number,
  max?: number,
  validRange?: number[] | null,
): {
  minProp: Record<string, any>;
  maxProp: Record<string, any>;
  hasValidRange: boolean;
};

export declare function applyMinMaxToSchemaProperties(
  props: Record<string, any>,
  min: number,
  max: number,
  validRange?: number[] | null,
  isAutofill?: boolean,
  overwriteDefaults?: boolean,
): void;

export declare function applyLayerStyleVariables(
  layer: any,
  variables: Record<string, any>,
): void;

export declare function syncMinMaxFormValues(
  target: Record<string, any>,
  schemaProps: Record<string, any> | undefined,
  min: number,
  max: number,
  isAutofill?: boolean,
): void;

export declare function buildDimensionProperty(
  dimName: string,
  dimMeta: {
    size: number;
    attributes?: Record<string, any>;
    coordinates?: any[];
  },
): Record<string, any>;

export declare function resolveDimensionIndex(
  dimMeta: { size?: number; coordinates?: any[] } | undefined,
  value: number | string,
): number;
