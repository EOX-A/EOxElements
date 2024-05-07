function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
  

class EOxGeoSearch extends HTMLElement {
    static observedAttributes = ["limit", "size"];

    limit;

    // TODO: Find a solution to avoid storing key in the code
    async performSearch (q) {
        let key = 'API_KEY';
        let url = `https://api.opencagedata.com/geocode/v1/json?=&q=${q}&key=${key}&limit=${this.limit}`;
        
        // OpenCage API yields a 400 error if the query is less than 2 characters
        if (q.length < 2) { return; }

        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } 

	/**
	 * The class constructor object
	 */
	constructor () {
		// Always call super first in constructor
		super();

        this.limit = this.getAttribute('limit') || 5;

        // Render HTML
        this.innerHTML = `
            <style>
                .search-container {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
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
            </style>
            <div class="search-container">
                <input id="gazetteer" type="text" placeholder="Type to search" />
                <div class="results-container">
                
                </div>
            </div>
        `;
	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);

        document.querySelector('#gazetteer')
            .addEventListener('input', (e) => this.performSearch(e.target.value));
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}
}

class EOxGeoSearchItem extends HTMLElement {

    performSearch (q, limit) {
        let url = `https://api.opencagedata.com/geocode/v1/json?=&q=${q}&key=18144e224ffb4d52819100803cd9b6cc&limit=${limit}`;
    }

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

customElements.define("eox-geosearch", EOxGeoSearch);
customElements.define("eox-geosearch-item", EOxGeoSearchItem);

export default EOxGeoSearch;