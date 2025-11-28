import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const ProgrammaticTimeSelection = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#programmatic-time-selection",
    slider: true,
    navigation: false,
    play: false,
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
      <nav>
        <div class="field border">
          <input type="text" id="time" value="2022-12-26" />
        </div>
        <button
          @click=${() => {
            const time = document.getElementById("time").value;
            const timeControl = document.getElementById("programmatic");
            timeControl.currentStep = time;
          }}
        >
          Go
        </button>
      </nav>
    </div>
    <eox-timecontrol-2
      id="programmatic"
      .for=${args.for}
      .layer=${args.layer}
      .controlProperty=${args.controlProperty}
      .controlValues=${args.controlValues}
      .navigation=${args.navigation}
      .play=${args.play}
      .slider=${args.slider}
      style="margin-top: 8px"
    ></eox-timecontrol-2>
  `,
};

export default ProgrammaticTimeSelection;
