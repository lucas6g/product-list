import React,{useState} from 'react'

import {View} from 'react-native'
import estilo from './estilo'

import Product from './Product'

function ProductList(){
    const [products,setProducts] = useState([{
        id: 1,
        image: 'https://images-americanas.b2w.io/produtos/01/00/img/1528615/9/1528615901_1SZ.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 2,
        image: 'https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw2529c803/RK9290_522_24.jpg?imwidth=914&impolicy=product',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 3,
        image: 'https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw40c4b7af/L1212_T01_24.jpg?imwidth=914&impolicy=product',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$30,00',
      },
      {
        id: 5,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 6,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 7,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
    
    
    ])

      return(
          <View style={estilo.container}>
              {products.map((produto)=>{
                  return(
                     <Product key={produto.id} prod={produto}/>
                  )
              })}
          </View>
      )


}

export default ProductList



