import React, { Component } from 'react';
import {
	View,
	StatusBar,
	Image,
	Text,
	StyleSheet
} from 'react-native';
import Header from './Header';

const detalheContato = require('../imagens/detalhe_contato.png');

export default class CenaContatos extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor='#61bd8c'
				/>
				<Header back navigator={this.props.navigator} background='#61bd8c'/>
				<View style={styles.header}>
					<Image source={detalheContato}/>
					<Text style={styles.headerTitulo}>Contatos</Text>
				</View>
				<View style={styles.detalheContato}>
                    <Text style={styles.detalheContatoText}>TEL: (47) 1234-5678</Text>
                    <Text style={styles.detalheContatoText}>CEL: (47) 95678-1234</Text>
                    <Text style={styles.detalheContatoText}>EMAIL: brunolsk3@gmail.com</Text>
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
		color: '#61bd8c'
    },
    
    detalheContato: {
        marginTop: 20,
        padding: 20
    },

    detalheContatoText: {
        fontSize: 18
    }
});