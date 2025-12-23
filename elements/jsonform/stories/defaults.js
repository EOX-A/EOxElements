import { html } from "lit";

/**
 * Demonstration of using the `defaults` property to configure JSONEditor defaults,
 * specifically implementing a custom upload handler.
 */
export default {
  args: {
    schema: {
      type: "object",
      title: "Upload Example",
      properties: {
        upload_default: {
          type: "string",
          format: "url",
          options: {
            upload: {
              upload_handler: "testUploadHandler",
            },
          },
          links: [
            {
              href: "{{self}}",
            },
          ],
        },
        upload_custom_link: {
          type: "string",
          format: "url",
          options: {
            upload: {
              upload_handler: "testUploadHandler",
            },
          },
          links: [
            {
              href: "{{self}}",
              rel: "view",
            },
          ],
        },
        upload_readonly: {
          readonly: true,
          type: "string",
          format: "url",
          options: {
            upload: {
              upload_handler: "testUploadHandler",
            },
          },
          links: [
            {
              href: "{{self}}",
            },
          ],
        },
        upload_fail: {
          type: "string",
          format: "url",
          options: {
            upload: {
              upload_handler: "testUploadHandler",
            },
          },
          links: [
            {
              href: "{{self}}",
            },
          ],
        },
      },
    },
    submit: (e) => console.log(e.detail),
    defaults: {
      callbacks: {
        upload: {
          testUploadHandler: function (jseditor, type, file, cbs) {
            if (type === "root.upload_fail") cbs.failure("Upload failed");
            else {
              var tick = 0;

              var tickFunction = function () {
                tick += 1;
                console.log("progress: " + tick);

                if (tick < 100) {
                  cbs.updateProgress(tick);
                  window.setTimeout(tickFunction, 50);
                } else if (tick == 100) {
                  cbs.updateProgress();
                  window.setTimeout(tickFunction, 500);
                } else {
                  cbs.success("http://www.example.com/images/" + file.name);
                }
              };

              window.setTimeout(tickFunction);
            }
          },
        },
      },
    },
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .defaults=${args.defaults}
      @submit=${args.submit}
    ></eox-jsonform>
  `,
};
