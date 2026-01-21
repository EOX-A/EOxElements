import { html } from "lit";

/**
 * Generates a story configuration for external search.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function ExternalStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .titleProperty=${args.titleProperty}
        .externalFilter=${args.externalFilter}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
    args: {
      titleProperty: "title",
      externalFilter: (_, filters) => {
        return `https://jsonplaceholder.typicode.com/todos?${Object.keys(
          filters.completed.state,
        )
          .filter((k) => !!filters.completed.state[k])
          .map((id) => `completed=${id}`)
          .join("&")}&${Object.keys(filters.userId.state)
          .filter((k) => !!filters.userId.state[k])
          .map((id) => `userId=${id}`)
          .join("&")}`;
      },
      filterProperties: [
        {
          key: "completed",
          title: "Completed",
          type: "multiselect",
          expanded: true,
          filterKeys: [true, false],
          state: {
            true: true,
          },
        },
        {
          key: "userId",
          title: "User ID",
          type: "multiselect",
          expanded: true,
          filterKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      ],
    },
  };
}

export default ExternalStory;

/**
 * Generates a story configuration for external search using a custom fetch function.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
export function ExternalFetchFnStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .titleProperty=${args.titleProperty}
        .externalFilter=${args.externalFilter}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
    args: {
      titleProperty: "title",
      externalFilter: (_, filters) => {
        const url = `https://jsonplaceholder.typicode.com/todos?${Object.keys(
          filters.completed.state,
        )
          .filter((k) => !!filters.completed.state[k])
          .map((id) => `completed=${id}`)
          .join("&")}&${Object.keys(filters.userId.state)
          .filter((k) => !!filters.userId.state[k])
          .map((id) => `userId=${id}`)
          .join("&")}`;
        return {
          url,
          fetchFn: async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            // Custom logic: only return the first 5 results
            return data.slice(0, 5);
          },
        };
      },
      filterProperties: [
        {
          key: "completed",
          title: "Completed",
          type: "multiselect",
          expanded: true,
          filterKeys: [true, false],
          state: {
            true: true,
          },
        },
        {
          key: "userId",
          title: "User ID",
          type: "multiselect",
          expanded: true,
          filterKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      ],
    },
  };
}
