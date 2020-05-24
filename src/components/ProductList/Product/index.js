import React from 'react'

import {View,Image,Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import estilo from './estilo'

const Product = (props) =>{
    const {prod} = props
    return(
       <View style={estilo.container}>
           <Ionicons name="ios-checkmark-circle-outline" size={24} style={estilo.checkIcon} />
           <View style={estilo.imageContainer}>
                <Image source={{uri:prod.image}} style={estilo.image}/>

           </View>

           <View style={estilo.infoContainer}>
                <Text style={estilo.title}>{prod.title}</Text>
                <Text style={estilo.description}>{prod.description}</Text>
                <Text style={estilo.price}>{prod.price}</Text>

           </View>
       </View> 
    )
}

export default Product
