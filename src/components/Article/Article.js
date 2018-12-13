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
`;

/**
* The main class
*/
class Article extends React.Component {
	render() {
		const { index, loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container className={className}>
				<div>Click {index}</div>
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
};

/**
* Default props
*/
Article.defaultProps = {
	loading: false
};

export default Article;
