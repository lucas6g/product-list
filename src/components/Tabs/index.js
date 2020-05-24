import React from 'react'
import {View} from 'react-native'

import estilo from './estilo'
import { FontAwesome } from '@expo/vector-icons';
//barra de navegação com abas

const Tabs = () =>{
    return(
        <View style={estilo.container}>
            <FontAwesome name="clone" size={16}  style={[estilo.icon,estilo.ative]}/>
            <FontAwesome name="search" size={16}  style={[estilo.icon]}/>
           <View style={estilo.mainIconContainer}>
             <FontAwesome name="plus" size={16}  style={estilo.mainIcon}/>
           </View>
           
            <FontAwesome name="bell-o" size={16}  style={estilo.icon}/>
            <FontAwesome name="user-o" size={16}  style={estilo.icon}/>
        </View>
    )
}

export default Tabs

