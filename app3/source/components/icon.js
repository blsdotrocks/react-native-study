import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
export default class Icon extends Component {
	render() {
		if(this.props.escolha == 'pedra') {
			return (
				<View style={styles.icon}>
					<Text style={styles.contentPlayer}>{this.props.jogador}</Text>
					<Image source={require('../../img/pedra.png')}/>
				</View>
			)
		} else if(this.props.escolha == 'papel') {
			return(
				<View style={styles.icon}>
					<Text style={styles.contentPlayer}>{this.props.jogador}</Text>
					<Image source={require('../../img/papel.png')}/>
				</View>
			)
		} else if(this.props.escolha == 'tesoura') {
			return(
				<View style={styles.icon}>
					<Text style={styles.contentPlayer}>{this.props.jogador}</Text>
					<Image source={require('../../img/tesoura.png')}/>
				</View>
			)
		} else {
			return false;
		}
	}
}

const styles = StyleSheet.create({
	icon: {
		alignItems: 'center',
		marginBottom: 20
	},

	contentPlayer: {
		fontSize: 18
	}
}); 

