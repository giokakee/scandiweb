import { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { connect } from "react-redux";
import HeaderCartProduct from "./header-cart-product";


class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }


    render(){


        const { cart } = this.props
        const outsideClickHandler = () => {
            this.setState({open: false})
        }
        const open = () => {
            this.setState({open: !this.state.open})
        }
        return(
            <div>
                <div className={this.state.open ? 'cartShadow' : 'nonDisplay'}></div>
                <OutsideClickHandler onOutsideClick={outsideClickHandler}>
                        <div className="header-cart">
                            <div onClick={open} className='cart-logo'>
                                    {cart.length > 0 && <span className="bagItemsCounter">{cart.length}</span>}
                            </div>

                            {this.state.open && <HeaderCartProduct open={open} />}
                                
                        </div>
                </OutsideClickHandler>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    }
}
 
export default connect(mapStateToProps)(Cart)
