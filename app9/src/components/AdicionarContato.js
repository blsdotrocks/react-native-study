import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { contatoEmail } from '../actions/AppActions';

const AdicionarContato = props => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput
        value={props.email}
        placeholder="E-mail"
        style={{ fontSize: 15, height: 45 }}
        onChangeText={texto => props.contatoEmail(texto)}
      />
    </View>
    <View style={{ flex: 1 }}>
      <Button
        title="Adicionar"
        color="#115e54"
        onPress={() => false}
      />
    </View>
  </View>
);

const mapStateToProps = state => ({
  email: state.AppReducer.email,
});

export default connect(mapStateToProps, {
  contatoEmail,
})(AdicionarContato);
