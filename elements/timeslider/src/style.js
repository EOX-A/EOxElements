export const style = `
:host {
  display: block;
}
.vis-item.task {
  background: var(--primary);
  border: none;
  border-radius: 8px;
  height: 14px;
}
.vis-item.task:hover {
  background: var(--primary-container);
}
.vis-item.milestone {
  background: var(--dot);
  border: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.vis-item .vis-item-content {
  display: none;
}
.vis-current-time {
  background-color: var(--now) !important;
  width: 2px;
}
.vis-custom-time {
  background-color: var(--selected) !important;
  width: 2px;
}
.vis-custom-time-selected {
  background: #111 !important;
  width: 2px;
}
`;
