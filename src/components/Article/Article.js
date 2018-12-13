/**
* An article skeleton
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/**
* The loading container
*/
const Loading = styled.div``;

/**
* The main container
*/
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	border: 1px solid;
	padding: 1.25em;
	margin: 1.25em;

	width: ${props => props.width ? props.width : 'auto'};
	height: ${props => props.height ? props.height : 'auto'};

	cursor: pointer;
`;

/**
* The main class
*/
class Article extends React.Component {
	render() {
		const { width, height, index, loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container
				width={width}
				height={height}
				onClick={() => this.props.handleClick(index)}
				className={className}
				>
				<div>Click {index + 1}</div>
			</Container>
		);
	}
}

/**
* The prop types
*/
Article.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool,
	/**
	* Article index
	*/
	index: PropTypes.integer,
	/**
	* Article width
	*/
	width: PropTypes.string,
	/**
	* Article height
	*/
	height: PropTypes.string,
};

/**
* Default props
*/
Article.defaultProps = {
	loading: false,
	width: '10em',
	height: '10em',
};

export default Article;
