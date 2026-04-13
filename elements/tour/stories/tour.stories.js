/**
 * Stories for the `eox-tour` component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios,
 * including basic usage, cross-iframe handoffs, and persistent state management.
 */
import {
  Primary as PrimaryStory,
  IframeHandoff as IframeHandoffStory,
  ShowEveryTime as ShowEveryTimeStory,
} from "./index";

export default {
  title: "Elements/eox-tour",
  tags: ["autodocs"],
  component: "eox-tour",
};

/**
 * Basic tour example.
 *
 * The Primary story demonstrates the basic usage of the `eox-tour` element.
 * It shows how to define a simple tour with steps targeting DOM elements
 * by their CSS selectors.
 *
 * Each step in the `config.steps` array defines:
 * - `element`: A CSS selector for the target element.
 * - `popover`: Configuration for the popover (title, description, side, align).
 *
 * ```html
 * <div id="tour-target-1">Target 1</div>
 * <div id="tour-target-2">Target 2</div>
 *
 * <eox-tour
 *   id="primary-tour"
 *   .config=${{
 *     steps: [
 *       {
 *         element: "#tour-target-1",
 *         popover: { title: "Step 1", description: "First step." }
 *       },
 *       {
 *         element: "#tour-target-2",
 *         popover: { title: "Step 2", description: "Second step." }
 *       }
 *     ]
 *   }}
 * ></eox-tour>
 * ```
 */
export const Primary = PrimaryStory;

/**
 * Advanced example demonstrating cross-iframe handoff logic.
 *
 * The IframeHandoff story demonstrates the advanced ability of `eox-tour`
 * to seamlessly transition between a parent window and an iframe.
 *
 * This example uses:
 * - `targetIframe`: Specifies the CSS selector of the iframe to hand off to.
 * - `childStepIndex`: Indicates which step index to start within the child iframe.
 * - `returnToParent`: When a step inside the child iframe is finished, it can trigger
 *   control back to the parent window.
 * - `parentStepIndex`: Specifies which step to resume in the parent window.
 *
 * Synchronization is handled via the `postMessage` API using the `id` of the
 * `eox-tour` element as a shared identifier. It is strictly required that both the inner
 * and outer eox-tour elements share the exact same `id` for handoff messages to be successfully routed.
 *
 * ```html
 * <!-- Inside parent container -->
 * <div id="parent-step-1">Parent Step 1</div>
 * <iframe id="my-iframe" src="..."></iframe>
 * <div id="parent-step-2">Parent Step 2</div>
 *
 * <eox-tour
 *   id="handoff-tour"
 *   .config=${{
 *     steps: [
 *       { element: "#parent-step-1", popover: { title: "Start", description: "Parent context" } },
 *       {
 *         element: "#my-iframe",
 *         popover: {
 *           title: "Handoff",
 *           description: "Going into iframe",
 *           targetIframe: "#my-iframe",
 *           childStepIndex: 0
 *         }
 *       },
 *       { element: "#parent-step-2", popover: { title: "Resume", description: "Back in parent" } }
 *     ]
 *   }}
 * ></eox-tour>
 *
 * <!-- Inside the iframe child -->
 * <div id="child-step">Child Step</div>
 * <eox-tour
 *   id="handoff-tour"
 *   prevent-auto-start
 *   .config=${{
 *     totalSteps: 3,
 *     stepOffset: 1,
 *     steps: [
 *       {
 *         element: "#child-step",
 *         popover: {
 *           title: "Child Step",
 *           description: "Inside the iframe",
 *           returnToParent: true,
 *           parentStepIndex: 2
 *         }
 *       }
 *     ]
 *   }}
 * ></eox-tour>
 * ```
 */
export const IframeHandoff = IframeHandoffStory;

/**
 * Example demonstrating how to bypass localStorage.
 *
 * The ShowEveryTime story illustrates the difference between persistent and
 * non-persistent tours.
 *
 * When the `show-every-time` attribute is set, the tour ignores the
 * `localStorage` key (usually used to prevent showing the same tour multiple times)
 * and starts automatically every time the component is mounted. This is useful for
 * testing or for critical information that should be shown on every visit.
 *
 * ```html
 * <div id="target-always">Always Visible</div>
 *
 * <eox-tour
 *   id="always-tour"
 *   show-every-time
 *   .config=${{
 *     steps: [
 *       {
 *         element: "#target-always",
 *         popover: { title: "Persistent Tour", description: "Starts every time." }
 *       }
 *     ]
 *   }}
 * ></eox-tour>
 * ```
 */
export const ShowEveryTime = ShowEveryTimeStory;
