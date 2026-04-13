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

  const finalConfig = {
    ...defaultConfig,
    ...EOxTour.config,
    onNextClick: (element, step, opts) => {
      if (EOxTour.config.onNextClick) {
        EOxTour.config.onNextClick(element, step, opts);
      }
      const activeIndex = opts.driver.getActiveIndex() ?? 0;
      const nextStep = opts.config.steps[activeIndex + 1];

      if (nextStep && nextStep.popover?.targetIframe) {
        const iframe = document.querySelector(nextStep.popover.targetIframe);
        if (iframe && iframe.contentWindow) {
          opts.driver.moveNext();
          iframe.contentWindow.postMessage(
            {
              type: "EOX_TOUR_HANDOFF",
              tourId: EOxTour.id,
              childStepIndex: nextStep.popover.childStepIndex || 0,
            },
            "*",
          );
        }
      } else if (step.popover?.returnToParent) {
        opts.driver.destroy();
        window.parent.postMessage(
          {
            type: "EOX_TOUR_RESUME",
            tourId: EOxTour.id,
            parentStepIndex: step.popover.parentStepIndex || 0,
          },
          "*",
        );
      } else if (!nextStep) {
        opts.driver.destroy();
      } else {
        opts.driver.moveNext();
      }
    },
    onPrevClick: (element, step, opts) => {
      if (EOxTour.config.onPrevClick) {
        EOxTour.config.onPrevClick(element, step, opts);
      }
      const activeIndex = opts.driver.getActiveIndex() ?? 0;
      const prevStep = opts.config.steps[activeIndex - 1];

      if (prevStep && prevStep.popover?.targetIframe) {
        const iframe = document.querySelector(prevStep.popover.targetIframe);
        if (iframe && iframe.contentWindow) {
          opts.driver.movePrevious();
          iframe.contentWindow.postMessage(
            {
              type: "EOX_TOUR_HANDOFF",
              tourId: EOxTour.id,
              childStepIndex:
                prevStep.popover.backwardChildStepIndex !== undefined
                  ? prevStep.popover.backwardChildStepIndex
                  : -1,
            },
            "*",
          );
        }
      } else if (step.popover?.returnToParentBackward) {
        opts.driver.destroy();
        window.parent.postMessage(
          {
            type: "EOX_TOUR_RESUME",
            tourId: EOxTour.id,
            parentStepIndex: step.popover.backwardParentStepIndex || 0,
          },
          "*",
        );
      } else if (
        activeIndex === 0 &&
        window.parent !== window &&
        step.popover?.backwardParentStepIndex !== undefined
      ) {
        opts.driver.destroy();
        window.parent.postMessage(
          {
            type: "EOX_TOUR_RESUME",
            tourId: EOxTour.id,
            parentStepIndex: step.popover.backwardParentStepIndex,
          },
          "*",
        );
      } else {
        opts.driver.movePrevious();
      }
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
      if (step.popover?.targetIframe) {
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
      defaultConfig.onPopoverRender(popover, ctx);
      const activeIndex = ctx.state.activeIndex ?? 0;
      const currentStep = ctx.config.steps[activeIndex];
      if (currentStep?.popover?.targetIframe)
        popover.wrapper.style.display = "none";
      if (popover.previousButton && activeIndex === 0) {
        if (
          currentStep?.popover?.returnToParentBackward ||
          (window.parent !== window &&
            currentStep?.popover?.backwardParentStepIndex !== undefined)
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
          EOxTour.config.totalSteps !== undefined)
      ) {
        const offset = EOxTour.config.stepOffset || 0;
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
