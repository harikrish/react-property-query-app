import React, { Component } from 'react';
import i18nStrings from '../constants/i18nStrings.js';
import locales from '../constants/locales';

export default class SearchResult extends Component {
    render() {
	return (
	    <table className="table table-bordered">
		<thead>
		    <tr>
			{this._renderHeader()}
		    </tr>
		</thead>
		<tbody>
		    {this._renderBody()}
		</tbody>
	    </table>
	);
    }

    _renderHeader() {
	let propertyNames = this.props.propertyNames;

	return propertyNames.map((propertyName, index) => {
	    return (
		<th key={index}>{propertyName}</th>
	    );
	});
    }

    _renderBody() {
	let propertyNames = this.props.propertyNames;
	return (
	    <tr>
		{this._renderRow(propertyNames)}
	    </tr>
	);
    }

    _renderRow(propertyNames) {
	return propertyNames.map((propertyName, index) => {
	    return (
		<td key={index}>
		{this._renderCell(this._search(propertyName))}
	        </td>
	    );
	});
    }

    _renderCell(rowData) {
	return rowData.map((item, index) => {
	    return (
		<div key={index}>
		{item.locale.join(', ')} = {item.propertyValue}
		</div>
	    );	    
	});
    }

    _search(propertyName) {
	propertyName = propertyName.trim();

	let newLocales = locales.map((locale, index) => {
	    let delimiterJSON = require('json!../data/' + locale + '/delimiters.json');
	    let propertyValue = delimiterJSON.main[locale].delimiters[propertyName];

	    return {
		propertyValue: propertyValue,
		locale: [locale]
	    };

	});

	newLocales = newLocales.reduce((previous, current, index, thisArray) => {
	    let filteredArray = previous.filter((item, i, previousArray) => {
		return (item.propertyValue === current.propertyValue);
	    });
	    
	    if(filteredArray.length > 0) {
		filteredArray[0].locale.push(current.locale[0]);
	    } else {
		previous.push(current);
	    }
	    return previous;
	}, []);

	return newLocales;
    }
}
