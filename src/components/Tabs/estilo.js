import {StyleSheet} from 'react-native'

import {metrics ,colors } from '../../styles' 

const estilo = StyleSheet.create({
    
    container:{
        backgroundColor:colors.white,
        height:metrics.tabBarHeight,
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:colors.lighter,
        justifyContent:'space-around',
        alignItems:"center"

    },
    icon:{
        color:colors.light,
    },
    ative:{
        color:colors.primary
    },


    mainIconContainer:{
        width:40,
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.primary,
        color:colors.white
        
    },
    mainIcon:{
        color:colors.white
    }

})

export default estilo

