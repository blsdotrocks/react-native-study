import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	ImageBackground,
	ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {
	modificaEmail,
	modificaSenha,
	modificaNome,
	cadastrarUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {
	_cadastrarUsuario() {
		const {nome, email, senha} = this.props;
		this.props.cadastrarUsuario({nome, email, senha});
	}

	renderButtonCadastro() {
		if(this.props.loadingCadastro) {
			return (
				<ActivityIndicator size='large'/>
			)
		}

		return (
			<Button
				title='Acessar'
				color='#115e54'
				onPress={() => this._cadastrarUsuario()}
			/>
		);
	}

	render() {
		return (
			<ImageBackground style={styles.bg} source={require('../imgs/bg.png')}>
				<View style={styles.container}>
					<View style={styles.containerInput}>
						<TextInput
							value={this.props.nome}
							style={styles.form}
							placeholder='Nome'
							placeholderTextColor='#fff'
							onChangeText={input => this.props.modificaNome(input)}
						/>
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
						<Text style={styles.error}>{this.props.erroCadastro}</Text>
					</View>
					<View style={styles.containerButton}>
						{this.renderButtonCadastro()}
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const mapStateToProps = state => (
	{
		nome: state.AutenticacaoReducer.nome,
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha,
		erroCadastro: state.AutenticacaoReducer.erroCadastro,
		loadingCadastro: state.AutenticacaoReducer.loadingCadastro
	}
);

export default connect(
	mapStateToProps,
	{
		modificaNome,
		modificaEmail,
		modificaSenha,
		cadastrarUsuario
	}
)(formCadastro);

const styles = StyleSheet.create({
	bg: {
		flex: 1
	},

	container: {
		flex: 1,
		padding: 15
	},

	containerInput: {
		flex: 4,
		justifyContent: 'center'
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

	containerButton: {
		flex: 1
	}
});
