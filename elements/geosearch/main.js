import { LitElement, html, css } from 'lit';

class EOxGeoSearch extends LitElement {
    static get properties() {
        return {
          data: {type: String},
          isListVisible: {attribute: false},
          searchString: {type: Array},
        };
      }

    constructor() {
        super();

        this.data = [];
        this.isListVisible = false;
        this.searchString = '';
    }

    static styles = css`
        .search-container {
            display: flex;
            flex-direction: column;
            align-items: start;
        }
        .hidden {
            display: none;
        }
        .results-container {
            min-height: 100px;
            width: 300px;
            padding: 0 16px;
            background: #ccc;
            border-radius: 6px;
            margin-top: 10px;
        }
        input {
            background: #0041703a;
            height: 48px;
            border-radius: 6px;
            padding: 0 16px;
            min-width: 300px;
            border: none;
        }
        input::before {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='%23999999' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
            width: 48px;
            height: 48px;
            display: inline-block;
        }
    `;

    // TODO: Find a solution to avoid storing key in the code
    async performSearch (q) {
        let url = `/opencage-mock-data.json`;

        const response = await fetch(url);
        const json = await response.json();
        console.log(json.results);
        this.data = json.results;
        this.renderItems();
    } 

    emit(searchString) {
        let event = new CustomEvent('input', {
            bubbles: true,
            cancelable: true,
            value: searchString,
        });

        this.dispatchEvent(event);
    }

    onInput(searchString) {
        if (searchString.length > 1) {
            //console.log(`this.isListVisible: ${this.isListVisible}`);
            this.performSearch(searchString);
            this.isListVisible = true;
        } else {
            this.isListVisible = false;
        }

        this.updateVisibility();
    }

    render() {
        return html`
            <div class="search-container">
                <input id="gazetteer" type="text" placeholder="Type to search" .value="${this.searchString}" @input="${this.onInput}">
                <div class="results-container ${this.isListVisible ? '' : 'hidden'}">
                    ${this.data.map(item => html`<eox-geosearch-item></eox-geosearch-item>`)}
                </div>
            </div>
        `;
    }

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
        super.connectedCallback();
		console.log('connected!', this);

        // Re-emit the input event. Could this be omitted by using event bubbling?
        document.querySelector('#gazetteer')
            .addEventListener('input', (e) => this.onInput(e.target.value));
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
        super.disconnectedCallback()
		console.log('disconnected', this);
	}
}

class EOxGeoSearchItem extends HTMLElement {

	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

		console.log('Constructed', this);
        // Render HTML
        this.innerHTML = `
            <style>
                input {
                    background: #0041703a;
                    height: 48px;
                    border-radius: 6px;
                    padding: 0 16px;
                    border: none;
                }

                input::before {
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='%23999999' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
                    width: 48px;
                    height: 48px;
                    display: inline-block;
                }
            </style>
            <h1>Result Item</h1>
        `;
	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}
}

export {
    EOxGeoSearch,
};
