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
	    <div className="container">
		<div className="row">
		    <div className="col-xs-6">
			<SearchInput onClickGo={this._handleOnClickGo}/>
		    </div>
		</div>
		<br/>
		<div className="row">
		    <div className="col-xs-12">
			{this.state.propertyNames && this.state.propertyNames.length > 0?
			 <SearchResult propertyNames={this.state.propertyNames}/>:
			 null}
		    </div>
		</div>
	    </div>
	);
    }

    _handleOnClickGo(propertyNames) {
	this.setState({propertyNames: propertyNames.split(',')});
    }
}
