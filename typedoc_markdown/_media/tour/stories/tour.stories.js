/**
 * Stories for the `eox-tour` component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios,
 * including basic usage, cross-iframe handoffs, and persistent state management.
 */
import {
  Primary as PrimaryStory,
  IframeHandoff as IframeHandoffStory,
  IframeHandoffAdvanced as IframeHandoffAdvancedStory,
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
 * Example demonstrating simple cross-iframe handoff logic (Single Configuration).
 *
 * The IframeHandoff story demonstrates the ability of `eox-tour`
 * to seamlessly transition between a parent window and an iframe using a simple unified configuration.
 *
 * In this "Simple" mode, the entire configuration for both the parent and the child iframe
 * is defined natively in the parent `eox-tour` component!
 *
 * **Limitations & Benefits of Simple Mode:**
 * - **Benefit:** The child iframe component requires ZERO configuration! The parent component calculates the progress totals and dispatches the corresponding step settings downward.
 * - **Benefit:** Super intuitive mapping of steps in a single array.
 * - **Limitation:** Cannot pass JavaScript functions (like \`onHighlightStarted\`, \`onNextClick\`, etc.) down into the iframe steps because \`postMessage\` serialization cannot transport functions across boundaries.
 * - **Limitation:** Can't handle extraordinarily complex internal branching flows inside the iframe natively.
 *
 * To trigger this mode, simply provide the `targetIframe` containing the CSS selector pointing
 * to the iframe element, and specify the `element` selector indicating the element to select *inside* the iframe.
 *
 * Synchronization is automatically handled via the `postMessage` API using the `id` of the
 * `eox-tour` element as a shared identifier. It is strictly required that both the inner
 * and outer eox-tour elements share the exact same `id` for handoff messages to be successfully routed.
 */
export const IframeHandoff = IframeHandoffStory;

/**
 * Advanced example demonstrating cross-iframe handoff logic (Split Configuration).
 *
 * The IframeHandoffAdvanced story demonstrates how to configure handoffs for complex scenarios where
 * custom programmatic callbacks or custom lifecycle logic must execute inside the iframe context.
 *
 * In this "Advanced" mode, the configuration is explicitly split. The parent defines its steps and
 * defines invisible "routing jumps", and the child defines its own completely decoupled steps.
 *
 * **Limitations & Benefits of Advanced Mode:**
 * - **Benefit:** Full support for `driver.js` event callbacks (`onHighlightStarted`, `onNextClick`) within iframe steps since they are defined natively alongside the iframe!
 * - **Limitation:** Tremendous cognitive overhead. `totalSteps` and visual index `stepOffset` must be manually synchronized.
 * - **Limitation:** Need heavily precise tracking of `childStepIndex`, `backwardChildStepIndex`, `returnToParent`, and `parentStepIndex` mapping properties.
 *
 * This mode is triggered automatically whenever the child `eox-tour` element *already possesses its own `steps` configuration array*! Look closely at the `childStepIndex` maps in the routing.
 */
export const IframeHandoffAdvanced = IframeHandoffAdvancedStory;

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
