import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {
  componentWillMount() {
    this.props.contatosUsuarioFetch();
    this.criaDataSource(this.props.contatos);
  }

  componentWillReceiveProps(nextProps) {
    this.criaDataSource(nextProps.contatos);
  }

  criaDataSource(contatos) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.fonteDeDados = ds.cloneWithRows(contatos);
  }

  renderRow(contato) {
    return (
      <TouchableOpacity onPress={() => Actions.conversa()}>
        <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#ccc" }}>
          <Text style={{ fontSize: 25 }}>{contato.nome}</Text>
          <Text style={{ fontSize: 18 }}>{contato.email}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.fonteDeDados}
          renderRow={data => this.renderRow(data)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { contatos };
};

export default connect(mapStateToProps, {
  contatosUsuarioFetch,
})(Contatos);
