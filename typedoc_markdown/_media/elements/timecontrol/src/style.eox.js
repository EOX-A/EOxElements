import eoxStyle from "@eox/ui/style.css?inline";
import { addCommonStylesheet } from "@eox/elements-utils";

addCommonStylesheet();

export const styleEOX = `
${eoxStyle}

:host, :root {
  --navigation-button-display: inline-flex;
}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

tc-range-slider {
  display: inline-block;
  width: 300px;
  margin: 0;
}
`;
