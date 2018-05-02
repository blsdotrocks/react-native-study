import React from 'react';
import {
	View,
	TextInput,
	Button,
	StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {modificaNome} from '../actions/AutenticacaoActions';

const formCadastro = props => (
	<View style={styles.container}>
		<View style={styles.containerInput}>
			<TextInput
				value={props.nome}
				style={styles.form}
				placeholder='Nome'
				onChangeText={input => props.modificaNome(input)}
			/>
			<TextInput
				value={props.email}
				style={styles.form}
				placeholder='E-mail'
				keyboardType='email-address'
			/>
			<TextInput
				value={props.senha}
				style={styles.form}
				placeholder='Senha'
				secureTextEntry
			/>
		</View>
		<View style={styles.containerButton}>
			<Button
				title='Acessar'
				color='#115e54'
				onPress={() => {false}}
			/>
		</View>
	</View>
);

const mapStateToProps = state => (
	{
		nome: state.AutenticacaoReducer.nome,
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha
	}
);

export default connect(mapStateToProps, {modificaNome})(formCadastro);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},

	containerInput: {
		flex: 4,
		justifyContent: 'center'
	},

	form: {
		fontSize: 20,
		height: 45
	},

	containerButton: {
		flex: 1
	}
});
