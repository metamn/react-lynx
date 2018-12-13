import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import styledContainerQuery from 'styled-container-query';

import 'normalize.css';

import Repeat from './framework';
import Logo from './components/Logo';
import Article from './components/Article';

const Container = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-wrap: wrap;
`;

class App extends Component {
	render() {
		return (
			<Container>
				<Logo></Logo>
				<Repeat numberOfTimes='3' startAt='0'>
					{(i) => <Article key={i} index={i+1}/>}
				</Repeat>
			</Container>
		)
	}
}

export default App;
