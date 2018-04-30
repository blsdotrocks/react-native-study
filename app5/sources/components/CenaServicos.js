import React, { Component } from 'react';
import {
	View,
	StatusBar,
	Image,
	Text,
	StyleSheet
} from 'react-native';
import Header from './Header';

const detalheServico = require('../imagens/detalhe_servico.png');

export default class CenaEmpresa extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor='#19d1c8'
				/>
				<Header back navigator={this.props.navigator} background='#19d1c8'/>
				<View style={styles.header}>
					<Image source={detalheServico}/>
					<Text style={styles.headerTitulo}>Nossos Serviços</Text>
				</View>
				<View style={styles.detalheServico}>
                    <Text style={styles.detalheServicoText}>- Consultoria</Text>
                    <Text style={styles.detalheServicoText}>- Processos</Text>
                    <Text style={styles.detalheServicoText}>- Acompanhamento de Projetos</Text>
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
		color: '#19d1c8'
    },
    
    detalheServico: {
        marginTop: 20,
        padding: 20
    },

    detalheServicoText: {
        fontSize: 18
    }
});