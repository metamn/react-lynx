/**
 * The About page in Storybook
 *
 */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ReactMarkdown from 'react-markdown';

import md from './About.md';

/**
 * The main container
 */
const Container = styled.div`
	width: 100%;
	height: 100;
	padding: 1.25em;

	align-self: flex-start;
	margin-right: auto;

	font-family: monospace;
	font-size: 150%;
	max-width: 45em;
	line-height: 1.5;
`;

/**
 * The main class
 */
class About extends React.Component {
	render() {
		return (
			<Container>
				<ReactMarkdown source={md} />
			</Container>
		)
	}
}

export default About;
