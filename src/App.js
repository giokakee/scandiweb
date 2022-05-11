import './App.css'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Body from './components/body'
import { GET_ALL_PRODUCTS } from './gql/gql'
import { initProducts } from './reducers/productsReducer'
import Header from './components/header/Header'




const App = ({init}) => {

  const { data } = useQuery(GET_ALL_PRODUCTS)

  useEffect(() => {
    if(data){
      init(data.categories)
    }
  }, [data, init])


  return (
    <div>
      {data
       ?  <div>
            <Header />
            <Body categories={data.categories} />
          </div>
       : <h1>error</h1> }
    </div>
  )
}


const mapStateToPtops = (state) => {
  return {
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
