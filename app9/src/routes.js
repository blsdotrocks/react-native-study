import React from 'react';
import {
	Router,
	Stack,
	Scene
} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
	<Router>
		<Stack key='root'>
			<Scene key='login' component={FormLogin} title='Login' hideNavBar initial/>
			<Scene key='cadastro' component={FormCadastro} title='Cadastro'/>
		</Stack>
	</Router>
);
