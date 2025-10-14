export const style = `
:root {
  --header-background: #E0E4E6;
}
:host {
  display: block;
}
[class*=round] {
  border-radius: 0px !important;
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
  border: .0625rem solid var(--outline) !important;
  padding: 0 1.2rem;
  width: 142px;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
eox-itemfilter {
  margin: 0 0.75rem;
}
.timeslider-calendar {
  flex-grow: 1;
  margin: 0;
}
.setting-btn,
.export-btn {
  padding: 0 30px;
}
.setting-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNzA1NCAzLjAwMzI2SDEzLjcwNTRWNi4zMzY1OUgxNS4wMzg3VjMuMDAzMjZDMTUuMDM4NyAyLjI2OTkyIDE0LjQzODcgMS42Njk5MiAxMy43MDU0IDEuNjY5OTJIMS43MDU0QzAuOTcyMDcgMS42Njk5MiAwLjM3MjA3IDIuMjY5OTIgMC4zNzIwNyAzLjAwMzI2VjExLjAwMzNDMC4zNzIwNyAxMS43MzY2IDAuOTcyMDcgMTIuMzM2NiAxLjcwNTQgMTIuMzM2Nkg3LjcwNTRWMTEuMDAzM0gxLjcwNTRWMy4wMDMyNloiIGZpbGw9IiMwMDA2MEEiLz4KPHBhdGggZD0iTTkuNzA1NCA3LjAwMzI2TDUuNzA1NCA0LjMzNjU5VjkuNjY5OTJMOS43MDU0IDcuMDAzMjZaIiBmaWxsPSIjMDAwNjBBIi8+CjxwYXRoIGQ9Ik0xNC44NDU0IDExLjI4OTlDMTQuODY1NCAxMS4wOTY2IDE0Ljg3MjEgMTAuOTAzMyAxNC44NTIxIDEwLjcxNjZMMTUuNTY1NCAxMC4xNDk5QzE1LjYzMjEgMTAuMDk2NiAxNS42NDU0IDEwLjAwOTkgMTUuNjA1NCA5LjkzNjU5TDE0LjkxODcgOC43NDMyNkMxNC44Nzg3IDguNjY5OTIgMTQuNzkyMSA4LjY0MzI2IDE0LjcxMjEgOC42Njk5MkwxMy44NTg3IDkuMDAzMjZDMTMuNzA1NCA4Ljg4OTkyIDEzLjUzODcgOC43OTY1OSAxMy4zNTg3IDguNzIzMjZMMTMuMjI1NCA3LjgxNjU5QzEzLjIxMjEgNy43Mjk5MiAxMy4xNDU0IDcuNjY5OTIgMTMuMDU4NyA3LjY2OTkySDExLjY3ODdDMTEuNTk4NyA3LjY2OTkyIDExLjUyNTQgNy43Mjk5MiAxMS41MTIxIDcuODA5OTJMMTEuMzc4NyA4LjcxNjU5QzExLjIwNTQgOC43ODk5MiAxMS4wMzg3IDguODg5OTIgMTAuODg1NCA4Ljk5NjU5TDEwLjAzMjEgOC42NjMyNkM5Ljk1MjA3IDguNjI5OTIgOS44NjU0IDguNjYzMjYgOS44MjU0IDguNzM2NTlMOS4xMzg3NCA5LjkyOTkyQzkuMDk4NzQgMTAuMDAzMyA5LjExMjA3IDEwLjA4OTkgOS4xNzg3NCAxMC4xNDMzTDkuODkyMDcgMTAuNzE2NkM5Ljg3MjA3IDEwLjkwOTkgOS44NjU0IDExLjEwMzMgOS44ODU0IDExLjI4OTlMOS4xNzIwNyAxMS44NTY2QzkuMTA1NCAxMS45MDk5IDkuMDkyMDcgMTEuOTk2NiA5LjEzMjA3IDEyLjA2OTlMOS44MTg3NCAxMy4yNjMzQzkuODU4NzQgMTMuMzM2NiA5Ljk0NTQgMTMuMzYzMyAxMC4wMjU0IDEzLjMzNjZMMTAuODcyMSAxMy4wMDMzQzExLjAyNTQgMTMuMTE2NiAxMS4xOTIxIDEzLjIwOTkgMTEuMzcyMSAxMy4yODMzTDExLjUwNTQgMTQuMTg5OUMxMS41MTg3IDE0LjI2OTkgMTEuNTg1NCAxNC4zMjk5IDExLjY3MjEgMTQuMzI5OUgxMy4wNTIxQzEzLjEzMjEgMTQuMzI5OSAxMy4yMDU0IDE0LjI2OTkgMTMuMjE4NyAxNC4xODk5TDEzLjM1MjEgMTMuMjgzM0MxMy41MjU0IDEzLjIwOTkgMTMuNjkyMSAxMy4xMDk5IDEzLjg0NTQgMTMuMDAzM0wxNC42OTg3IDEzLjMzNjZDMTQuNzc4NyAxMy4zNjk5IDE0Ljg2NTQgMTMuMzM2NiAxNC45MDU0IDEzLjI2MzNMMTUuNTkyMSAxMi4wNjk5QzE1LjYzMjEgMTEuOTk2NiAxNS42MTg3IDExLjkwOTkgMTUuNTUyMSAxMS44NTY2TDE0Ljg0NTQgMTEuMjg5OVpNMTIuMzcyMSAxMi4wMDMzQzExLjgxODcgMTIuMDAzMyAxMS4zNzIxIDExLjU1NjYgMTEuMzcyMSAxMS4wMDMzQzExLjM3MjEgMTAuNDQ5OSAxMS44MTg3IDEwLjAwMzMgMTIuMzcyMSAxMC4wMDMzQzEyLjkyNTQgMTAuMDAzMyAxMy4zNzIxIDEwLjQ0OTkgMTMuMzcyMSAxMS4wMDMzQzEzLjM3MjEgMTEuNTU2NiAxMi45MjU0IDEyLjAwMzMgMTIuMzcyMSAxMi4wMDMzWiIgZmlsbD0iIzAwMDYwQSIvPgo8L3N2Zz4K)
}
.export-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OTggMTAuMDAwMVYxMi4wMDAxSDMuOTk5ODRWMTAuMDAwMUgyLjY2NjVWMTIuMDAwMUMyLjY2NjUgMTIuNzMzNCAzLjI2NjUgMTMuMzMzNCAzLjk5OTg0IDEzLjMzMzRIMTEuOTk5OEMxMi43MzMyIDEzLjMzMzQgMTMuMzMzMiAxMi43MzM0IDEzLjMzMzIgMTIuMDAwMVYxMC4wMDAxSDExLjk5OThaTTExLjMzMzIgNy4zMzM0MUwxMC4zOTMyIDYuMzkzNDFMOC42NjY1IDguMTEzNDFWMi42NjY3NUg3LjMzMzE3VjguMTEzNDFMNS42MDY1IDYuMzkzNDFMNC42NjY1IDcuMzMzNDFMNy45OTk4NCAxMC42NjY3TDExLjMzMzIgNy4zMzM0MVoiIGZpbGw9IiMwMDA2MEEiLz4KPC9zdmc+Cg==);
}
.calendar-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMi4wMDAwOEgxMi42NjY2VjAuNjY2NzQ4SDExLjMzMzNWMi4wMDAwOEg0LjY2NjU5VjAuNjY2NzQ4SDMuMzMzMjVWMi4wMDAwOEgyLjY2NjU5QzEuOTMzMjUgMi4wMDAwOCAxLjMzMzI1IDIuNjAwMDggMS4zMzMyNSAzLjMzMzQxVjE0LjAwMDFDMS4zMzMyNSAxNC43MzM0IDEuOTMzMjUgMTUuMzMzNCAyLjY2NjU5IDE1LjMzMzRIMTMuMzMzM0MxNC4wNjY2IDE1LjMzMzQgMTQuNjY2NiAxNC43MzM0IDE0LjY2NjYgMTQuMDAwMVYzLjMzMzQxQzE0LjY2NjYgMi42MDAwOCAxNC4wNjY2IDIuMDAwMDggMTMuMzMzMyAyLjAwMDA4Wk0xMy4zMzMzIDE0LjAwMDFIMi42NjY1OVY2LjY2Njc1SDEzLjMzMzNWMTQuMDAwMVpNMTMuMzMzMyA1LjMzMzQxSDIuNjY2NTlWMy4zMzM0MUgxMy4zMzMzVjUuMzMzNDFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K);
  padding-right: 10px;
}
i.icon {
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
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
  background: var(--primary) !important;
  opacity: 0.4;
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
  border-left: 3px solid var(--primary) !important;
  border-right: 3px solid var(--primary) !important;
}
.vis-custom-time.multi-select-end {
  display: none;
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
eox-itemfilter {
  width: 450px;
  background: white;
  border-radius: 6px;
}
.setting-menu-header {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.setting-menu {
  position: absolute;
  top: -200px;
  right: 0;
  width: 300px;
  padding: 1rem;
  background: white;
  border-radius: 6px;
}
.setting-btn-container {
  position: relative;
}
.setting-menu-content {
  display: flex;
  padding: 0.5rem 0px;
}
.setting-menu-content-value {
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  display: flex;
  gap: 10px;
}
.setting-menu-content-value input {
  width: 30px;
  text-align: center;
}
.setting-menu-content span {
  font-weight: 300;
}
.timeslider-export {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
.timeslider-export-overlay {
  background: #00000091;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
}
.timeslider-export-container {
  width: 90%;
  height: 90%;
  background: white;
  margin: 0 auto;
  border-radius: 6px;
  padding: 1rem;
}
.map-view {
  position: relative;
  width: 100%;
  height: calc(100% - 200px);
  border-radius: 6px;
}
.map-view-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0px;
}
.export-images {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 1rem;
  align-items: center;
}
.export-images img {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.export-images div {
  cursor: pointer;
}
.timeslider-export-play-pause {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: 100%;
  color: white;
  font-size: 3rem;
  font-weight: 800;
  cursor: pointer;
  background: #0000001a;
}
.export-images div.selected-preview img {
  border: 3px solid var(--primary);
}
.export-images div.selected-preview {
  position: relative;
}
.export-images div.selected-preview::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  opacity: 0.5;
  border-radius: 6px;
}
.timeslider-wrapper {
  position: relative;
}
.selected-map {
  z-index: 1;
}
.timeslider-export-footer {
  padding: 1rem;
  background: var(--inverse-on-surface);
  display: flex;
  align-items: center;
  justify-content: end;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
.load-wrapper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.load-wrapper,
.loader-image {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(211,211,211);
  z-index: 44;
  overflow: hidden;
}
.shimmer,
.shimmer-image {
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  animation: loading 1s infinite;
  z-index: 45;
}
.loader-image {
  width: 200px;
  height: 100px;
}

@keyframes loading {
  0%{
    left: -45%;
  }
  100%{
    left: 100%;
  }
}
`;
