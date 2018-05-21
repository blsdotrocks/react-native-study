import React from 'react';
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';

export default props => (
  <Router titleStyle={{ color: '#fff' }} navigationBarStyle={{ backgroundColor: '#115e54' }}>
    <Stack key="root">
      <Scene key="login" component={FormLogin} title="Login" hideNavBar initial />
      <Scene key="cadastro" component={FormCadastro} title="Cadastro" navTransparent />
      <Scene key="boasVindas" component={BoasVindas} title="Seja Bem Vindo" hideNavBar />
      <Scene key="principal" component={Principal} title="Principal" hideNavBar />
      <Scene key="adicionarContato" component={AdicionarContato} title="Adicionar Contato" />
      <Scene key="conversa" component={Conversa} title="Conversa" />
    </Stack>
  </Router>
);
