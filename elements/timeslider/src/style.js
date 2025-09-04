export const style = `
:root {
  --header-background: #E0E4E6;
}
:host {
  display: block;
}
.vis-timeline * {
  border-radius: 0px;
}
.timeslider-header {
  padding: 8px;
  background: var(--inverse-on-surface);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.timeslider-header .field.border {
  margin-bottom: 0;
  border-radius: 6px;
}
.timeslider-header .field.border input {
  background: white;
  border-color: var(--outline-variant);
  border-width: 2px;
}
.vis-item.task {
  background: var(--primary);
  border: none;
  border-radius: 0px !important;
  height: 14px;
}
.vis-labelset .vis-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vis-labelset .vis-label .vis-inner {
  font-weight: 700;
  padding: 15px;
}
.vis-custom-time-selected-label {
  padding: 5px;
  border-radius: 0px !important;
  background:rgba(0, 12, 20, 0.8);
  color: white;
  font-weight: 700;
  font-size: 12px;
  width: 120px !important;
  height: auto !important;
  left: -60px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-foreground .vis-group {
  border-radius: 0px;
}
.vis-item.task:hover {
  background: var(--primary-container);
}
.vis-item.milestone.vis-dot {
  display: none;
}
.vis-item.milestone.vis-point {
  background: var(--primary) !important;
  border: none;
  width: 14px;
  height: 14px;
  border-radius: 0px !important;
}
.vis-item.milestone.vis-point.vis-selected-item {
  background: #ffc200 !important;
}
.vis-item.milestone.vis-point.vis-not-filtered {
  background: var(--primary) !important;
  opacity: 0.4;
}
.vis-item.milestone.vis-point:hover {
  background: #ffc200 !important;
  cursor: pointer;
}
.vis-text {
  font-size: 13px;
  text-transform: uppercase;
}
.vis-text.vis-major {
  color: #96938A !important;
  margin-left: -8px;
  background: white;
}
.vis-text.vis-minor {
  margin-left: -8px;
  background: white;
}
.vis-item .vis-item-content {
  display: none;
}
.vis-current-time {
  background-color: var(--now) !important;
  width: 2px;
}
.vis-custom-time {
  background-color: #202427 !important;
  width: 2px;
}
.vis-custom-time-selected {
  background: #111 !important;
  width: 2px;
}
eox-itemfilter {
  width: 450px;
  background: white;
  border-radius: 6px;
}
`;
