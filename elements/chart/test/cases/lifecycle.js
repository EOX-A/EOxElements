import { renderChartMethod } from "../../src/methods/render";
import { TEST_VALUES } from "../../src/enums";

export const mountLifecycleChart = () => {
  cy.mount('<eox-chart style="width: 300px; height: 300px"></eox-chart>');
  cy.get("eox-chart").then(([chart]) => {
    chart.spec = TEST_VALUES.chartSpec;
  });
  cy.get("eox-chart").should(([chart]) => {
    expect(chart._embedResult).not.to.equal(null);
  });
};

export const disposeChartTest = () => {
  cy.get("eox-chart").then(([chart]) => {
    const first = chart._embedResult;
    const finalizeFirst = cy.spy(first, "finalize");
    return renderChartMethod(chart, TEST_VALUES.chartSpec, {}).then(() => {
      expect(finalizeFirst).to.have.been.calledOnce;
      expect(chart._vegaView).not.to.equal(first.view);
      const finalizeSecond = cy.spy(chart._embedResult, "finalize");
      chart._disposeChart();
      expect(finalizeSecond).to.have.been.calledOnce;
      expect(chart._embedResult).to.equal(null);
      expect(chart._vegaView).to.equal(null);
      chart.disconnectedCallback();
      expect(finalizeFirst).to.have.been.calledOnce;
      expect(finalizeSecond).to.have.been.calledOnce;
    });
  });
};

export const reconnectChartTest = () => {
  let initialView;
  cy.get("eox-chart").then(([chart]) => {
    initialView = chart._vegaView;
    const parent = chart.parentElement;
    const observer = chart._resizeObserver;
    const observe = cy.spy(observer, "observe");
    const disconnect = cy.spy(observer, "disconnect");
    cy.spy(chart.renderRoot.querySelector("#vis"), "addEventListener").as(
      "delegatedListeners",
    );
    for (let cycle = 0; cycle < 2; cycle++) {
      chart.remove();
      parent.append(chart);
    }
    expect(disconnect).to.have.been.calledTwice;
    expect(observe).to.have.callCount(4);
    expect(chart._resizeObserver).to.equal(observer);
  });
  cy.get("eox-chart").should(([chart]) => {
    expect(chart._vegaView).not.to.equal(null);
    expect(chart._vegaView).to.equal(initialView);
  });
  cy.get("@delegatedListeners").should("not.have.been.called");
  cy.get("eox-chart").then(([chart]) => {
    const activities = cy.spy();
    chart.addEventListener("eox:activity", activities);
    const container = chart.renderRoot.querySelector("#vis");
    const actions = document.createElement("div");
    actions.className = "vega-actions";
    actions.innerHTML = '<a href="#">Save</a>';
    const bindings = document.createElement("div");
    bindings.className = "vega-bindings";
    bindings.innerHTML = '<input name="threshold" value="5">';
    container.append(actions, bindings);
    actions
      .querySelector("a")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    bindings
      .querySelector("input")
      .dispatchEvent(new Event("change", { bubbles: true }));
    expect(activities).to.have.been.calledTwice;
  });
  cy.get("eox-chart").invoke("attr", "style", "width: 500px; height: 500px");
  cy.get("eox-chart")
    .shadow()
    .find("canvas")
    .should("have.css", "height", "500px");
};

/** Delay an embed before it initializes its view and DOM. */
const pendingEmbed = (chart) => {
  let resolveConfig;
  const config = new Promise((resolve) => {
    resolveConfig = resolve;
  });
  const load = cy.stub().returns(config);
  const promise = renderChartMethod(chart, TEST_VALUES.chartSpec, {
    config: "delayed-config.json",
    actions: true,
    defaultStyle: true,
    loader: { load, sanitize: (uri) => Promise.resolve({ href: uri }) },
  });
  return { promise, resolve: () => resolveConfig("{}"), load };
};

export const staleChartTest = () => {
  cy.get("eox-chart").then(async ([chart]) => {
    const addListener = cy.spy(chart.ownerDocument, "addEventListener");
    const removeListener = cy.spy(chart.ownerDocument, "removeEventListener");
    const finalizeView = cy.spy(
      Object.getPrototypeOf(chart._vegaView),
      "finalize",
    );
    const pending = pendingEmbed(chart);
    await renderChartMethod(chart, TEST_VALUES.chartSpec, {});
    const current = chart._embedResult;
    const currentDOM = chart.renderRoot.querySelector("#vis").firstElementChild;
    const finalizeCurrent = cy.spy(current, "finalize");
    pending.resolve();
    await pending.promise;
    expect(pending.load).to.have.been.called;
    const actionListener = addListener
      .getCalls()
      .find((call) => call.args[0] === "click");
    expect(actionListener, "embed action menu listener").not.to.equal(
      undefined,
    );
    expect(removeListener).to.have.been.calledWith(
      "click",
      actionListener.args[1],
    );
    expect(finalizeView).to.have.been.calledTwice;
    expect(finalizeCurrent).not.to.have.been.called;
    expect(chart._embedResult).to.equal(current);
    expect(chart._vegaView).to.equal(current.view);
    expect(chart.renderRoot.querySelector("#vis").firstElementChild).to.equal(
      currentDOM,
    );
    expect(currentDOM.querySelector("canvas")).not.to.equal(null);
  });
};

export const disconnectedPendingChartTest = () => {
  cy.get("eox-chart").then(async ([chart]) => {
    const finalizeView = cy.spy(
      Object.getPrototypeOf(chart._vegaView),
      "finalize",
    );
    const pending = pendingEmbed(chart);
    chart.remove();
    pending.resolve();
    await pending.promise;
    expect(finalizeView).to.have.been.calledTwice;
    expect(chart._embedResult).to.equal(null);
    expect(chart._vegaView).to.equal(null);
  });
};
