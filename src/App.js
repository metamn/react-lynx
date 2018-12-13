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
	constructor(props) {
		super(props);

		this.state = {
			articles: Array(3).fill({
				width: '20em',
				height: '20em',
			}),
			logoType: 'large',
		};
	}

	handleClick(i) {
		const articles = this.state.articles.slice();
		let logoType = this.state.logoType;

		articles[i] = {
			width: (articles[i].width == '20em') ? '90vw' : '20em',
			height: (articles[i].height == '20em') ? '90vh' : '20em'
		}

		logoType = (articles.find(article => article.width == '90vw')) ? 'small' : 'large';
		console.log('l:' + logoType);

		this.setState({
			articles: articles,
			logoType: logoType,
		});
	}

	render() {
		const {articles, logoType} = this.state;

		return (
			<Container>
				<Logo type={logoType}></Logo>
				<Repeat numberOfTimes={articles.length} startAt='0'>
					{(i) => <Article
								width={articles[i].width}
								height={articles[i].height}
								handleClick={((i) => this.handleClick(i))}
								key={i}
								index={i}
							/>}
				</Repeat>
			</Container>
		)
	}
}

export default App;
