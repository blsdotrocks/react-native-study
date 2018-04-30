import React from 'react';
import {
	TextInput,
	StyleSheet
} from 'react-native';

export default props => (
	<TextInput
		value={props.resultado}
		editable={false}
		style={styles.visor}
	/>
);

const styles = StyleSheet.create({
	visor: {
		height: 100,
		fontSize: 30
	}
});