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
  .vc-date[data-vc-date-selected] .vc-date__btn {
    background-color: var(--primary) !important;
  }
  .vc-date[data-vc-date-selected] .vc-day__dot {
    background: var(--on-primary) !important;
  }
`;

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
