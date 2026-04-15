const expressMiddleWare = (router) => {
  /**
   * Redirects old "markdown-editor" story links to the new "markdown-showcase" story.
   * This handles both the main Storybook UI (via the ?path= query param)
   * and the iframe (via the ?id= query param).
   */
  router.use((req, res, next) => {
    if (req.url.includes("markdown-editor")) {
      res.redirect(req.url.replace("markdown-editor", "markdown-showcase"));
    } else {
      next();
    }
  });
};

export default expressMiddleWare;
