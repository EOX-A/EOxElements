export const chartTemplate = `
<style>
:host {
  font-size: small;
}
.hidden {
  visibility: hidden;
}
.loader {
  width: 20px;
  height: 20px;
  border: 2px solid #004170;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
#controls {
  position: absolute;
  width: 100%;
  max-width: 100%;
  display: none;
  gap: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}
select {
  font-size: 11px;
  padding: 3px;
}
#csvDownload {
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 7px;
  padding: 0;
  display: flex;
  align-items: center;
}
#csvDownload svg {
  width: 24px;
  height: 24px;
}
.parsingError {
  background-color: #ff6d6d;
}
#chart-container {
  width: 100%;
  height: 100%;
  position: relative;
}
#chart-container.controls {
  flex-basis: 80%;
  max-width: 80%;
  width: unset;
}
#legend-container {
  flex-basis: 20%;
  margin-top: 50px;
}
#legend-container ul {
  padding-top: 0 !important;
}
</style>
<div style="display: flex; width: 100%; height: 100%; max-width: 100%;">
  <div id="controls" class="controls" data-cy="controls">
    <div style="display: flex; align-items: center; padding: 10px;">
      <select id="dateSelect" style="margin-right: 7px;">
          <option value="month-3">3 months back</option>
          <option value="month-6">6 months back</option>
          <option value="year-1">1 year back</option>
          <option value="year-2">2 years back</option>
          <option value="year-3">3 years back</option>
          <option value="custom">custom</option>
      </select>
      <input id="startInput" size="8" style="display: none">
      <input id="endInput" size="8" style="display: none">
      <button id="setTime" style="display: none; margin-right: 7px;">ok</button>
      <select id="aggregationSelect" style="margin-right: 7px;">
          <option value="none">no aggregation</option>
          <option value="week-1">1 week</option>
          <option value="week-2">2 weeks</option>
          <option value="month-1">1 month</option>
          <option value="month-3">3 months</option>
          <option value="month-6">6 months</option>
      </select>
      <label for="normalize">normalize</label>
      <input type="checkbox" id="normalize" value="normalize" style="margin-right: 7px;">
      <label for="showMinMax">show min/max</label>
      <input type="checkbox" id="showMinMax" value="showMinMax" style="margin-right: 7px;">
      <span id="error" style="color: red; display: none;">Retrieving of signals timed out. Please try again.</span>
    </div>
    <div style="display: flex; align-items: center; padding: 10px;">
      <span id="loadingIndicator" class="loader hidden"></span>
      <button id="csvDownload" title="CSV download">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>download</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
      </button>
    </div>
  </div>
  <div id="chart-container">
    <canvas id="chart" class="chart" data-cy="chart"></canvas>
  </div>
  <div id="legend-container" style="display: none"></div>
</div>
`;
