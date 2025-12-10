export const sliderStyle = `
  .date-range-slider-wrapper {
    margin: 16px 0 40px;
  }

  :host {
    --track-bg: #cfd4dd;
  }

  /* Base track */
  .noUi-target {
    border: none;
    box-shadow: none;
    height: 8px;
    background: var(--track-bg);
    border-radius: 999px;
  }

  .noUi-base,
  .noUi-connects {
    border-radius: inherit;
  }

  .noUi-connect {
    background: var(--primary);
  }

  .noUi-horizontal .noUi-handle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--primary);
    border: none;
    box-shadow: none;
    top: 50%;
    transform: translate(-50%, -30%);
    cursor: pointer;
  }

  .noUi-handle::before,
  .noUi-handle::after {
    display: none;
  }

  .noUi-pips-horizontal {
    padding-top: 8px;
  }
  .noUi-marker-large {
    height: 12px;
  }
  .noUi-marker-sub {
    height: 6px;
  }
  .noUi-value {
    font-size: 11px;
    margin-top: 4px;
  }
`;
