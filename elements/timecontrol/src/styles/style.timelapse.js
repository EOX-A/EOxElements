export const styleTimelapse = `
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
.timeslider-export {
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
.timeslider-export-overlay {
  background: #00000091;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
}
.timeslider-export-container {
  width: 90%;
  background: white;
  margin: 0 auto;
  border-radius: 6px;
}

@media (min-width: 1300px) and (max-width: 1440px) {
  .timeslider-export-container {
    width: 1280px;
  }
}
@media (min-width: 1441px) and (max-width: 1600px) {
  .timeslider-export-container {
    width: 1350px;
  }
}
@media (min-width: 1601px) and (max-width: 1900px) {
  .timeslider-export-container {
    width: 1500px;
  }
}
@media (min-width: 1901px) {
  .timeslider-export-container {
    width: 1650px;
  }
}
.timeslider-export-content {
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
  padding: 4px;
  background: white;
  font-weight: 500;
  font-size: 0.8rem;
  z-index: 9;
  border-radius: 2px;
}
.timeslider-export-play-pause {
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
.timeslider-export-play-pause span {
  padding: 1.5rem;
  background: #02020287;
  border-radius: 50%;
  font-size: 0px;
}
.timeslider-export-play-pause span  i {
  width: 2.5rem;
  height: 2.5rem;  
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
`;
