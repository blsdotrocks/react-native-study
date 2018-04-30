import React, { Component } from 'react';
import {
	View,
	StatusBar,
	Image,
	Text,
	StyleSheet
} from 'react-native';
import Header from './Header';

const detalheCliente = require('../imagens/detalhe_cliente.png');
const cliente1 = require('../imagens/cliente1.png');
const cliente2 = require('../imagens/cliente2.png');

export default class CenaClientes extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor='#b9c941'
				/>
				<Header back navigator={this.props.navigator} background='#b9c941'/>
				<View style={styles.header}>
					<Image source={detalheCliente}/>
					<Text style={styles.headerTitulo}>Nossos clientes</Text>
				</View>
				<View style={styles.detalheCliente}>
					<Image source={cliente1}/>
					<Text style={styles.detalheClienteText}>Lorem Ipsum dolorem</Text>
				</View>
				<View style={styles.detalheCliente}>
					<Image source={cliente2}/>
					<Text style={styles.detalheClienteText}>Lorem Ipsum dolorem</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},

	header: {
		flexDirection: 'row',
		marginTop: 20
	},

	headerTitulo: {
		fontSize: 30,
		marginLeft: 10,
		marginTop: 25,
		color: '#b9c941'
	},

	detalheCliente: {
		padding: 20,
		marginTop: 10
	},

	detalheClienteText: {
		fontSize: 18,
		marginLeft: 20
	}
});