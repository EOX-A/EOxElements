import eoxColorsLight from "@eox/ui/style/colors/light.css?inline";
import eoxColorsDark from "@eox/ui/style/colors/dark.css?inline";
import eoxVariables from "@eox/ui/beercss/variables.css?inline";
import vanillaCalendarCSS from "vanilla-calendar-pro/styles/index.css?inline";

export const calendarStyle = `
  ${eoxColorsLight}
  ${eoxColorsDark}
  ${eoxVariables}
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
  :host {
    background-color: var(--surface-container-lowest);
  }
  .vc:not(body > .vc) {
    background-color: transparent !important;
  }
  .vc:is(body > .vc) {
    background-color: var(--surface-container-lowest);
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
  .vc-week__day {
    color: var(--primary) !important;
  }
  button {
    background-color: transparent !important;
    color: var(--on-surface) !important;
  }
  button:hover {
    background-color: var(--surface-container-low) !important;
  }
  .vc-date.vc-data-available .vc-date__btn {
    background-color: var(--surface-container-low) !important;
  }
  .vc-date[data-vc-date-selected] .vc-date__btn {
    background-color: var(--primary) !important;
    color: var(--on-primary) !important;
  }
  .vc-arrow {
    padding: 0;
    border-radius: 50%;
  }
  .vc-arrow:before {
    display: block;
    position: relative;
    background: var(--on-surface) !important;
    -webkit-mask-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>chevron-down</title><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>") !important;
    mask-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>chevron-down</title><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>") !important;
    mask-repeat: no-repeat;
  }
  .vc-arrow:hover:before {
    background: var(--primary) !important;
  }
  .vc-dates__row {
    grid-gap: 2px;
  }
  .vc-date.vc-data-available:hover .vc-date__popup {
    opacity: 1 !important;
  }
  .vc-item-popup {
    padding: 8px;
    // max-width: 300px;
    background-color: var(--surface-container-lowest);
    border-radius: 0.75rem;
  }
  .v-date_popup {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .vc-date__popup {
    max-width: 300px !important;
    left: 0px !important;
    padding: 0.5rem !important;
    background-color: var(--surface-container-lowest) !important;
    color: var(--on-surface) !important;
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
    background-color: var(--primary-color, var(--primary, #004170));
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
    color: var(--on-surface);
    font-size: 0.9em;
  }
  .vc-item-popup__more {
    margin-top: 4px;
    color: #999;
    font-size: 0.9em;
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
