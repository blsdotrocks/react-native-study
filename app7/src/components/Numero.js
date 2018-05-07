import React from 'react';
import {
	TextInput,
	StyleSheet
} from 'react-native';

export default props => (
	<TextInput
		style={styles.numero}
		keyboardType='numeric'
		value={props.num}
		onChangeText={value => props.atualizaValor(props.nome, value)}
	/>
);

const styles = StyleSheet.create({
	numero: {
		width: 140,
		height: 80,
		fontSize: 30
	}
});