import React from 'react'

import {View,Image,Text} from 'react-native'

import estilo from './estilo'

import Button from '../../components/Button'

const SubHeader = () =>(

    <View style={estilo.container}>
        <Image style={estilo.avatar} source={{uri:'https://img.r7.com/images/2017/11/09/76m0czgbn3_6inpb9o649_file'}} />

        <View style={estilo.profileInfo}>
            <Text style={estilo.nome}>Lucas Santos</Text>
            <Text style={estilo.bio}>Programando na rockentseat</Text>

            <View style={estilo.buttonContainer}>
                    <Button style={estilo.primeiroBotao} >Mensagem</Button>
                    <Button type="outline">Seguir</Button>
            </View>
        </View>
    </View>
)

export default SubHeader

