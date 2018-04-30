/**
*	Sample React Native App
*	https://github.com/facebook/react-native
*	@flow
*/

import React, { Component } from 'react';
import {
	Text
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaPrincipal from './sources/components/CenaPrincipal';
import CenaClientes from './sources/components/CenaClientes';
import CenaContatos from './sources/components/CenaContatos';
import CenaEmpresa from './sources/components/CenaEmpresa';
import CenaServicos from './sources/components/CenaServicos';

export default class App extends Component {
	render() {
		return (
			//<CenaClientes/>
			<Navigator
				initialRoute={{id: 'principal'}}
				renderScene={(route, navigator) => {
					switch (route.id) {
						case 'principal':
							return (<CenaPrincipal navigator={navigator}/>);
						break;

						case 'cliente':
							return (<CenaClientes navigator={navigator}/>);
						break;
						
						case 'contato':
							return (<CenaContatos navigator={navigator}/>);
						break;
						
						case 'empresa':
							return (<CenaEmpresa navigator={navigator}/>);
						break;

						case 'servicos':
							return (<CenaServicos navigator={navigator}/>);
						break;

						default:
							return false;
					}
				}}
			/>
		);
	}
}
