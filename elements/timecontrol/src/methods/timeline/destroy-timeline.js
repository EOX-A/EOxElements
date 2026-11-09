/**
 * Release a timeline's listeners and timers, preserving its visible window.
 *
 * @param {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} timeline - Timeline component
 */
export default function destroyTimelineMethod(timeline) {
  clearTimeout(timeline._timelineInitTimeout);
  timeline._timelineInitTimeout = null;
  clearInterval(timeline._timelineDrawInterval);
  timeline._timelineDrawInterval = null;
  if (timeline.visTimeline) {
    timeline._timelineWindow = timeline.visTimeline.getWindow();
    timeline.visTimeline.destroy();
    timeline.visTimeline = null;
  }
}
