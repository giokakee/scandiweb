import { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: true
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
            <OutsideClickHandler onOutsideClick={outsideClickHandler}>
                <div className={this.state.open ? 'cartShadow' : 'nonDisplay'}></div>
                    <div className="header-cart">
                        <div onClick={open} className='cart-logo'>
                                {cart.length > 0 && <span className="bagItems">{cart.length}</span>}
                        </div>

                        {this.state.open && <div className="cart-dropDown">
                                                <div>
                                                <p>My Bag, {cart.length} items</p>
                                                </div>
                                                <div className="cart-dropDown-product">
                                                    {cart.map(product => {
                                                        return(
                                                            <img key={product.id} src={product.gallery[0]} alt='product' style={{width: '121px'}} />
                                                        )
                                                    })}
                                                </div>
                                            </div>}                                          
                    </div>
            </OutsideClickHandler>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    }
}
 
export default connect(mapStateToProps)(Cart)