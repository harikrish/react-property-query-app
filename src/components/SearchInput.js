import React, { Component } from 'react';
import i18nStrings from '../constants/i18nStrings.js';

export default class SearchInput extends Component {
    render() {
	return (
	    <div className="form-group">
	        <label htmlFor="searchInput">{i18nStrings.search}</label>
		<input type="email" className="form-control"
		       placeholder={i18nStrings.searchInputPlaceHolder} id="searchInput"/>
	    </div>	    
	);
    }
}
