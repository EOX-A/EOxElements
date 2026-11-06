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
): CustomEvent<T>;
