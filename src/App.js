import React, { Component } from 'react';

import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';

export default class PropertySearchApp extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	return (
	    <div>
		<SearchInput/>
		<SearchResult/>
	    </div>
	);
    }
}
