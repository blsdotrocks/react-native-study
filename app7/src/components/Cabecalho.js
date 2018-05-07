import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default props => (
	<View style={styles.topo}>
		<Text style={styles.topoText}>Calculadora</Text>
	</View>
);

const styles = StyleSheet.create ({
	topo: {
		backgroundColor: '#2196f3',
		padding: 10,
		alignItems: 'center'
	},

	topoText: {
		fontSize: 25,
		color: '#fff'
	}
});