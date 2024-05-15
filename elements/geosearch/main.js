import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

import { button } from "../../utils/styles/button";

class EOxGeoSearch extends LitElement {
    inputRef = createRef();

    static get properties() {
        return {
          _data: {attribute: false},
          _isListVisible: {attribute: false},
          _isInputVisible: {attribute: false},
          _inputValue: {attribute: false},
          /**
           * The OpenCage API endpoint to use for the search.
           *
           */
          endpoint: {type: String},
          /**
           * The API key to use for the search.
           *
           */
          key: {type: String},
          /**
           * The query selector for the map target, if any.
           *
           */
          for: {type: String},
          /**
           * A function to be called when a search result is selected, to enable
           * the parent component to handle the selection.
           *
           */
          onSelect: {type: Function},
          /**
           * Whether or not to enable button mode, which hides and shows the input field
           * similar to how a modal works.
           *
           */
          button: {type: Boolean},
          /**
           * Enables a smaller version of the button for use in map controls.
           *
           */
          small: {type: Boolean},
          /**
           * Which text to use for the button if it is enabled.
           *
           */
          label: {type: String},
          /**
           * Which direction the search input and results should open to. One of the following options:
           *
           * - `left`
           * - `top`
           * - `right`
           * - `bottom`
           *
           */
          direction: {type: String},
        };
      }

    constructor() {
        super();

        this._data = [];
        this._isListVisible = false;
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
            background: #C6D4DD;
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
        button {
            height: auto;
        }

        button.small {
            height: 32px;
            width: 32px;
        }

        .chevron {
            width: 24px;
            height: 24px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-left%3C/title%3E%3Cpath d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /%3E%3C/svg%3E");
            margin-right: 9px;
        }

        .chevron.right {
            transform: rotate(180deg);
            margin-left: 9px;
        }

        .chevron.top {
            transform: rotate(90deg);
            margin-bottom: 9px;
        }

        .chevron.bottom {
            transform: rotate(-90deg);
            margin-top: 9px;
        }

        .chevron.right.active {
            transform: rotate(180deg);
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

        console.log(_inputValue);

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

        if (this._isInputVisible) {
            this.renderRoot.querySelector('#gazetteer').focus();
        }

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
                    class="${this.button ? '' : 'hidden'} ${this.small ? 'small' : ''}"
                    style="
                        margin-${this.direction ?? 'right'}: 12px;
                        background: ${this._isInputVisible ? '#0078CE' : '#004170'};
                        flex-direction: ${
                            this.direction === 'top' ? 'column' :
                            this.direction === 'left' ? 'row' :
                            this.direction === 'bottom' ? 'column-reverse' :
                            'row-reverse'
                        }
                    "
                    @click="${this.onButtonClick}"
                >
                    <span class="chevron ${this.direction ?? 'right'} ${this._isInputVisible ? 'active': ''}"></span>
                    <span style="display: ${this.small ? 'none' : 'flex'}">${this.label ?? 'Search'}</span>
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
                                .onClick="${this.onSelect}"
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
