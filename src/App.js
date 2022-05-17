import './App.css'
import { useQuery } from '@apollo/client'
import {  useEffect } from 'react'
import { connect } from 'react-redux'
import Body from './components/body'
import { GET_ALL_PRODUCTS } from './gql/gql'
import { initProducts } from './reducers/productsReducer'
import Header from './components/header/Header'




const App = ({init, cart}) => {

  const { data, loading, error, } = useQuery(GET_ALL_PRODUCTS)

  useEffect(() => {
    if(data){
      init(data.categories)
    }
  }, [data, init])
  
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  return (
    <div>
      {data &&<div>
                <Header />
                <Body categories={data.categories} />
              </div>}
      {loading && <div>
                    <h1>loading</h1>
                  </div>}
      {error && <div>
                  <h1>error</h1>
                </div>}

    </div>
  )
}


const mapStateToPtops = (state) => {
  return {
    cart: state.cartReducer,
    currency: state.currencyReducer
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    init: (data) => {
      dispatch(initProducts(data))
    }
  }
}

export default connect(mapStateToPtops, mapDispatchToProps)(App)
