import React, { Component } from 'react';
import i18nStrings from '../constants/i18nStrings.js';
import locales from '../constants/locales';

export default class SearchResult extends Component {
    render() {
	this._search();
	return (
	    <table className="table table-bordered">
		<thead>
		    <tr>
			<th>{i18nStrings.propertyValue}</th>
			<th>{i18nStrings.locale}</th>
		    </tr>
		</thead>
		<tbody>
		    <tr>
			<td>abcd</td>
			<td>en</td>
		    </tr>
		</tbody>
	    </table>
	);
    }

    _search() {
	for(let i = 0 ; i < locales.length ; i++) {
	    let delimiterJSON = require('json!../data/' + locales[i] + '/delimiters.json');
	    console.log('delimiterJSON', delimiterJSON);
	}
    }
}
