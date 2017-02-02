import React, { Component } from 'react';

export class Link extends Component {
	static contextTypes = {
		route: React.PropTypes.string,
		linkHandler: React.PropTypes.func
	}

	handleClick = (evt) => {
		evt.preventDefault()
		this.context.linkHandler(this.props.to)
	}

    render() {
    	// Add the details for handling the render changes on click of the links in the page
    }
}

Link.propTypes = {
	to: React.PropTypes.string.isRequired
}