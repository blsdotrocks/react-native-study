import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { contatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {
  renderAdicionarContato() {
    if (!this.props.cadastro_resultado_inclusao) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              style={{ fontSize: 15, height: 45 }}
              onChangeText={texto => this.props.contatoEmail(texto)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="Adicionar"
              color="#115e54"
              onPress={() => this.props.adicionaContato(this.props.email)}
            />
            <Text style={{ color: '#ff0000', fontSize: 15, textAlign: 'center' }}>
              {this.props.cadastro_resultado_txt_erro}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={{ fontSize: 15, textAlign: 'center' }}>Cadastro realizado com sucesso</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        {this.renderAdicionarContato()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AppReducer.email,
  cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
  cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao,
});

export default connect(mapStateToProps, {
  contatoEmail,
  adicionaContato,
})(AdicionarContato);
