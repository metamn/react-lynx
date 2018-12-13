/**
* The Logo
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Measure from 'react-measure'

/**
* The loading container
*/
const Loading = styled.div``;

/**
* The main container
*/
const Container = styled.div`
	font-size: 4em;
	overflow: hidden;

	${props => props.type == 'small' && css `
		font-size: 1em;
	`}
`;

/**
 * The Logo text element
 */
const LogoText = styled.div`
	color: red;
`;

/**
 * The Small Logo text element
 */
const LogoTextSmall = styled(LogoText)`
	color: blue;
`;

/**
 * The Extra Small Logo text element
 */
const LogoTextExtraSmall = styled(LogoText)`
	color: green;
`;


/**
* The main class
*/
class Logo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dimensions : {
				width: -1,
				height: -1,
			}
		}
	}

	render() {
		const { width, height } = this.state.dimensions;
		const { type, loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Measure
				bounds
				onResize={(contentRect) => {
					this.setState({
						dimensions: contentRect.bounds
					});
				}}
				>
				{({ measureRef }) => (
					<Container
						ref={measureRef}
						type={type}
						className={className}
						>
						{
							width < 150 && (
								<LogoTextExtraSmall>Logo Extra Small</LogoTextExtraSmall>
							)
						}
						{
							width >= 150 && width <= 320 && (
								<LogoTextSmall>Logo Small</LogoTextSmall>
							)
						}
						{
							width > 320 && (
								<LogoText>Logo Large</LogoText>
							)
						}
					</Container>
				)}
			</Measure>
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
