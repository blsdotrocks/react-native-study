import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Image,
	Alert
} from 'react-native';

const buttonPress = () => {
	let numAleatorio = Math.random();
	numAleatorio = Math.floor(numAleatorio * 5);

	//frases
	let frases = Array();
	frases[0] = 'aa';
	frases[1] = 'bb';
	frases[2] = 'cc';
	frases[3] = 'dd';
	frases[4] = 'ee';

	let fraseEscolhida = frases[numAleatorio]	;

	Alert.alert(fraseEscolhida);
}

export default class App extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Image source={require('./img/logo.png')}/>
				<TouchableOpacity 
					onPress={buttonPress}
					style={Styles.button}>
					<Text style={Styles.textButton}>
						Nova Frase
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const Styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	button: {
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20
	},

	textButton: {
		color: '#fff',
		fontSize: 16
	}
}
