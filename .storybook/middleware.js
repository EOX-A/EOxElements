const expressMiddleWare = (router) => {
  /**
   * Redirects old "markdown-editor" story links to the new "markdown-showcase" story.
   * This handles both the main Storybook UI (via the ?path= query param)
   * and the iframe (via the ?id= query param).
   *
   * We use res.writeHead/res.end instead of res.redirect because in some
   * Storybook environments res.redirect might not be available.
   */
  router.use((req, res, next) => {
    if (
      req.url.includes("markdown-editor") ||
      req.url.includes("markdown-with-editor")
    ) {
      const newUrl = req.url
        .replace("markdown-editor", "markdown-showcase")
        .replace("markdown-with-editor", "markdown-showcase");
      res.writeHead(301, { Location: newUrl });
      res.end();
    } else {
      next();
    }
  });
};

export default expressMiddleWare;
