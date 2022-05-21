import { Component } from "react";
import { connect } from "react-redux";
import HeaderCartAttribute from "../header/headercartattribute";
import Counter from "../header/counter";


class CartProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            imgNum: 0
        }
    }




    render(){

        const { product, currency } = this.props
        const { imgNum } = this.state
        const priceToShow = product.prices.find(price => price.currency.symbol === currency)


        return(
                <div className='cart-product-container'>
                    <div className="cart-product-info">
                        <div className="cart-product-brand">{product.brand}</div>
                        <div className="cart-product-name">{product.name}</div>
                        <p className="cart-product-price">{priceToShow.currency.symbol} {priceToShow.amount}</p>
                        <div>
                            {product.attributes.map(attribute => {
                                return(
                                    <div key={attribute.id}>
                                        <HeaderCartAttribute attribute={attribute} chosenAttributes={product.chosenAttributes} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="cart-product-counter-image">
                        <Counter amount={product.amount} product={product} />
                        <div>
                            <img key={product.id} src={product.gallery[imgNum]} alt='product' style={{width: '200px', marginLeft: '25px'}} />
                            <div className="cart-product-changePhoto">
                                <button onClick={() => imgNum > 0 && this.setState({imgNum: imgNum - 1})}>{"<"}</button>
                                <button onClick={() => imgNum+1 < product.gallery.length && this.setState({imgNum: imgNum + 1})}>{">"}</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        symbol: state.currencyReducer,
        currency: state.currencyReducer
    }
}


export default connect(mapStateToProps)(CartProduct)