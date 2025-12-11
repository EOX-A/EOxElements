export const sliderStyle = `
  .date-range-slider-wrapper {
    margin: 16px 0 40px;
    position: relative;
    padding-bottom: 40px;
  }

  .custom-marks-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 8px;
    pointer-events: none;
  }

  :host {
    --track-bg: #cfd4dd;
  }

  /* Base track */
  tc-range-slider {
    --slider-bg: var(--track-bg);
    --slider-height: 8px;
    --slider-radius: 999px;
    --range-bg: var(--primary);
    --pointer-width: 18px;
    --pointer-height: 18px;
    --pointer-bg: var(--primary);
    --pointer-border: none;
    --pointer-shadow: none;
    --pointer-radius: 50%;
    display: block;
    width: 100%;
    position: relative;
    padding-bottom: 40px;
  }

  /* Custom marks */
  .custom-mark {
    position: absolute;
    pointer-events: none;
  }

  .custom-mark-year {
    height: 12px;
    width: 2px;
    background-color: var(--mark-color, #666);
  }

  .custom-mark-month {
    height: 6px;
    width: 1px;
    background-color: var(--mark-color, #999);
  }

  .custom-mark-label {
    font-size: 11px;
    white-space: nowrap;
    pointer-events: none;
  }

  .custom-mark-year-label {
    color: var(--mark-text-color, #666);
    margin-top: 4px;
  }

  .custom-mark-month-label {
    color: var(--mark-text-color, #999);
    margin-top: 4px;
  }

  /* Custom tooltips */
  .custom-tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
  }

  .custom-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.8);
  }
`;
