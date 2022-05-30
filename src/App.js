import './App.css'
import {  Component } from 'react'
import { connect } from 'react-redux'
import Body from './components/body'
import Header from './components/header/header'





class App extends Component{

  componentDidUpdate(){
    window.localStorage.setItem('cart', JSON.stringify(this.props.cart))
  }


  render(){
    return (
      <div>
          <Header />
          <Body />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer
  }
}





export default connect(mapStateToProps)(App)
