export const chartTemplate = `
<style>
:host {
  font-size: small;
}
.hidden {
  visibility: hidden;
}
.loader {
  position: absolute;
  top: 5px;
  right: 30px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #000;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-left: 4px solid #004170;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
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
  display: none;
  gap: 5px;
  flex-direction: row;
}
.parsingError {
  background-color: #ff6d6d;
}
#chart-container {
    width: 100%; height: 100%;
}
#chart-container.controls {
  flex-basis: 85%;
  width: unset;
}
#legend-container {
  flex-basis: 15%;
}
</style>
<div style="display: flex; width: 100%; height: 100%;">
  <div id="controls" class="controls" data-cy="controls">
    <select id="aggregationSelect">
        <option value="none">no aggregation</option>
        <option value="week-1">1 week</option>
        <option value="week-2">2 weeks</option>
        <option value="month-1">1 month</option>
        <option value="month-3">3 months</option>
        <option value="month-6">6 months</option>
    </select>
    <label for="normalize">normalize</label>
    <input type="checkbox" id="normalize" value="normalize">
    <label for="showMinMax">show min/max</label>
    <input type="checkbox" id="showMinMax" value="showMinMax">
    <button id="csvDownload">download csv</button>
    <select id="dateSelect">
        <option value="month-3">3 months back</option>
        <option value="month-6">6 months back</option>
        <option value="year-1">1 year back</option>
        <option value="year-2">2 years back</option>
        <option value="year-3">3 years back</option>
        <option value="custom">custom</option>
    </select>
    <input id="startInput" size="8" style="display: none">
    <input id="endInput" size="8" style="display: none">
    <button id="setTime" style="display: none">ok</button>
    <span id="loadingIndicator" class="loader hidden"></span>
  </div>
  <div id="chart-container">
    <canvas id="chart" class="chart" data-cy="chart"></canvas>
  </div>
  <div id="legend-container" style="display: none"></div>
</div>
`;
