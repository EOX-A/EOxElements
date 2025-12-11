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
    transform: translateX(-50%);
  }

  .custom-mark-year {
    height: 12px;
    width: 2px;
    background-color: var(--mark-color, #666);
    top: 0;
  }

  .custom-mark-empty {
    height: 4px;
    width: 1px;
    background-color: var(--mark-color, #ccc);
    top: 10px;
  }

  .custom-mark-label {
    position: absolute;
    font-size: 11px;
    white-space: nowrap;
    pointer-events: none;
    left: 50%;
    transform: translateX(-50%);
    /* Prevent text cut off at edges */
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Show full first/last label within slider bounds */
  .custom-mark:first-child .custom-mark-label {
    left: 0;
    transform: translateX(0);
    text-align: left;
    max-width: 70px;
  }
  .custom-mark:last-child .custom-mark-label {
    left: 100%;
    transform: translateX(-100%);
    text-align: right;
    max-width: 70px;
  }

  .custom-mark-year-label {
    color: var(--mark-text-color, #666);
    top: 16px;
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
