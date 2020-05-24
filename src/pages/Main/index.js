import React from 'react'

import {View,ScrollView} from 'react-native'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import ProductList from '../../components/ProductList'
import Tabs from '../../components/Tabs'

function Main(){
    return(

    <View style={{flex:1,backgroundColor:'#f8f8fa'}}>
        <Header/>
        <ScrollView>
            <SubHeader/>
            <ProductList/>
        </ScrollView>
        
        <Tabs/>
    </View>
  
    )
}

export default Main