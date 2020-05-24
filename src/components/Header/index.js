import React from 'react'

import {View,Text} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import estilo from './estilo'

const Header =() => (
//  sempre colocar um container por volta do componente
    <View style={estilo.container} >
        <Ionicons name="ios-arrow-round-back" size={24} style={estilo.icon}/>
        <Text style={estilo.title} >Profile</Text>
        <Ionicons name="ios-more" size={24} style={estilo.icon}/>
    </View>
  

)

export default Header

