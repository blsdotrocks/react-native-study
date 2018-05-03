import React from 'react';
import {
	Router,
	Stack,
	Scene
} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default props => (
	<Router titleStyle={{color: '#fff'}}>
		<Stack key='root'>
			<Scene key='login' component={FormLogin} title='Login' hideNavBar initial/>
			<Scene key='cadastro' component={FormCadastro} title='Cadastro' navTransparent/>
			<Scene key='boasVindas' component={BoasVindas} title='Seja Bem Vindo' hideNavBar/>
			<Scene key='principal' component={Principal} title='Principal' hideNavBar/>
		</Stack>
	</Router>
);
