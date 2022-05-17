import '../styles/productCard.css'
import { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { addProductToCart } from '../reducers/cartReducer'



class Products extends Component{
    constructor(props){
        super(props)

        this.state = {
            hover: false
        }
    }


    render(){
        const { product, symbol } = this.props

        return(
            <div className="productCard"  onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
                <div className='addToCartSvg' style={this.state.hover ? {display: 'block'} : {display: 'none'}}><Link to={`/${product.category}/${product.id}`}></Link></div>
                    <Link to={`/${product.category}/${product.id}`}>
                        <div style={{overflow: 'hidden', width: '355px', display: 'flex', justifyContent:'center'}}>
                            <img className="productCard-img" src={product.gallery[0]} alt='bad' />
                        </div>
                        <div>
                            <p>{product.brand} {product.name}</p>
                                {product.prices.map((price, i) => {
                                    return(
                                        <div key={i}>{price.currency.symbol === symbol ?  <p className='price'>{price.currency.symbol} {price.amount}</p> : null }</div>
                                        )
                                    })}
                        </div>
                    </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        symbol: state.currencyReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (data) => {
            dispatch(addProductToCart(data))
        }
    }
}
 


export default connect(mapStateToProps, mapDispatchToProps)(Products)

