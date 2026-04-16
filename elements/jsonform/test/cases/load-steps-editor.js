import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const stepsSchema = {
  type: "object",
  format: "steps",
  properties: {
    year: {
      type: "string",
      title: "Choose Year",
      enum: ["2024", "2023", "2022"],
      options: {
        grid_columns: 3,
      },
    },
    product: {
      type: "string",
      title: "Choose Product",
      enum: ["cloudless-rgb", "cloudless-nir"],
      options: {
        enum_titles: ["Cloudless RGB", "Cloudless NIR"],
        enum_descriptions: [
          "RGB composite",
          "Near-infrared composite for vegetation",
        ],
        grid_columns: 6,
        dependsOn: "year",
        disabledLabel: "Please select a year first",
      },
    },
    projection_format: {
      type: "string",
      title: "Choose Projection",
      enum: ["EPSG:4326/GeoTIFF", "EPSG:3857/GeoTIFF"],
      options: {
        dependsOn: "product",
        disabledLabel: "Please select a product first",
      },
    },
    region: {
      type: "string",
      title: "Choose Region",
      default: "Global",
      enum: ["Global"],
      options: {
        dependsOn: "projection_format",
        autoComplete: true,
        disabledLabel:
          "Global (only global dataset available for current selection)",
      },
    },
  },
};

/**
 * Test: Steps editor renders all steps as details elements
 */
const loadStepsEditorTest = () => {
  cy.mount(html`<eox-jsonform .schema=${stepsSchema}></eox-jsonform>`).as(
    jsonForm,
  );

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // All four steps should render as <details> elements
      cy.get(".steps-editor details").should("have.length", 4);

      // First step should be open
      cy.get(".steps-editor details").first().should("have.attr", "open");

      // Steps 2-3 should be disabled (grey-text) since dependencies are unmet
      cy.get('.steps-editor details[data-step-id="product"]').should(
        "have.class",
        "grey-text",
      );
      cy.get('.steps-editor details[data-step-id="projection_format"]').should(
        "have.class",
        "grey-text",
      );

      // Disabled step should show its disabledLabel
      cy.get('.steps-editor details[data-step-id="product"]')
        .find(".small-text.grey-text")
        .should("contain.text", "Please select a year first");

      // First step should have 3 option cards (years)
      cy.get('.steps-editor details[data-step-id="year"] article').should(
        "have.length",
        3,
      );

      // Cards should have correct grid classes
      cy.get('.steps-editor details[data-step-id="year"] article')
        .first()
        .should("have.class", "l3");
    });
};

/**
 * Test: Selecting a value advances to the next step and enables dependent steps
 */
export const loadStepsEditorInteractionTest = () => {
  cy.mount(html`<eox-jsonform .schema=${stepsSchema}></eox-jsonform>`).as(
    jsonForm,
  );

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Click the first year option
      cy.get('.steps-editor details[data-step-id="year"] article')
        .first()
        .click();

      // Product step should now be enabled and open
      cy.get('.steps-editor details[data-step-id="product"]').should(
        "not.have.class",
        "grey-text",
      );

      // Year step icon should show checkmark (green-text class + check-circle SVG)
      cy.get('.steps-editor details[data-step-id="year"] .step-icon').should(
        "have.class",
        "green-text",
      );
      cy.get(
        '.steps-editor details[data-step-id="year"] .step-icon svg title',
      ).should("contain.text", "check-circle");

      // Product step should show 2 cards
      cy.get('.steps-editor details[data-step-id="product"] article').should(
        "have.length",
        2,
      );

      // Product cards should have correct grid classes (l6)
      cy.get('.steps-editor details[data-step-id="product"] article')
        .first()
        .should("have.class", "l6");

      // Product cards should show descriptions
      cy.get('.steps-editor details[data-step-id="product"] article')
        .first()
        .find(".small-text")
        .should("contain.text", "RGB composite");

      // Select a product
      cy.get('.steps-editor details[data-step-id="product"] article')
        .first()
        .click();

      // Projection step should now be enabled
      cy.get('.steps-editor details[data-step-id="projection_format"]').should(
        "not.have.class",
        "grey-text",
      );

      // Select a projection
      cy.get('.steps-editor details[data-step-id="projection_format"] article')
        .first()
        .click();

      // Auto-complete region step should show checkmark (dependency met)
      cy.get('.steps-editor details[data-step-id="region"] .step-icon').should(
        "have.class",
        "green-text",
      );
      cy.get(
        '.steps-editor details[data-step-id="region"] .step-icon svg title',
      ).should("contain.text", "check-circle");
    });

  // Verify the final editor value
  cy.get(jsonForm).and(($el) => {
    const editorValue = $el[0].editor.getValue();
    expect(editorValue.year).to.eq("2024");
    expect(editorValue.product).to.eq("cloudless-rgb");
    expect(editorValue.projection_format).to.eq("EPSG:4326/GeoTIFF");
    expect(editorValue.region).to.eq("Global");
  });
};

/**
 * Test: Cascading reset clears dependent steps when a parent changes
 */
export const loadStepsEditorCascadingResetTest = () => {
  cy.mount(html`<eox-jsonform .schema=${stepsSchema}></eox-jsonform>`).as(
    jsonForm,
  );

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Select year, product, projection
      cy.get('.steps-editor details[data-step-id="year"] article')
        .first()
        .click();
      cy.get('.steps-editor details[data-step-id="product"] article')
        .first()
        .click();
      cy.get('.steps-editor details[data-step-id="projection_format"] article')
        .first()
        .click();

      // Now re-open year and select a different one
      cy.get('.steps-editor details[data-step-id="year"] summary').click();
      cy.get('.steps-editor details[data-step-id="year"] article')
        .eq(1)
        .click();

      // Product and projection should have been reset (cascading clear)
      // Product step should be enabled but projection should be disabled
      cy.get('.steps-editor details[data-step-id="product"]').should(
        "not.have.class",
        "grey-text",
      );
      cy.get('.steps-editor details[data-step-id="projection_format"]').should(
        "have.class",
        "grey-text",
      );
    });

  cy.get(jsonForm).and(($el) => {
    const editorValue = $el[0].editor.getValue();
    expect(editorValue.year).to.eq("2023");
    // Product and projection should be cleared
    expect(editorValue.product).to.be.undefined;
    expect(editorValue.projection_format).to.be.undefined;
  });
};

export default loadStepsEditorTest;

/**
 * Schema with if/then conditional: product "cloudless-nir" unlocks full
 * region selection; "cloudless-rgb" auto-completes region to "Global".
 */
const conditionalStepsSchema = {
  type: "object",
  format: "steps",
  properties: {
    year: {
      type: "string",
      title: "Choose Year",
      enum: ["2024", "2023"],
      options: { grid_columns: 6 },
    },
    product: {
      type: "string",
      title: "Choose Product",
      enum: ["cloudless-rgb", "cloudless-nir"],
      options: {
        dependsOn: "year",
        disabledLabel: "Please select a year first",
      },
    },
    region: {
      type: "string",
      title: "Choose Region",
      default: "Global",
      enum: ["Global"],
      options: {
        dependsOn: "product",
        autoComplete: true,
        disabledLabel: "Please select a product first",
      },
    },
  },
  if: {
    properties: {
      product: { const: "cloudless-nir" },
    },
  },
  then: {
    properties: {
      region: {
        enum: ["Global", "Europe", "North America"],
        options: { autoComplete: false },
      },
    },
  },
};

/**
 * Test: Conditional if/then/else changes step enums based on other values
 */
export const loadStepsEditorConditionalTest = () => {
  cy.mount(
    html`<eox-jsonform .schema=${conditionalStepsSchema}></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Select year
      cy.get('.steps-editor details[data-step-id="year"] article')
        .first()
        .click();

      // Select product "cloudless-rgb" → region should auto-complete
      cy.get('.steps-editor details[data-step-id="product"] article')
        .first()
        .click();

      // Region step should be auto-completed (disabled with checkmark)
      cy.get('.steps-editor details[data-step-id="region"] .step-icon').should(
        "have.class",
        "green-text",
      );
      cy.get(
        '.steps-editor details[data-step-id="region"] .step-icon svg title',
      ).should("contain.text", "check-circle");
    });

  // Verify auto-complete value
  cy.get(jsonForm).and(($el) => {
    const v = $el[0].editor.getValue();
    expect(v.region).to.eq("Global");
  });

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Re-open product step and switch to "cloudless-nir"
      cy.get('.steps-editor details[data-step-id="product"] summary').click();
      cy.get('.steps-editor details[data-step-id="product"] article')
        .eq(1)
        .click();

      // Region should now show 3 cards (condition applied)
      cy.get('.steps-editor details[data-step-id="region"] article').should(
        "have.length",
        3,
      );

      // "Global" card should be highlighted (was default)
      cy.get(
        '.steps-editor details[data-step-id="region"] article[data-value="Global"]',
      ).should("have.class", "primary");

      // Select "Europe"
      cy.get(
        '.steps-editor details[data-step-id="region"] article[data-value="Europe"]',
      ).click();
    });

  // Verify new value
  cy.get(jsonForm).and(($el) => {
    const v = $el[0].editor.getValue();
    expect(v.product).to.eq("cloudless-nir");
    expect(v.region).to.eq("Europe");
  });

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Switch product back to "cloudless-rgb"
      cy.get('.steps-editor details[data-step-id="product"] summary').click();
      cy.get('.steps-editor details[data-step-id="product"] article')
        .first()
        .click();

      // Region should auto-complete back to "Global" (enum shrunk)
      cy.get('.steps-editor details[data-step-id="region"] .step-icon').should(
        "have.class",
        "green-text",
      );
    });

  // Final value should have region reset to "Global"
  cy.get(jsonForm).and(($el) => {
    const v = $el[0].editor.getValue();
    expect(v.product).to.eq("cloudless-rgb");
    expect(v.region).to.eq("Global");
  });
};
