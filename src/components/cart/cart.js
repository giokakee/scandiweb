import '../../styles/cart.css'
import { Component } from "react";
import { connect } from "react-redux";
import { deleteProductFromCart } from '../../reducers/cartreducer'
import CartProduct from './cartProduct'


class ProductCart extends Component {




    render(){
        const { cart, symbol } = this.props

        let total = cart.map(mp => {
            return mp.prices.find(f => f.currency.symbol === symbol).amount * mp.amount
        }).reduce((a,b) => {
            return a+b
        },0).toFixed(2)


        let quantity = cart.map(product => {
            return product.amount
        }).reduce((a,b) => {
            return a+b
        },0)

        let tax = (a,b) => {
           return (b/100 * a).toFixed(2)
        }



        return(
            <div>
                <h1>CART</h1>
                <div>
                    {cart.map((product, i) => {
                        return (
                                <CartProduct key={i} product={product}  />
                        )
                    })}
                </div>
                <div className='cart-bottom' >
                    <div>
                        <p>Tax: 21%:</p>
                        <span>{symbol}{total > 0 ? tax(21, total) : 0}</span> 
                    </div>
                    <div>
                        <p>Quantity:</p>
                        <span>{quantity}</span>
                    </div>
                    <div>
                        <p >Total: </p>
                        <span className='total'>{symbol}{total}</span>
                    </div>
                        <button>ORDER</button>
                </div>  
            </div>
        )
    }
}



const mapStateTpProps = state => {
    return {
        cart: state.cartReducer,
        symbol: state.currencyReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProductFromCart: (data) => {
            dispatch(deleteProductFromCart(data))
        }
    }
}


export default connect(mapStateTpProps, mapDispatchToProps)(ProductCart)