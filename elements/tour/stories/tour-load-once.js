import { html } from "lit";

export const TourLoadOnce = {
  args: {},
  render: () => html`
    <div style="display: flex; gap: 10px;">
      <p>Tour already loaded.</p>
      <button
        @click=${() => {
          localStorage.removeItem("eox-tour");
          window.location.reload();
        }}
      >
        Delete stored state and load again
      </button>
    </div>
    <h1 id="title">EOX Tour</h1>
    <p id="description-1">
      EOX Tour is a web component that provides a guided tour for your web
      application.
    </p>
    <p id="description-2">
      It uses the driver.js library to create a step-by-step tour of your
      application.
    </p>
    <eox-tour
      .config=${{
        id: "tour-load-once",
        showProgress: true,
        steps: [
          {
            element: "#title",
            popover: {
              title: "Title 1 - a very long title here!",
              description:
                "Some long description with a longer text.\n With a line break as well!",
            },
          },
          {
            element: "#description-1",
            popover: { title: "Title 2", description: "Description" },
          },
          {
            element: "#description-2",
            popover: { title: "Title 3", description: "Description" },
          },
        ],
      }}
    ></eox-tour>
  `,
};

export default TourLoadOnce;
