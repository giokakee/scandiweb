import { Component } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Categories from "./body.categories";
import SingleProduct from "./productPage/singleproduct";
import ProductCart from './cart/cart'
import axios from "axios";
import { CATEGORIES, URL } from "../gql/gql";
import { connect } from "react-redux";


const CategoryWithPath = () => {

    const {pathname} = useLocation()
    return(
        <Categories category={pathname.slice(1)} />
    )
}


class Body extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: [],
            loading: true
        }
    }

    async componentDidMount(){
        try{
         let data = await axios.post(URL, {
             query: CATEGORIES
           })
           this.setState({categories: data.data.data.categories, loading: false})
        }catch(err){
            console.log({message: err.message})
        }
     }

    render(){
        return( 
            <div>
                {this.state.loading ? <div className="spin"></div>
                                    : <Routes>
                                        <Route path="/" element={<Navigate to={`/${this.state.categories[0].name}`} />} />
                                        {this.state.categories.map((category, i) => {
                                            return(
                                                <Route key={i} path={`/${category.name}`} element={<CategoryWithPath />} />
                                            )
                                        })}
                                        
                                        {this.state.categories.map((category, i) => {
                                            return  category.products.map((product, i) => {
                                                        return(
                                                            <Route key={i} path={`/${product.category}/${product.id}`} element={<SingleProduct product={product} id={product.id} />} />
                                                        )
                                                    })
                                                })}
                                            <Route path="/cart"  element={<ProductCart />} />
                                        </Routes>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryName: state.categoryReducer
    }
}

export default connect(mapStateToProps)(Body)