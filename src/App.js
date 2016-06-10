import React, { Component } from 'react';

import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';

export default class PropertySearchApp extends Component {
    constructor(props) {
	super(props);
	this._handleOnClickGo = this._handleOnClickGo.bind(this);
	this.state = {
	};
    }

    render() {
	return (
	    <div>
		<SearchInput onClickGo={this._handleOnClickGo}/>
		<SearchResult propertyName={this.state.propertyName}/>
	    </div>
	);
    }

    _handleOnClickGo(propertyName) {
	this.setState({propertyName: propertyName});
    }
}
