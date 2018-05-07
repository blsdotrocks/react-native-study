import React, { Component } from 'react';
import {
	View
} from 'react-native';
import {
	Topo,
	Resultado,
	Painel
} from './components/';

export default class App extends Component {
	constructor (props) {
		super (props);
		this.state = {num1: '', num2: '', operacao: 'soma', resultado: 'resultado'};
		//preservando contexto da função para conseguir utilizar os parametros na chamada abaixo
		this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacao = this.atualizaOperacao.bind(this);
	}

	calcular () {
		let resultado = 0;
		switch (this.state.operacao) {
			case 'soma':
				resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
				break;
			case 'subtracao':
				resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
				break;
			default: false;
		}
		this.setState({resultado: resultado.toString()});
	}

	atualizaValor (nome, value) {
		const obj = {};
		obj[nome] = value;
		this.setState(obj);
	}

	atualizaOperacao (op) {
		this.setState({operacao: op});
	}
	
	render () {
		return (
			<View>
				<Topo/>
				<Resultado resultado={this.state.resultado}/>
				<Painel
					num1={this.state.num1}
					num2={this.state.num2}
					operacao={this.state.operacao}
					calcular={this.calcular}
					atualizaValor={this.atualizaValor}
					atualizaOperacao={this.atualizaOperacao}
				/>
			</View>
		);
	}
}