export const styleTimeline = `
[class*=round] {
  border-radius: 0px !important;
}
.vis-timeline * {
  border-radius: 0px;
}
.timeline-wrapper {
  position: relative;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-labelset .vis-label .vis-inner {
  font-size: 12px;
}
.vis-label-hide {
  opacity: 0.4;
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
  background: var(--primary-container) !important;
  /*opacity: 0.4;*/
}
.vis-item.milestone.vis-point:hover {
  background: #ffc200 !important;
  cursor: pointer;
}
.vis-group.vis-group-hide .vis-item.milestone.vis-point,
.vis-group.vis-group-hide .vis-item.milestone.vis-point:hover {
  background: var(--primary) !important;
  opacity: 0.4 !important;
}
.vis-custom-time.multi-select-start {
  background: rgb(var(--eox-theme-light-primary), 0.4) !important;
  // border-left: 1px solid var(--primary) !important;
  // border-right: 1px solid var(--primary) !important;
}
.vis-custom-time.multi-select-end {
  // display: none;
  background: none;
}
.vis-custom-time.multi-select-start div, 
.vis-custom-time.multi-select-end div {
  width: 3px !important;
  left: 0px !important;
  background-color: var(--primary);
}
.vis-custom-time.multi-select-start div {
  cursor: w-resize;
}
.vis-custom-time.multi-select-end div {
  cursor: e-resize;
}
.vis-custom-time.multi-select-start tag, 
.vis-custom-time.multi-select-end tag {
  position: absolute;
  top: 0;
  font-size: 10px;
  width: 140px;
  text-align: center;
  background: rgba(0, 12, 20, 0.8);
  color: white;
  padding: 0 10px;
  display: none;
}
.vis-custom-time.multi-select-start tag {
  left: -140px;
} 
.vis-custom-time.multi-select-end tag {
  left: 0;
}
.vis-custom-time.multi-select-end div:hover + tag,
.vis-custom-time.multi-select-start div:hover + tag {
  display: block;
}
.vis-custom-time.multi-select-start:hover tag,
.vis-custom-time.multi-select-end:hover tag, 
.vis-custom-time.multi-select-start:hover + .vis-custom-time.multi-select-end tag,
.vis-custom-time.multi-select-end:hover + .vis-custom-time.multi-select-start tag {
  display: block;
}
.vis-text {
  font-size: 13px;
  text-transform: uppercase;
}
.vis-text.vis-major {
  color: #96938A !important;
  padding-left: 10px;
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
.vis-custom-time.selected {
  background-color: #202427 !important;
  width: 2px;
  z-index: 9;
}
.vis-custom-time-selected {
  background: #111 !important;
  width: 2px;
}

`;
