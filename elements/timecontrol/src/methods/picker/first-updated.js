import { injectCalendarStyles } from "../../helpers";

/**
 * First updated lifecycle method for timecontrol picker
 *
 * @param {Object} EOxTimeControlPicker - The timecontrol picker EOxTimeControlPicker instance
 */
export default function firstUpdatedMethod(EOxTimeControlPicker) {
  injectCalendarStyles();
}
