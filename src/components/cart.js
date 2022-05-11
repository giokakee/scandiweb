import { Component } from "react";
import { connect } from "react-redux";
import {deleteProduct} from '../reducers/cartReducer'



class ProductCart extends Component {




    render(){
        const { cart, deleteProductFromCart } = this.props
        console.log(cart)
        return(
            <div>
                {cart.map((product, i) => {
                    return (
                        <div key={i}>
                            {product.id}
                            <button onClick={() => deleteProductFromCart(product.id)} >delete product</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}



const mapStateTpProps = state => {
    return {
        cart: state.cartReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProductFromCart: (id) => {
            dispatch(deleteProduct(id))
        }
    }
}

export default connect(mapStateTpProps, mapDispatchToProps)(ProductCart)