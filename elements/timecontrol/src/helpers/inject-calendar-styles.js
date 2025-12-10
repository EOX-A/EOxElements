import vanillaCalendarCSS from "vanilla-calendar-pro/styles/index.css?inline";

export const calendarStyle = `
  ${vanillaCalendarCSS}
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
    background: var(--primary);
    opacity: 0.9;
  }
  .vc-day__dot:nth-child(2) {
    background: #F5365C;
  }
  .vc-day__dot:nth-child(3) {
    background: #43CC8B;
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
  .vc-date[data-vc-date-selected] .vc-date__btn {
    background-color: var(--primary) !important;
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
