import { html } from "lit";

/** Verify navigation buttons are disabled at the first and last dates. */
const loadDateWrap = () => {
  cy.mount(html`
    <eox-timecontrol
      show-utc
      init-date="first"
      .controlValues=${[
        {
          id: "navigation",
          timeControlValues: [{ date: "2024-01-01" }, { date: "2024-01-02" }],
        },
      ]}
    >
      <eox-timecontrol-date
        navigation
        .dateWrap=${false}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get('button[part="previous"]').should("be.disabled");
      cy.get('button[part="next"]').should("be.enabled").click();
      cy.get('button[part="next"]').should("be.disabled");
      cy.get('button[part="previous"]').should("be.enabled");
    });
};

export default loadDateWrap;
