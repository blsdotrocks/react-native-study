import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
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

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.fonteDeDados}
          renderRow={data => (
            <View>
              <Text>{data.nome}</Text>
              <Text>{data.email}</Text>
            </View>
          )}
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
