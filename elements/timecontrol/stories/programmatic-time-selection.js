import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const ProgrammaticTimeSelection = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#programmatic-time-selection",
    slider: true,
  },
  render: (args) => html`
    <eox-map
      id="programmatic-time-selection"
      style="width: 400px; height: 300px;"
      .zoom=${args.zoom}
      .center=${args.center}
      .layers=${args.layers}
    ></eox-map>
    <div>
      <input type="text" id="time" value="2022-12-26" />
      <button
        @click="${() => {
          const time = document.getElementById("time").value;
          const timeControl = document.getElementById("programmatic");
          timeControl.currentStep = time;
        }}"
      >
        Go
      </button>
    </div>
    <eox-timecontrol
      id="programmatic"
      .for=${args.for}
      .layer=${args.layer}
      .controlProperty=${args.controlProperty}
      .controlValues=${args.controlValues}
      .slider=${args.slider}
    ></eox-timecontrol>
  `,
};

export default ProgrammaticTimeSelection;
