import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	ActivityIndicator
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {
	modificaEmail,
	modificaSenha,
	autenticarUsuario
} from '../actions/AutenticacaoActions';

class formLogin extends Component {
	_autenticarUsuario() {
		const {email, senha} = this.props;
		this.props.autenticarUsuario({email, senha});
	}

	renderButtonAcessar() {
		if(this.props.loadingLogin) {
			return (
				<ActivityIndicator size='large'/>
			)
		}

		return (
			<Button
				title='Acessar'
				color='#115e54'
				onPress={() => this._autenticarUsuario()}
			/>
		);
	}

	render() {
		return (
			<ImageBackground style={styles.bg} source={require('../imgs/bg.png')}>
				<View style={styles.container}>
					<View style={styles.containerTitle}>
						<Text style={styles.titleLogin}>whatsapp clone</Text>
					</View>
					<View style={styles.containerInput}>
						<TextInput
							value={this.props.email}
							style={styles.form}
							placeholder='E-mail'
							keyboardType='email-address'
							placeholderTextColor='#fff'
							onChangeText={input => this.props.modificaEmail(input)}
						/>
						<TextInput
							value={this.props.senha}
							style={styles.form}
							placeholder='Senha'
							secureTextEntry
							placeholderTextColor='#fff'
							onChangeText={input => this.props.modificaSenha(input)}
						/>
						<Text style={styles.error}>{this.props.erroLogin}</Text>
						<TouchableOpacity
							onPress={() => {Actions.cadastro();}}
							style={styles.button}
						>
							<Text style={styles.textLogin}>Ainda não possui cadastro? Cadastre-se</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.containerButton}>
						{this.renderButtonAcessar()}
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const mapStateToProps = state => (
	{
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha,
		erroLogin: state.AutenticacaoReducer.erroLogin,
		loadingLogin: state.AutenticacaoReducer.loadingLogin
	}
);

export default connect(mapStateToProps, {
	modificaEmail,
	modificaSenha,
	autenticarUsuario
})(formLogin);

const styles = StyleSheet.create({
	bg: {
		flex: 1
	},

	container: {
		flex: 1,
		padding: 15
	},

	containerTitle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	titleLogin: {
		fontSize: 25,
		color: '#fff'
	},

	form: {
		fontSize: 15,
		height: 45,
		color: '#fff'
	},

	error: {
		fontSize: 15,
		color: '#fff',
		textAlign: 'center',
		marginTop: 25
	},

	button: {
		alignItems: 'center',
		marginTop: 25
	},

	textLogin: {
		fontSize: 15,
		color: '#fff'
	},

	containerInput: {
		flex: 2
	},

	containerButton: {
		flex: 2
	}
});
