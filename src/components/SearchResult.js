import React, { Component } from 'react';
import i18nStrings from '../constants/i18nStrings.js';
import locales from '../constants/locales';

export default class SearchResult extends Component {
    render() {
	return (
	    <table className="table table-bordered">
		<thead>
		    <tr>
			<th>{i18nStrings.propertyValue}</th>
			<th>{i18nStrings.locale}</th>
		    </tr>
		</thead>
		<tbody>
		    {this._search()}
		</tbody>
	    </table>
	);
    }

    _search() {
	let propertyName = this.props.propertyName;
	if(!propertyName) {
	    return;
	}
	return locales.map((locale, index) => {
	    let delimiterJSON = require('json!../data/' + locale + '/delimiters.json');
	    let propertyValue = delimiterJSON.main[locale].delimiters[propertyName];
	    return (
		<tr key={index}>
		    <td>{propertyValue}</td>
		    <td>{locale}</td>
		</tr>
	    );
	});
    }
}
