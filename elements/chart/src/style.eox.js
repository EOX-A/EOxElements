import eoxStyle from "@eox/ui/style.css?inline";

export const styleEOX = `
  ${eoxStyle}
  :host {
    --padding: 0.5rem;
  }
  .vega-embed .vega-actions a {
    font-family: inherit !important;
    font-weight: normal !important;
    font-size: small !important;
    padding: 0 var(--padding) !important;
  }
  .vega-embed.has-actions {
    padding-right: 0 !important;
  }
`;
