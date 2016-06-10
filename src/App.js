import React, { Component } from 'react';

import SearchInput from './components/SearchInput';

export default class PropertySearchApp extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	console.log('here');
	return (
	    <div>
		<SearchInput/>
	    </div>
	);
    }
}
