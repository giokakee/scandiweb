import { Component } from "react";
import { connect } from "react-redux";
import { decreaseAmount, increaseAmount } from "../../reducers/cartreducer";

class Counter extends Component {

    render(){

        const {increase, decrease, product} = this.props

        return(
            <div className="cart-dropDown-product-counter">
                <div className="cart-dropDown-product-counter-plus" onClick={() => increase(product) }>+</div>
                <div>{product.amount}</div>
                <div className="cart-dropDown-product-counter-minus" onClick={() => decrease(product)}>-</div>
            </div>
        )
    }
}

const mapDispatchToPtops = dispatch => {
    return {
        increase: (data) => {
            dispatch(increaseAmount(data))
        },
        decrease: (data) => {
            dispatch(decreaseAmount(data))
        }
    }
}


export default connect(null, mapDispatchToPtops)(Counter)