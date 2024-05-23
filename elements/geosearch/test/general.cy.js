describe('EOxGeoSearch', () => {
    // Setting up the environment before each test
    beforeEach(() => {
        // Mounting mock-map and eox-drawtools elements
        //cy.mount("<mock-map></mock-map>").as("mock-map");
        cy.mount(`
        <eox-geosearch
            label="Search"
            list-direction="right"
            results-direction="down"
            .onSelect="${(_item) => console.log('select')}"
            endpoint="./opencage-mock-data.json"
        ></eox-geosearch>
      `
        );
    });
  
    it('should render the component', () => {
      cy.get('eox-geosearch').should('exist');
    });
/*
    it('should render the input field when button is clicked', () => {
      cy.get('eox-geosearch').then($component => {
        console.log($component[0]);
        const shadowRoot = $component[0].shadowRoot;
        cy.wrap(shadowRoot).find('button').click();
        cy.wrap(shadowRoot).find('input#gazetteer').should('be.visible');
      });
    });
  
    it('should hide the input field when button is clicked again', () => {
      cy.get('eox-geosearch').then($component => {
        const shadowRoot = $component[0].shadowRoot;
        cy.wrap(shadowRoot).find('button').click();
        cy.wrap(shadowRoot).find('input#gazetteer').should('be.visible');
        cy.wrap(shadowRoot).find('button').click();
        cy.wrap(shadowRoot).find('input#gazetteer').should('not.be.visible');
      });
    });
*/
  });
  