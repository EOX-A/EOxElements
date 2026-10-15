import getStepDateMethod from "./get-step-date.js";
import selectStepMethod from "./select-step.js";

/**
 * Applies an available navigation step to the parent timecontrol.
 *
 * @param {number} step - Number of steps to move.
 * @param {import("../../components/timecontrol-date.js").EOxTimeControlDate} EOxTimeControlDate - The date component instance.
 * @returns {void}
 */
export default function updateStepMethod(step, EOxTimeControlDate) {
  const nextDate = getStepDateMethod(step, EOxTimeControlDate);
  if (nextDate === undefined) return;

  selectStepMethod(nextDate, EOxTimeControlDate);
}
