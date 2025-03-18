export const FALLBACK_SCHEMA = {
  type: "object",
  properties: {
    fallback: {
      format: "info",
      title: "No schema provided",
      description:
        "Pass a schema to <code>eox-jsonform</code> via the <code>schema</code> property",
    },
  },
};
