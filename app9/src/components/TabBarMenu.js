import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions';

const TabBarMenu = props => (
  <View style={{ backgroundColor: '#115e54', elevation: 4, marginBottom: 6 }}>
    <StatusBar backgroundColor="#114d44" />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ height: 50, justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}>whatsapp</Text>
      </View>
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }} >
          <TouchableOpacity
            onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato(); }}
          >
            <Image source={require('../imgs/adicionar-contato.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, color: '#fff' }}>Sair</Text>
        </View>
      </View>
    </View>
    <TabBar {...props} indicatorStyle={{ backgroundColor: '#fff' }} style={{ backgroundColor: '#115e54', elevation: 0 }} />
  </View>
);

export default connect(null, {
  habilitaInclusaoContato,
})(TabBarMenu);
