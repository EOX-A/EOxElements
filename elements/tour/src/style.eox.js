import eoxStyle from "@eox/ui/style.css?inline";
import { addCommonStylesheet } from "@eox/elements-utils";

addCommonStylesheet();

export const styleEOX = `
  ${eoxStyle}

  header {
    min-block-size: unset;
    padding: unset;
    font-size: .875rem;
    font-weight: bold;
  }
`;
