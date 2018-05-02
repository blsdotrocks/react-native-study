import React, { Component } from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Principal from './components/principal';
import Sobre from './components/sobre';
import Outros from './components/outros';
import Resultado from './components/resultado';

const Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='principal' component={Principal} title='Cara ou Coroa'/>
            <Scene key='sobre' component={Sobre} title='Sobre o Jogo'/>
            <Scene key='outros' component={Outros} title='Outros Jogos'/>
            <Scene key='resultado' component={Resultado} title='Resultado'/>
        </Stack>
    </Router>
);

export default Routes;
