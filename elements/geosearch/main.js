import { LitElement, html, css } from 'lit';

import { button } from "../../utils/styles/button";

class EOxGeoSearch extends LitElement {
    static get properties() {
        return {
          _data: {attribute: false},
          _isListVisible: {attribute: false},
          _isInputVisible: {attribute: false},
          _inputValue: {attribute: false},
          onSelect: {type: Function},
          // Enable button mode? as in <eox-geosearch button></eox-geosearch>
          button: {type: Boolean},
          label: {type: String},
          // The position of the input field, as 'left', 'top', 'right' or 'bottom'.
          direction: {type: String},
        };
      }

    constructor() {
        super();

        this._data = [];
        // Whether the result list is visible or not
        this._isListVisible = false;
        // Whether the input is visible or not
        this._isInputVisible = false;
        this._inputValue = '';
    }

    static styles = css`
        .hidden {
            display: none;
        }

        .geosearch {
            display: flex;
            flex-direction: row;
            align-items: start;
        }

        .search-container {
            display: flex;
            flex-direction: column;
            align-items: start;
        }
        .search-container.hidden {
            opacity: 0;
        }
        .results-container {
            min-height: 100px;
            width: 332px;
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
            background: url("_data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='%23999999' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
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
        this._data = json.results;
    } 

    emit(_inputValue) {
        let event = new CustomEvent('input', {
            bubbles: true,
            cancelable: true,
            value: _inputValue,
        });

        this.dispatchEvent(event);
    }

    onInput(e) {
        this._inputValue = e.target.value;
        if (this._inputValue.length > 1) {
            this.performSearch(this._inputValue);
            this._isListVisible = true;
        } else {
            this._isListVisible = false;
        }
    }

    onButtonClick() {
        this._isInputVisible = !this._isInputVisible;
        console.log(`switched input visibility ${this._isInputVisible ? 'on' : 'off'}`);
    }

    handleSelect(item) {
        this._isListVisible = false;
        this.onSelect(item);
    }

    render() {
        return html`
            <style>
                ${button}
            </style>
            <div class="geosearch" style="flex-direction: ${
                this.direction === 'top' ? 'column-reverse' :
                this.direction === 'left' ? 'row-reverse' :
                this.direction === 'bottom' ? 'column' :
                'row'
            }">
                <button
                    class="${this.button ? '' : 'hidden'}"
                    style="
                        margin-${this.direction ?? 'right'}: 12px;
                        background: ${this._isInputVisible ? '#0078CE' : '#004170'};
                    "
                    @click="${this.onButtonClick}"
                >
                    ${this.label ?? 'Search'}
                </button>
                <div
                    class="search-container ${
                        this.button
                            ? this._isInputVisible ? '' : 'hidden'
                            : ''
                    }"
                    style="flex-direction: ${
                        this.direction === 'top'
                            ? 'column-reverse'
                            : 'column'
                    }"
                >
                    <input
                        id="gazetteer"
                        type="text"
                        placeholder="Type to search"
                        .value="${this._inputValue}"
                        style="margin-top: ${
                            this.direction === 'top'
                                ? 12
                                : 0
                        }px"
                        @input="${this.onInput}"
                    >
                    <div class="results-container ${this._isListVisible ? '' : 'hidden'}">
                        ${this._data.map(item => html`
                            <eox-geosearch-item
                                .item="${item}"
                                .onClick="${this.handleSelect}"
                            />
                        `)}
                    </div>
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
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
        super.disconnectedCallback()
		console.log('disconnected', this);
	}
}

class EOxGeoSearchItem extends LitElement {
    static get properties() {
        return {
            item: {type: Object},
            onClick: {type: Function},
        };
    }

    constructor() {
        super();
    }

    static styles = css`
        .search-result {
            padding: 10px;
            border-bottom: 1px solid #aaa;
            cursor: pointer;
        }

        .search-result:hover {
            background: #bbb;
        }
    `;

    render() {
        return html`
            <div class="search-result" @click="${() => this.onClick(this.item)}">
                <div class="name">${this.item.formatted}</div>
            </div>
        `;
    }
}

customElements.define("eox-geosearch", EOxGeoSearch);
customElements.define("eox-geosearch-item", EOxGeoSearchItem);

export {
    EOxGeoSearch,
};
