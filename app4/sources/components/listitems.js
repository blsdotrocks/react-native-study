import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';
import axios from 'axios';
import Items from './items';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {listItems: []};
  }

  componentWillMount() {
    //requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => {this.setState({listItems: response.data})})
    .catch(error => {console.log(error)})
  }
  render() {
    return (
			<ScrollView style={{backgroundColor: '#DDD'}}>
				{this.state.listItems.map(item => (<Items key={item.titulo} item={item}/>))}
			</ScrollView>
    );
  }
}
