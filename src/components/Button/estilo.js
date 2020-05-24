import {StyleSheet} from 'react-native'

import {metrics, fonts ,colors } from '../../styles' 

const estilo = StyleSheet.create({
   
    container:{
        height:31,
        backgroundColor:colors.primary,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:metrics.padding
    },

    'button-outline':{
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.primary
    },
    buttonText:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:fonts.small
    },

    'text-outline':{
       color:colors.primary
    }

})

export default estilo