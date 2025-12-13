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

#date-container input {
  min-width: 90px;
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: small;
  background: white;
  outline: none;    
  margin: 0px 2px;
}

#date-container input.input-field {
  border: 1.5px solid #0e0e0e30;
  padding: 2px;
  border-radius: 4px;
}

#date-container input.input-field:focus-visible {
  border: 2px solid #005fcc;
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

tc-range-slider {
  display: inline-block;
  margin: 0;
}
`;
