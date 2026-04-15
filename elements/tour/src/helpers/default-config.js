export const defaultConfig = {
  onPopoverRender: (popover, { config, state }) => {
    popover.wrapper.classList.add("padding");
    if (popover.previousButton) {
      popover.previousButton.innerHTML = `
        <span style="pointer-events: none">${config.prevBtnText || "Previous"}</span>
      `;
      popover.previousButton.style.display = config.showButtons?.includes(
        "previous",
      )
        ? "flex"
        : "none";
      popover.previousButton.classList.add(
        "small",
        "small-text",
        "transparent",
        "primary-text",
      );
    }
    if (popover.nextButton) {
      const step = config.steps[state.activeIndex];
      const isLastStep =
        state.activeIndex === config.steps.length - 1 &&
        !step.popover?.targetIframe &&
        !step.popover?.returnToParent &&
        (!config.totalSteps ||
          state.activeIndex + 1 + (config.stepOffset || 0) >=
            config.totalSteps);
      popover.nextButton.innerHTML = `
        <span style="pointer-events: none">${isLastStep ? config.doneBtnText || "Done" : config.nextBtnText || "Next"}</span>
        <i style="pointer-events: none" class="icon small">
          ${isLastStep ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-right</title><path d="M10,17L15,12L10,7V17Z" /></svg>`}
        </i>
      `;
      popover.nextButton.style.display = config.showButtons?.includes("next")
        ? "flex"
        : "none";
      popover.nextButton.classList.add("small", "small-text");
    }
    if (popover.closeButton) {
      popover.closeButton.innerHTML = `
        <i style="pointer-events: none" class="icon small">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
        </i>
      `;
      popover.closeButton.style.display = config.showButtons?.includes("close")
        ? "flex"
        : "none";
      popover.closeButton.classList.add(
        "transparent",
        "circle",
        "small",
        "absolute",
        "top",
        "right",
        "small-margin",
      );
    }
    if (popover.progress) {
      popover.progress.style.display = config.showProgress ? "flex" : "none";
      popover.progress.style.alignItems = "center";
      popover.progress.classList.add("small-text");
    }
    if (popover.footerButtons && popover.footerButtons.parentElement) {
      const nav = document.createElement("nav");
      nav.style.display = "flex";
      nav.style.alignItems = "center";
      nav.style.marginLeft = "auto";
      while (popover.footerButtons.firstChild) {
        nav.appendChild(popover.footerButtons.firstChild);
      }
      popover.footerButtons.parentElement.replaceChild(
        nav,
        popover.footerButtons,
      );
      popover.footerButtons = nav;
    }
    if (popover.title && popover.title.parentElement) {
      const title = document.createElement("h6");
      title.innerHTML = popover.title.innerHTML;
      popover.title.parentElement.replaceChild(title, popover.title);
      title.classList.add("small");
    }
  },
};
