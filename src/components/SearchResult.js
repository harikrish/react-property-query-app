import React, { Component } from 'react';
import i18nStrings from '../constants/i18nStrings.js';
import locales from '../constants/locales';

export default class SearchResult extends Component {
    render() {
	return (
	    <table className="table table-bordered">
		<thead>
		    <tr>
			<th>{this.props.propertyName}</th>
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



	
	let newLocales = locales.map((locale, index) => {
	    let delimiterJSON = require('json!../data/' + locale + '/delimiters.json');
	    let propertyValue = delimiterJSON.main[locale].delimiters[propertyName];

	    return {
		propertyValue: propertyValue,
		locale: locale
	    };

	});

	newLocales = newLocales.reduce((previous, current, index, thisArray) => {
	    let filteredArray = previous.filter((item, i, previousArray) => {
		return (item.propertyValue === current.propertyValue);
	    });
	    
	    if(filteredArray.length > 0) {
		filteredArray[0].locale = filteredArray[0].locale + ' ' + current.locale;
	    } else {
		previous.push(current);
	    }
	    return previous;
	}, []);

	return newLocales.map((item, index) => {
	    return (
		<tr key={index}>
		    <td>{item.propertyValue}</td>
		    <td>{item.locale}</td>
		</tr>
	    );	    
	});
    }
}
