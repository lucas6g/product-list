import React from 'react'
import { TouchableOpacity,Text } from 'react-native'

import estilo from './estilo'

const Button = (props) =>{
  const {children,type,style} = props
   
    return (

      <TouchableOpacity style={[
        estilo.container,
        style,
        type ? estilo[`button-${type}`] : {}
        
        ]}>
          <Text style={[
            estilo.buttonText,
            type ? estilo[`text-${type}`] : {}
            
            ]}>{children}</Text>
      </TouchableOpacity>
    )
}


export default Button