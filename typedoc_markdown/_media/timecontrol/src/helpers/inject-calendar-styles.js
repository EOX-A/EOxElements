import vanillaCalendarCSS from "vanilla-calendar-pro/styles/index.css?inline";

export const calendarStyle = `
  ${vanillaCalendarCSS}
  :root, :host, body {
    --dot-color-1: var(--primary);
    --dot-color-2: #F5365C;
    --dot-color-3: #43CC8B;
    --dot-color-4: #FFBE4F;
    --dot-color-5: #00F6FF;
    --dot-color-6: #FF4AB1;
    --dot-color-7: #FFE600;
    --dot-color-8: #36FF72;
    --dot-color-9: #00F0FF;
    --dot-color-10: #FF6B00;
    --dot-color-11: #E100FF;
  }
  .vc {
    z-index: 9999;
  }
  .vc * {
    font-family: var(--eox-body-font-family);
  }
  .vc-day__dots {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    pointer-events: none;
  }
  .vc-day__dot {
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    opacity: 0.9;
  }
  .vc-day__plus {
    width: 6px;
    height: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .vc-day__plus::before, .vc-day__plus::after {
    content: "";
    position: absolute;
    background: var(--primary);
    border-radius: 1px;
  }
  .vc-day__plus::before {
    width: 1.5px;
    height: 6px;
    background: var(--primary);
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .vc-day__plus::after {
    height: 1.5px;
    width: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .vc-date[data-vc-date-selected] .vc-day__dot,
  .vc-date[data-vc-date-selected] .vc-day__plus::after,
  .vc-date[data-vc-date-selected] .vc-day__plus::before {
    background: var(--on-primary) !important;
  }
  [data-vc-theme=light] .vc-date.vc-data-available .vc-date__btn {
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  }
  [data-vc-theme=dark] .vc-date.vc-data-available .vc-date__btn {
    --tw-bg-opacity: 1;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity));
  }
  [data-vc-theme=light] .vc-date.vc-data-unavailable .vc-date__btn {
    --tw-bg-opacity: 0;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
    border: 3px solid rgb(241 245 249);
  }
  [data-vc-theme=dark] .vc-date.vc-data-unavailable .vc-date__btn {
    --tw-bg-opacity: 0;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity));
    border: 3px solid rgb(30 41 59);
  }
  .vc-date[data-vc-date-selected] .vc-date__btn {
    background-color: var(--primary) !important;
    border: none !important;
  }
  .vc-date.vc-data-available:hover .vc-date__popup {
    opacity: 1 !important;
  }
  .vc-item-popup {
    padding: 8px;
    // max-width: 300px;
    background-color: #fff;
    border-radius: 4px;
  }
  .v-date_popup {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  [data-vc-theme=dark] .vc-item-popup {
    background-color: #1e293b;
    color: #fff;
  }
  .vc-date__popup {
    max-width: 300px !important;
    left: 0px !important;
    padding: 0.5rem !important;
  }
  .vc-item-popup__item {
    margin-bottom: 12px;
  }
  .vc-item-popup__item:last-of-type {
    margin-bottom: 0;
  }
  .vc-item-popup__item-content {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;
  }
  .vc-item-popup__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-color, var(--primary, #007bff));
    margin-right: 8px;
    margin-top: 4px;
    flex-shrink: 0;
  }
  .vc-item-popup__text-container {
    flex: 1;
  }
  .vc-item-popup__id {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .vc-item-popup__meta {
    margin-top: 2px;
    color: #333;
    font-size: 0.9em;
  }
  [data-vc-theme=dark] .vc-item-popup__meta {
    color: #cbd5e1;
  }
  .vc-item-popup__more {
    margin-top: 4px;
    color: #999;
    font-size: 0.9em;
  }
  [data-vc-theme=dark] .vc-item-popup__more {
    color: #94a3b8;
  }
`;

/**
 * Injects calendar styles into the document head if they haven't been injected already.
 * The styles include vanilla-calendar-pro base styles and custom styling for dots, selection, and themes.
 * Uses an ID check to prevent duplicate style injection.
 */
export function injectCalendarStyles() {
  // Check if styles are already injected
  if (document.querySelector("#vanilla-calendar-styles")) {
    return;
  }

  // Create style element for vanilla-calendar CSS
  const styleElement = document.createElement("style");
  styleElement.id = "vanilla-calendar-styles";
  styleElement.textContent = calendarStyle;

  // Inject into document head
  document.head.appendChild(styleElement);
}

/**
 * Cleans up calendar styles and DOM elements when the last timecontrol component is removed.
 * Removes the style element and all calendar-related DOM elements with class 'vc'.
 * Note: Currently checks for 'eox-timeslider' elements, but should check for 'eox-timecontrol'.
 */
export function cleanCalendarStyles() {
  // Clean up calendar styles if this is the last timeslider component
  const timesliderElements = document.querySelectorAll("eox-timeslider");
  if (timesliderElements.length <= 1) {
    const styleElement = document.querySelector("#vanilla-calendar-styles");
    if (styleElement) {
      styleElement.remove();
    }
  }
  // Remove all elements with class name 'vc' from the DOM
  const calendarElements = document.querySelectorAll(".vc");
  calendarElements.forEach((el) => el.remove());
}
