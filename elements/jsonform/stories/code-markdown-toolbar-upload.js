import { html } from "lit";

export const CodeMarkdownToolbarUpload = {
  args: {
    schema: {
      type: "object",
      properties: {
        markdown: {
          type: "string",
          format: "markdown",
          options: {
            resolver: "ace",
            markdownToolbar: {
              upload: {
                endpoint: "https://httpbin.org/post",
                fieldName: "file",
              },
            },
          },
          description:
            "This is a markdown field rendered with an Ace editor and markdown toolbar with file upload support.",
        },
      },
    },
    value: {
      markdown:
        '# Markdown with Attachment Support\n\nClick the paperclip button in the toolbar to attach images (inserted as `![alt](url)`), videos (inserted as `<video src="url" controls></video>`), or other files (inserted as `[name](url)`).',
    },
  },
  render: (args) => {
    return html`
      <eox-jsonform .schema=${args.schema} .value=${args.value}></eox-jsonform>
    `;
  },
};

export default CodeMarkdownToolbarUpload;
