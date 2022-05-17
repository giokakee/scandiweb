import '../../styles/singleProduct.css'
import { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../../reducers/cartReducer";
import Attribute from './attribute';




class SingleProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            imgNum: 0,
            attributes: {}
        }
    }




    render(){
        
        const { product, add, currency } = this.props
        const priceToShow = product.prices.find(price => price.currency.symbol === currency)
        const addProduct = () => { 
            let productToAdd = {...product, chosenAttributes: this.state.attributes, amount: 1 }
            console.log(productToAdd)

            if(Object.keys(product.attributes).length === Object.keys(this.state.attributes).length){ 
                add(productToAdd)
            }else{
                alert('Choose attributes')
            }
        }

        return(
            <div className='singleProduct'>
                <div className='imageContainer'>
                    <div className='imageList'>
                        {product.gallery.map((image, i ) => {
                            return(
                                <img    onClick={() => this.setState({imgNum: i})} 
                                        className={`smallImage  ${i === this.state.imgNum && 'imageToShow'}`  } 
                                        key={i} 
                                        alt='err' 
                                        src={image} />
                            )
                        })}
                    </div>
                    <div className="bigImage">
                        {product.gallery.map((image, i ) => {
                            return(
                                <img    className='bigImage-img' 
                                        key={i} alt='err' 
                                        src={image} 
                                        style={this.state.imgNum === i ? {display: 'block'} :{display: 'none'} } />
                            )
                        })}
                    </div>
                </div>
                <div className="about">
                    <p className='brandName'>{product.brand}</p>
                    <p className='productName'>{product.name}</p>
                    <div>
                        {product.attributes.map((attribute, i) => {
                            return(
                                    <Attribute key={i} attribute={attribute} id={product.id} setChosenAttribute={(data) => this.setState(data)} />
                            )
                        })}
                    </div>


                    <div>
                        <p>PRICE:</p>
                        <p>{priceToShow.currency.symbol} {priceToShow.amount}</p>
                    </div> 



                    <button className='addToCartButton' onClick={addProduct}>add to cart</button>
                    <div className='description' dangerouslySetInnerHTML={{__html: product.description}}></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currency: state.currencyReducer
    }
}


const mapDispatchToPtops = dispatch => {
    return{
        add: (data) => {
            dispatch(addProductToCart(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToPtops)(SingleProduct)
