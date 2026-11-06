export const ACTIVITY_EVENT_NAME = "eox:activity";

/**
 * @template [T=unknown]
 * @typedef {object} EOxActivityDetail
 * @property {string} element - Custom element tag name in lowercase (e.g. "eox-stacinfo")
 * @property {string} action - Standardized or element-specific action name (e.g. "click:link", "select")
 * @property {T} payload - Payload associated with the activity
 * @property {unknown} [originalEvent] - Optional underlying DOM or library event
 */

/**
 * @template [T=unknown]
 * @typedef {object} DispatchElementEventOptions
 * @property {T} [detail] - Event detail payload (used when `eventOrType` is a string)
 * @property {boolean} [activity=false] - Whether this event signals human activity and should also emit `eox:activity`
 * @property {string} [action] - Optional action name override for `eox:activity` (defaults to the event `type`)
 * @property {unknown} [activityPayload] - Optional payload override for `eox:activity` (defaults to the event `detail`)
 * @property {unknown} [originalEvent] - Optional original DOM/library event
 * @property {boolean} [bubbles=true] - Whether the event bubbles (defaults to true)
 * @property {boolean} [composed=true] - Whether the event crosses shadow DOM boundaries (defaults to true)
 * @property {boolean} [cancelable=false] - Whether the event is cancelable
 */

/**
 * Walks up the DOM tree, crossing shadow DOM boundaries via `getRootNode().host`,
 * to find an ancestor matching the given tag name.
 *
 * @param {Element | null | undefined} element - Starting element
 * @param {string} tagName - Target custom element tag name in lowercase (e.g. "eox-layercontrol")
 * @returns {HTMLElement | null} The matching ancestor element or null
 */
export const findHost = (element, tagName) => {
  const targetTag = tagName.toLowerCase();
  /** @type {any} */
  let current = element;
  while (current) {
    if (current.tagName && current.tagName.toLowerCase() === targetTag) {
      return current;
    }
    current =
      current.parentElement ||
      (current.getRootNode && current.getRootNode()?.host) ||
      null;
  }
  return null;
};

/**
 * Emits a standardized `eox:activity` composed, bubbling CustomEvent from an EOxElement.
 *
 * @template [T=unknown]
 * @param {HTMLElement | Element} element - The EOxElement instance dispatching the activity
 * @param {string} action - The activity action identifier (e.g. "click:link", "select")
 * @param {T} [payload] - Activity payload
 * @param {unknown} [originalEvent] - Underlying DOM or library event if available
 * @returns {CustomEvent<EOxActivityDetail<T>>} The dispatched `eox:activity` CustomEvent
 */
export const emitActivity = (element, action, payload, originalEvent) => {
  const activityEvent = new CustomEvent(ACTIVITY_EVENT_NAME, {
    bubbles: true,
    composed: true,
    detail: {
      element: element.tagName ? element.tagName.toLowerCase() : "",
      action,
      payload,
      ...(originalEvent !== undefined ? { originalEvent } : {}),
    },
  });
  element.dispatchEvent(activityEvent);
  return activityEvent;
};

/**
 * Wraps and dispatches an EOxElement event so that:
 * 1. The functional event is dispatched with `{ bubbles: true, composed: true }` by default
 *    while preserving its exact event name and `detail` for backward compatibility.
 * 2. When `options.activity` is `true`, a standardized `eox:activity` event is also dispatched.
 *
 * @template [T=unknown]
 * @param {HTMLElement | Element} element - The host element dispatching the event
 * @param {string | Event | CustomEvent<T>} eventOrType - Event type string or an existing Event/CustomEvent instance
 * @param {DispatchElementEventOptions<T>} [options={}] - Dispatch and activity options
 * @returns {CustomEvent<T>} The dispatched functional CustomEvent
 */
export const dispatchElementEvent = (element, eventOrType, options = {}) => {
  const isEventInstance =
    typeof Event !== "undefined" && eventOrType instanceof Event;
  const type = isEventInstance
    ? eventOrType.type
    : /** @type {string} */ (eventOrType);
  const detail = isEventInstance
    ? /** @type {CustomEvent} */ (eventOrType).detail
    : options.detail;
  const bubbles = options.bubbles !== undefined ? options.bubbles : true;
  const composed = options.composed !== undefined ? options.composed : true;
  const cancelable =
    options.cancelable !== undefined
      ? options.cancelable
      : isEventInstance
        ? eventOrType.cancelable
        : false;

  const event = new CustomEvent(type, {
    detail,
    bubbles,
    composed,
    cancelable,
  });

  // Attach isUser flag directly to the CustomEvent instance for synchronous inspection
  /** @type {any} */ (event).isUser = Boolean(options.activity);

  element.dispatchEvent(event);

  if (options.activity) {
    const action = options.action || type;
    const payload =
      options.activityPayload !== undefined ? options.activityPayload : detail;
    emitActivity(element, action, payload, options.originalEvent);
  }

  return event;
};
