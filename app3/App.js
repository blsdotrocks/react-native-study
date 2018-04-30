/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import Icon from './source/components/icon';
import Header from './source/components/header';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: ''}
	}

	jokenpo(escolhaUsuario) {
		const numero = Math.floor(Math.random() * 3); //gera número aleatório de 0 a 2
		let escolhaComputador = '';
		let resultado = '';
		switch (numero) {
			case 0:
				escolhaComputador = 'pedra';
				break;
			case 1:
				escolhaComputador = 'papel';
				break;
			case 2:
				escolhaComputador = 'tesoura';
				break;
		}

		if (escolhaComputador === 'pedra') {
			if (escolhaUsuario === 'pedra') {
				resultado = 'Empate';
			}
			if (escolhaUsuario === 'papel') {
				resultado = 'Usuário ganhou';
			}
			if (escolhaUsuario === 'tesoura') {
				resultado = 'Computador ganhou';
			}
		}

		if (escolhaComputador === 'papel') {
			if (escolhaUsuario === 'papel') {
				resultado = 'Empate';
			}
			if (escolhaUsuario === 'tesoura') {
				resultado = 'Usuário ganhou';
			}
			if (escolhaUsuario === 'pedra') {
				resultado = 'Computador ganhou';
			}
		}

		if (escolhaComputador === 'tesoura') {
			if (escolhaUsuario === 'tesoura') {
				resultado = 'Empate';
			}
			if (escolhaUsuario === 'pedra') {
				resultado = 'Usuário ganhou';
			}
			if (escolhaUsuario === 'papel') {
				resultado = 'Computador ganhou';
			}
		}

		this.setState({escolhaUsuario, escolhaComputador, resultado});
	}

	render() {
		return (
			<View>
				<Header/>
				<View style={styles.containerButton}>
					<View style={styles.button}>
						<Button onPress={() => {this.jokenpo('pedra')}} title='pedra'/>
					</View>
					<View style={styles.button}>
						<Button onPress={() => {this.jokenpo('papel')}} title='papel'/>
					</View>
					<View style={styles.button}>
						<Button onPress={() => {this.jokenpo('tesoura')}} title='tesoura'/>
					</View>
				</View>
				<View style={styles.content}>
					<Text style={styles.contentResult}>{this.state.resultado}</Text>
					<Icon escolha={this.state.escolhaComputador} jogador={'computador'}></Icon>
					<Icon escolha={this.state.escolhaUsuario} jogador={'usuario'}></Icon>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerButton: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},

	content: {
		alignItems: 'center',
		marginTop: 30
	},

	contentResult: {
		fontSize: 25,
		height: 60
	},

	button: {
		width: 90,
		marginTop: 30
	}
});
