import { driver } from "driver.js";
import { defaultConfig } from "../../helpers/default-config.js";
import { showTourOrNot } from "./show-tour.js";

/**
 * @param {import("../../main").EOxTour} EOxTour
 */
export function initializeDriver(EOxTour) {
  if (EOxTour.driver) {
    EOxTour.driver.destroy();
  }

  const getTargetIframe = (step) =>
    step?.targetIframe || step?.popover?.targetIframe;

  const handleStepChange = (targetStep, targetIndex, action, opts) => {
    if (!targetStep) {
      const activeIndex = opts.driver.getActiveIndex() ?? 0;
      const currentStep = opts.config.steps[activeIndex] || {};
      const isBackward = action === "movePrevious";

      if (window.parent !== window) {
        const wantsReturn =
          (!isBackward && currentStep.popover?.returnToParent) ||
          (isBackward && currentStep.popover?.returnToParentBackward);

        if (wantsReturn) {
          opts.driver.destroy();
          let resolvedParentIndex = isBackward
            ? currentStep.popover?.backwardParentStepIndex
            : currentStep.popover?.parentStepIndex;

          window.parent.postMessage(
            {
              type: "EOX_TOUR_RESUME",
              tourId: EOxTour.id,
              stepIndex: resolvedParentIndex,
            },
            "*",
          );
          return;
        }
      }

      opts.driver.destroy();
      return;
    }

    const activeIndex = opts.driver.getActiveIndex() ?? 0;
    const currentStep = opts.config.steps[activeIndex] || {};

    const currentTargetIframe = getTargetIframe(currentStep);
    const nextTargetIframe = getTargetIframe(targetStep);

    // determine if we are the "parent" of the handoff or the "child".
    // We can't rely purely on window.parent because in Storybook, everything is in an iframe.
    // Instead, we check if there's a targetIframe and we can actually query it in our own document.
    let isParentOfTarget = false;
    if (nextTargetIframe) {
      const el = document.querySelector(nextTargetIframe);
      if (el && el.tagName === "IFRAME") {
        isParentOfTarget = true;
      }
    }

    if (isParentOfTarget) {
      if (nextTargetIframe && nextTargetIframe !== currentTargetIframe) {
        // Parent transitioning to iframe
        const iframe = document.querySelector(nextTargetIframe);
        if (iframe && iframe.contentWindow) {
          opts.driver[action]();
          const sanitizedConfig = JSON.parse(JSON.stringify(EOxTour.config));

          // Resolve step index based on action and advanced backward/forward properties
          let resolvedChildIndex = targetIndex;
          if (
            action === "movePrevious" &&
            currentStep.popover?.backwardChildStepIndex !== undefined
          ) {
            resolvedChildIndex = currentStep.popover.backwardChildStepIndex;
          } else if (targetStep.popover?.childStepIndex !== undefined) {
            resolvedChildIndex = targetStep.popover.childStepIndex;
          } else if (targetStep.childStepIndex !== undefined) {
            resolvedChildIndex = targetStep.childStepIndex;
          }

          iframe.contentWindow.postMessage(
            {
              type: "EOX_TOUR_HANDOFF",
              tourId: EOxTour.id,
              config: sanitizedConfig,
              stepIndex: resolvedChildIndex,
            },
            "*",
          );
        } else {
          console.warn(
            `[eox-tour] Parent cannot navigate over iframe handoff: Iframe ${nextTargetIframe} not found.`,
          );
          opts.driver[action]();
        }
      } else {
        opts.driver[action]();
      }
    } else {
      // Inside iframe
      if (nextTargetIframe === currentTargetIframe) {
        opts.driver[action]();
      } else {
        // Iframe transitioning back to parent or different iframe
        opts.driver.destroy();

        let resolvedParentIndex = targetIndex;
        if (
          action === "movePrevious" &&
          currentStep.popover?.backwardParentStepIndex !== undefined
        ) {
          resolvedParentIndex = currentStep.popover.backwardParentStepIndex;
        } else if (currentStep.popover?.parentStepIndex !== undefined) {
          resolvedParentIndex = currentStep.popover.parentStepIndex;
        }

        window.parent.postMessage(
          {
            type: "EOX_TOUR_RESUME",
            tourId: EOxTour.id,
            stepIndex: resolvedParentIndex,
          },
          "*",
        );
      }
    }
  };

  const finalConfig = {
    ...defaultConfig,
    ...EOxTour.config,
    steps:
      EOxTour.config.steps?.map((step) => {
        const targetIframe = getTargetIframe(step);
        if (targetIframe) {
          return {
            ...step,
            get element() {
              const el = document.querySelector(targetIframe);
              if (el && el.tagName.toLowerCase() === "iframe") {
                return targetIframe;
              }
              return step.element;
            },
          };
        }
        return step;
      }) || [],
    onNextClick: (element, step, opts) => {
      if (EOxTour.config.onNextClick) {
        EOxTour.config.onNextClick(element, step, opts);
      }
      const activeIndex = opts.driver.getActiveIndex() ?? 0;
      handleStepChange(
        opts.config.steps[activeIndex + 1],
        activeIndex + 1,
        "moveNext",
        opts,
      );
    },
    onPrevClick: (element, step, opts) => {
      if (EOxTour.config.onPrevClick) {
        EOxTour.config.onPrevClick(element, step, opts);
      }
      const activeIndex = opts.driver.getActiveIndex() ?? 0;
      handleStepChange(
        opts.config.steps[activeIndex - 1],
        activeIndex - 1,
        "movePrevious",
        opts,
      );
    },
    onCloseClick: (element, step, opts) => {
      if (EOxTour.config.onCloseClick) {
        EOxTour.config.onCloseClick(element, step, opts);
      }
      opts.driver.destroy();
      if (window.parent !== window) {
        window.parent.postMessage(
          { type: "EOX_TOUR_DESTROY", tourId: EOxTour.id },
          "*",
        );
      }
    },
    onHighlightStarted: (element, step, options) => {
      const targetIframe = getTargetIframe(step);
      let isParentOfTarget = false;
      if (targetIframe) {
        const el = document.querySelector(targetIframe);
        if (el && el.tagName === "IFRAME") isParentOfTarget = true;
      }

      if (isParentOfTarget) {
        options.driver.setConfig({
          ...options.config,
          stagePadding: 0,
          stageRadius: 0,
        });
      } else {
        options.driver.setConfig({
          ...options.config,
          stagePadding: EOxTour.config.stagePadding ?? 10,
          stageRadius: EOxTour.config.stageRadius ?? 5,
        });
      }
      EOxTour.dispatchEvent(
        new CustomEvent("tour-highlight-started", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        }),
      );
      if (EOxTour.config.onHighlightStarted)
        EOxTour.config.onHighlightStarted(element, step, options);
    },
    onHighlighted: (element, step, options) => {
      EOxTour.dispatchEvent(
        new CustomEvent("tour-highlighted", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        }),
      );
      if (EOxTour.config.onHighlighted)
        EOxTour.config.onHighlighted(element, step, options);
    },
    onDeselected: (element, step, options) => {
      EOxTour.dispatchEvent(
        new CustomEvent("tour-deselected", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        }),
      );
      if (EOxTour.config.onDeselected)
        EOxTour.config.onDeselected(element, step, options);
    },
    onDestroyStarted: (element, step, options) => {
      EOxTour.dispatchEvent(
        new CustomEvent("tour-destroy-started", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        }),
      );
      if (EOxTour.config.onDestroyStarted)
        EOxTour.config.onDestroyStarted(element, step, options);
    },
    onPopoverRender: (popover, ctx) => {
      if (defaultConfig.onPopoverRender)
        defaultConfig.onPopoverRender(popover, ctx);
      const activeIndex = ctx.state.activeIndex ?? 0;
      const currentStep = ctx.config.steps[activeIndex];

      const targetIframe = getTargetIframe(currentStep);
      let isParentOfTarget = false;
      if (targetIframe) {
        const el = document.querySelector(targetIframe);
        if (el && el.tagName === "IFRAME") isParentOfTarget = true;
      }

      if (isParentOfTarget && popover.wrapper) {
        popover.wrapper.style.display = "none";
      }

      if (popover.previousButton && activeIndex === 0) {
        if (
          currentStep?.popover?.returnToParentBackward ||
          (window.parent !== window &&
            currentStep?.popover?.backwardParentStepIndex !== undefined) ||
          (window.parent !== window && EOxTour.config.steps.length > 0)
        ) {
          popover.previousButton.disabled = false;
          popover.previousButton.classList.remove(
            "driver-popover-btn-disabled",
          );
        }
      }
      if (
        popover.progress &&
        (EOxTour.config.stepOffset !== undefined ||
          EOxTour.config.totalSteps !== undefined ||
          currentStep?.popover?.stepOffset !== undefined)
      ) {
        const offset =
          currentStep?.popover?.stepOffset ?? EOxTour.config.stepOffset ?? 0;
        const total = EOxTour.config.totalSteps || ctx.config.steps.length;
        const current = activeIndex + 1 + offset;
        popover.progress.innerText = `${current} of ${total}`;
      }
      if (EOxTour.config.onPopoverRender)
        EOxTour.config.onPopoverRender(popover, ctx);
    },
  };

  EOxTour.driver = driver(finalConfig);
  showTourOrNot(EOxTour);
}
