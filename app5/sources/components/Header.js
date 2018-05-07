import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

const btnBack = require('../imagens/btn_voltar.png');

export default class Header extends Component {
	render() {
		if(this.props.back) {
			return (
				<View style={[styles.containerBar, {backgroundColor: this.props.background}]}>
					<TouchableOpacity
						onPress={() => {
							this.props.navigator.pop();
						}}
					>
						<Image source={btnBack}/>
					</TouchableOpacity>
					<Text style={styles.titleBar}>ATM Consultoria</Text>
				</View>
			)
		}

		return (
			<View style={styles.containerBar}>
				<Text style={styles.titleBar}>ATM Consultoria</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerBar: {
		flexDirection: 'row',
		backgroundColor: '#ccc',
		padding: 10,
		height: 60
	},

	titleBar: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: '#000'
	}
});