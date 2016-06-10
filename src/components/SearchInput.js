import React, { Component } from 'react';
import i18nStrings from '../constants/i18nStrings.js';

export default class SearchInput extends Component {
    constructor(props) {
	super(props);
	this._handleOnClickGo = this._handleOnClickGo.bind(this);
    }
    
    render() {
	return (
	    <div>
		<label htmlFor="searchInput">{i18nStrings.search}</label>
		<div className="input-group">
		    <input type="email" className="form-control"
			   placeholder={i18nStrings.searchInputPlaceHolder} id="searchInput"
		    ref="searchInput"/>
		    <span className="input-group-btn">
			<button className="btn btn-default" type="button"
			onClick={this._handleOnClickGo}>Go!</button>
		    </span>
		</div>
	    </div>
	);
    }

    _handleOnClickGo(e) {
	this.props.onClickGo(this.refs.searchInput.value);
    }
}
