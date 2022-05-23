import '../../styles/singleProduct.css'
import { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../../reducers/cartreducer";
import Attribute from './attribute';
import axios from 'axios';
import { PRODUCT_BY_ID, URL } from '../../gql/gql';
import parse from 'html-react-parser'




class SingleProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            imgNum: 0,
            attributes: {},
            product: {},
            loading: true
        }
    }

    async componentDidMount(){
        try {
            const data = await axios.post(URL, {
                query: PRODUCT_BY_ID,
                variables: {id: this.props.id}
            })

            this.setState({product: data.data.data.product, loading: false })
        }catch(err) {
                console.log({message: err.message})
        }
    }





    render(){
        
        const {  add, currency } = this.props
        const {product} = this.state
        
        const addProduct = () => { 
            let productToAdd = {...product, chosenAttributes: this.state.attributes, amount: 1 }

            let defaultAttributes={}

            if(Object.keys(product.attributes).length >1){
                product.attributes.map(mp => {
                    defaultAttributes[mp.name] = mp.items[0].value
                    return null
                })
                productToAdd.chosenAttributes = {...defaultAttributes, ...this.state.attributes}
                add(productToAdd)
            }else{
                alert('Choose attributes')
            }
        }

        return(
            <div>
                {this.state.loading ? <div className='spin'></div>

                                    : <div className='singleProduct'>
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
                                                {product.prices.map((mp, i) => {
                                                    let toShow = mp.currency.symbol === currency
                                                    return(
                                                        <p key={i}>{toShow && mp.currency.symbol} {toShow && mp.amount}</p>
                                                    )
                                                })}
                                                {!product.inStock && <p className='outOfStock'>Sorry, this item is out of stock</p>}
                                            </div> 
                        
                                                
                        
                                            <button disabled={product.inStock? false : true} className='addToCartButton' onClick={addProduct}>add to cart</button>
                                            <div className='description' >{parse(product.description)}</div>
                                        </div>
                                    </div>}
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
