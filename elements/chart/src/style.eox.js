import eoxStyle from "@eox/ui/style.css?inline";
import { addCommonStylesheet } from "@eox/elements-utils";

addCommonStylesheet();

export const styleEOX = `
  ${eoxStyle}
  :host {
    --padding: 0.5rem;
  }
  .vega-embed details {
    position: absolute;
    top: .5rem !important;
    right: .5rem !important;
  }
  .vega-embed summary {
    background: var(--primary) !important;
    color: var(--on-primary) !important;
    border: none !important;
  }
  .vega-embed .vega-actions {
    background: var(--surface-container-lowest) !important;
    color: var(--on-surface) !important;
  }
  .vega-embed .vega-actions a {
    font-family: inherit !important;
    font-weight: normal !important;
    font-size: small !important;
    color: var(--on-surface) !important;
    padding: 0 var(--padding) !important;
    justify-content: flex-start;
  }
  .vega-embed .vega-actions a:hover {
    background: color-mix(in srgb, var(--surface) 80%, transparent) !important;
  }
  .vega-embed.has-actions {
    padding-right: 0 !important;
  }
`;
