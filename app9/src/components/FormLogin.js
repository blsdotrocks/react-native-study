import React from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {modificaEmail, modificaSenha} from '../actions/AutenticacaoActions';

const formLogin = props => (
	<View style={styles.container}>
		<View style={styles.containerTitle}>
			<Text style={styles.titleLogin}>whatsapp clone</Text>
		</View>
		<View style={styles.containerInput}>
			<TextInput
				value={props.email}
				style={styles.form}
				placeholder='E-mail'
				keyboardType='email-address'
				onChangeText={input => props.modificaEmail(input)}
			/>
			<TextInput
				value={props.senha}
				style={styles.form}
				placeholder='Senha'
				secureTextEntry
				onChangeText={input => props.modificaSenha(input)}
			/>
			<TouchableOpacity
				onPress={() => {Actions.cadastro();}}
			>
				<Text style={styles.textLogin}>Ainda não possui cadastro? Cadastre-se</Text>
			</TouchableOpacity>
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
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha
	}
);

export default connect(mapStateToProps, {
	modificaEmail,
	modificaSenha
})(formLogin);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},

	containerTitle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	titleLogin: {
		fontSize: 25
	},

	form: {
		fontSize: 20,
		height: 45
	},

	textLogin: {
		fontSize: 20
	},

	containerInput: {
		flex: 2
	},

	containerButton: {
		flex: 2
	}
});
