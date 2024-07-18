/**
 * Generates a story configuration for external search.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function ExternalStory() {
  return {
    args: {
      config: {
        titleProperty: "title",
        externalFilter: (_, filters) => {
          return `https://jsonplaceholder.typicode.com/todos?${Object.keys(
            filters.completed.state
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
            filterKeys: ["true", "false"],
            state: {
              true: true,
            },
          },
          {
            key: "userId",
            title: "User ID",
            type: "multiselect",
            expanded: true,
            filterKeys: ["1", "2", "3"],
          },
        ],
      },
    },
  };
}

export default ExternalStory;
