/**
* The Logo
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
	${props => props.type == 'large' && css`
		font-size: 3em;
	`};
`;

/**
* The main class
*/
class Logo extends React.Component {
	render() {
		const { type, loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container type={type} className={className}>
				<div>Logo</div>
			</Container>
		);
	}
}

/**
* The prop types
*/
Logo.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool,

	/**
	* Logo type
	*/
	type: PropTypes.string,
};

/**
* Default props
*/
Logo.defaultProps = {
	loading: false,
	type: 'default',
};

export default Logo;
