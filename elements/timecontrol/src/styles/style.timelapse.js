export const styleTimelapse = `
.timelapse-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
}
.timelapse-component i.icon,
.export-btn i.icon {
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
}
.setting-menu-content-value .field.border {
  margin: 0;
  padding: 0;
  margin-block-start: 0 !important;
}
.setting-menu-header {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.setting-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}
.setting-btn-container {
  position: relative;
}
.setting-menu-content {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.setting-menu-content-value {
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  display: flex;
  gap: 10px;
}
.setting-menu-content-value .field.border {
  margin: 0;
  padding: 0;
}
.setting-menu-content-value input {
  width: 50px;
  text-align: center;
  padding: 0 5px !important;
}
.setting-menu-content-value input#setting-date-range {
  width: 210px;
}
.setting-menu-content span {
  font-weight: 300;
}
.timecontrol-export {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  border-radius: 6px;
}
.timecontrol-export-overlay {
  background: #00000091;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
}
.timecontrol-export-container {
  width: 90%;
  background: white;
  margin: 0 auto;
  border-radius: 6px;
}

@media (min-width: 1300px) and (max-width: 1440px) {
  .timecontrol-export-container {
    width: 1280px;
  }
}
@media (min-width: 1441px) and (max-width: 1600px) {
  .timecontrol-export-container {
    width: 1350px;
  }
}
@media (min-width: 1601px) and (max-width: 1900px) {
  .timecontrol-export-container {
    width: 1500px;
  }
}
@media (min-width: 1901px) {
  .timecontrol-export-container {
    width: 1650px;
  }
}
.timecontrol-export-content {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.map-view {
  position: relative;
  width: 100%;
  border-radius: 6px;
  flex-grow: 1;
}
.map-view-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 6px;
  aspect-ratio: 16 / 9;
}
.export-images {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 10px;
  align-items: center;
  padding: 0px 2rem;
  aspect-ratio: 1;
}
.export-images img {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.export-images div {
  cursor: pointer;
}
.export-images span {
  position: absolute;
  top: 2px;
  right: 2px;
  padding: 0px 4px;
  background: white;
  font-weight: 500;
  font-size: 0.75rem;
  z-index: 9;
  border-radius: 2px;
}
.timecontrol-export-play-pause {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: white;
  font-size: 3rem;
  font-weight: 800;
  width: 100%;
  cursor: pointer;
  background: #0000001a;
  aspect-ratio: 16 / 9;
}
.timecontrol-export-play-pause span {
  padding: 1.5rem;
  background: #02020287;
  border-radius: 50%;
  font-size: 0px;
}
.timecontrol-export-play-pause span  i {
  width: 2.5rem !important;
  height: 2.5rem !important;  
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
.timecontrol-wrapper {
  position: relative;
}
.selected-map {
  z-index: 1;
}
.timecontrol-export-footer {
  padding: 1rem;
  background: var(--inverse-on-surface);
  display: flex;
  align-items: center;
  width: 100%;
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
.export-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OTggMTAuMDAwMVYxMi4wMDAxSDMuOTk5ODRWMTAuMDAwMUgyLjY2NjVWMTIuMDAwMUMyLjY2NjUgMTIuNzMzNCAzLjI2NjUgMTMuMzMzNCAzLjk5OTg0IDEzLjMzMzRIMTEuOTk5OEMxMi43MzMyIDEzLjMzMzQgMTMuMzMzMiAxMi43MzM0IDEzLjMzMzIgMTIuMDAwMVYxMC4wMDAxSDExLjk5OThaTTExLjMzMzIgNy4zMzM0MUwxMC4zOTMyIDYuMzkzNDFMOC42NjY1IDguMTEzNDFWMi42NjY3NUg3LjMzMzE3VjguMTEzNDFMNS42MDY1IDYuMzkzNDFMNC42NjY1IDcuMzMzNDFMNy45OTk4NCAxMC42NjY3TDExLjMzMzIgNy4zMzM0MVoiIGZpbGw9IiMwMDA2MEEiLz4KPC9zdmc+Cg==);
}
.export-icon-loading {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: none;
  position: relative;
  display: flex;
}
.export-icon-loading::after {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  margin: 1px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: var(--primary);
  border-left-color: var(--primary);
  animation: export-spin 0.9s linear infinite;
  box-sizing: border-box;
}
@keyframes export-spin {
  100% {
    transform: rotate(360deg);
  }
}
.calendar-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMi4wMDAwOEgxMi42NjY2VjAuNjY2NzQ4SDExLjMzMzNWMi4wMDAwOEg0LjY2NjU5VjAuNjY2NzQ4SDMuMzMzMjVWMi4wMDAwOEgyLjY2NjU5QzEuOTMzMjUgMi4wMDAwOCAxLjMzMzI1IDIuNjAwMDggMS4zMzMyNSAzLjMzMzQxVjE0LjAwMDFDMS4zMzMyNSAxNC43MzM0IDEuOTMzMjUgMTUuMzMzNCAyLjY2NjU5IDE1LjMzMzRIMTMuMzMzM0MxNC4wNjY2IDE1LjMzMzQgMTQuNjY2NiAxNC43MzM0IDE0LjY2NjYgMTQuMDAwMVYzLjMzMzQxQzE0LjY2NjYgMi42MDAwOCAxNC4wNjY2IDIuMDAwMDggMTMuMzMzMyAyLjAwMDA4Wk0xMy4zMzMzIDE0LjAwMDFIMi42NjY1OVY2LjY2Njc1SDEzLjMzMzNWMTQuMDAwMVpNMTMuMzMzMyA1LjMzMzQxSDIuNjY2NTlWMy4zMzM0MUgxMy4zMzMzVjUuMzMzNDFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K);
  padding-right: 10px;
}
.play-icon {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgdm13YXJlOiBodHRwczovL2dpdGh1Yi5jb20vdm13YXJlL2NsYXJpdHktYXNzZXRzIC0tPgo8c3ZnIGZpbGw9IiNmZmZmIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPnBsYXktc29saWQ8L3RpdGxlPgogICAgPHBhdGggY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMSIgZD0iTTMyLjE2LDE2LjA4LDguOTQsNC40N0EyLjA3LDIuMDcsMCwwLDAsNiw2LjMyVjI5LjUzYTIuMDYsMi4wNiwwLDAsMCwzLDEuODVMMzIuMTYsMTkuNzdhMi4wNywyLjA3LDAsMCwwLDAtMy43WiI+PC9wYXRoPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsLW9wYWNpdHk9IjAiLz4KPC9zdmc+)
}
.pause-icon {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBQRC4gTWFkZSBieSBNYXJ5IEFrdmVvOiBodHRwczovL21hcnlha3Zlby5jb20vIC0tPgo8c3ZnIGZpbGw9IiNmZmZmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9InBhdXNlIiBkYXRhLW5hbWU9IkZsYXQgQ29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9Imljb24gZmxhdC1jb2xvciI+PHBhdGggaWQ9InByaW1hcnkiIGQ9Ik0xOSw0VjIwYTIsMiwwLDAsMS0yLDJIMTVhMiwyLDAsMCwxLTItMlY0YTIsMiwwLDAsMSwyLTJoMkEyLDIsMCwwLDEsMTksNFpNOSwySDdBMiwyLDAsMCwwLDUsNFYyMGEyLDIsMCwwLDAsMiwySDlhMiwyLDAsMCwwLDItMlY0QTIsMiwwLDAsMCw5LDJaIj48L3BhdGg+PC9zdmc+)
}
`;
