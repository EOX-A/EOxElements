import { html } from "lit";

export const Primary = {
  args: {},
  render: () => html`
    <h1 id="one">EOX Tour</h1>
    <p id="two">
      EOX Tour is a web component that provides a guided tour for your web
      application.
    </p>
    <p id="three">
      It uses the driver.js library to create a step-by-step tour of your
      application.
    </p>
    <eox-tour
      show-every-time
      .config=${{
        showProgress: true,
        steps: [
          {
            element: "#one",
            popover: {
              title: "Title 1 - a very long title here!",
              description:
                "Some long description with a longer text.\n With a line break as well!",
            },
          },
          {
            element: "#two",
            popover: { title: "Title 2", description: "Description" },
          },
          {
            element: "#three",
            popover: { title: "Title 3", description: "Description" },
          },
          {
            element: "#two",
            popover: { title: "Title 2", description: "Description" },
          },
          {
            element: "#three",
            popover: { title: "Title 3", description: "Description" },
          },
          {
            element: "#two",
            popover: { title: "Title 2", description: "Description" },
          },
          {
            element: "#three",
            popover: { title: "Title 3", description: "Description" },
          },
          {
            element: "#two",
            popover: { title: "Title 2", description: "Description" },
          },
          {
            element: "#three",
            popover: { title: "Title 3", description: "Description" },
          },
          {
            element: "#two",
            popover: { title: "Title 2", description: "Description" },
          },
          {
            element: "#three",
            popover: { title: "Title 3", description: "Description" },
          },
          {
            element: "#two",
            popover: { title: "Title 2", description: "Description" },
          },
          {
            element: "#three",
            popover: { title: "Title 3", description: "Description" },
          },
        ],
      }}
    ></eox-tour>
  `,
};

export default Primary;
