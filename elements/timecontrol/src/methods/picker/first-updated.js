import { injectCalendarStyles } from "../../helpers";

/**
 * First updated lifecycle method for the timecontrol picker component.
 * Injects the necessary calendar styles into the document head when the picker component is first rendered.
 *
 * This method should be called during the component's firstUpdated lifecycle hook to ensure
 * that the vanilla-calendar-pro styles are available before the calendar is initialized.
 */
export default function firstUpdatedMethod() {
  injectCalendarStyles();
}
