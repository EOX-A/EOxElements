// Defining a MockMap class extending HTMLElement
export class MockMap extends HTMLElement {
  constructor() {
    super();
    // Initializing features array
    this.features = [];
    // Initializin mock params
    (this.params = {
      TIME: "2024-01-01",
    }),
      // Simulating a map object with necessary methods
      (this.map = {
        // Simulating getLayers method
        getLayers: () => ({
          // Simulating getArray method
          getArray: () => [
            {
              // Simulating get method
              get: () => "TEST_ID",
              getSource: () => ({
                // Simulating getParams method to update the source url
                getParams: () => this.params,
                // Simulating updateParams method to update the source url
                updateParams: (params) => {
                  Object.assign(this.params, params);
                },
              }),
            },
          ],
        }),
        events: {
          loadend: () => undefined,
        },
        once: (event, fun) => (this.map.events = { [event]: fun }),
      });
  }
}

// Registering the MockMap custom element
customElements.define("mock-map", MockMap);
