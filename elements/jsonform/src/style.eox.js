import { checkbox } from "../../../utils/styles/checkbox";
import { radio } from "../../../utils/styles/radio";
import { slider } from "../../../utils/styles/slider";

export const styleEOX = `
  ${checkbox}
  ${radio}
  ${slider}

  [data-schemaid=root] > .je-header {
    display: none;
  }
  input[type="text"], input[type="number"], textarea, select {
    box-sizing: border-box !important;
    width: 100% !important;
    margin: 0.5rem 0rem !important;
    padding: 5px 7px !important;
    border-radius: 4px !important;
    border: 1px solid #0004 !important;
  }
  .je-range-control {
    padding: 0.5rem 0;
  }
  .errmsg {
    font-size: x-small;
  }
  tc-range-slider{
    display: block;
    margin: 0.5rem 0;
  }
`;
