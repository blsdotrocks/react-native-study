import React, { Component } from 'react';
import {
	View,
	StatusBar,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Header from './Header';

const logo = require('../imagens/logo.png');
const menuCliente = require('../imagens/menu_cliente.png');
const menuContato = require('../imagens/menu_contato.png');
const menuEmpresa = require('../imagens/menu_empresa.png');
const menuServico = require('../imagens/menu_servico.png');

export default class CenaPrincipal extends Component {
	render() {
		return (
			<View>
				<StatusBar
					backgroundColor='#ccc'
				/>
				<Header background='#ccc'/>
				<View style={styles.logo}>
					<Image source={logo}/>
				</View>
				<View style={styles.menu}>
					<View style={styles.menuGrupo}>
						<TouchableOpacity
							onPress={() => {
								this.props.navigator.push({id: 'cliente'});
							}}
						>
							<Image style={styles.menuImg} source={menuCliente}/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.props.navigator.push({id: 'contato'});
							}}
						>
							<Image style={styles.menuImg} source={menuContato}/>
						</TouchableOpacity>
					</View>
					<View style={styles.menuGrupo}>
						<TouchableOpacity
							onPress={() => {
								this.props.navigator.push({id: 'empresa'});
							}}
						>
							<Image style={styles.menuImg} source={menuEmpresa}/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.props.navigator.push({id: 'servicos'});
							}}
						>
							<Image style={styles.menuImg} source={menuServico}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 30,
		alignItems: 'center',
	},
	menu: {
		alignItems: 'center'
	},
	menuGrupo: {
		flexDirection: 'row'
	},
	menuImg: {
		margin: 15
	}
});