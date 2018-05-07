import React, { Component } from 'react';
import {
	View,
	StatusBar,
	Image,
	Text,
	StyleSheet
} from 'react-native';
import Header from './Header';

const detalheEmpresa = require('../imagens/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor='#ec7148'
				/>
				<Header back navigator={this.props.navigator} background='#ec7148'/>
				<View style={styles.header}>
					<Image source={detalheEmpresa}/>
					<Text style={styles.headerTitulo}>A Empresa</Text>
				</View>
				<View style={styles.detalheEmpresa}>
                    <Text style={styles.detalheEmpresaText}>Lorem Ipsum dolorem</Text>
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
		color: '#ec7148'
    },
    
    detalheEmpresa: {
        marginTop: 20,
        padding: 20
    },

    detalheEmpresaText: {
        fontSize: 18
    }
});