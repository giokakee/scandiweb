import { Component } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Categories from "./body.categories";
import SingleProduct from "./productPage/singleproduct";
import ProductCart from './cart/cart'
import axios from "axios";
import { ALL_PRODUCT_ID, CATEGORIES, URL } from "../gql/gql";


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
            loading: true,
            productsId: []
        }
    }

    async componentDidMount(){
        try{
         let data = await axios.post(URL, {
             query: CATEGORIES
           })

           let productsId = await axios.post(URL, {
            query: ALL_PRODUCT_ID,
            variables: {title: 'all'}
          })
           this.setState({categories: data.data.data.categories, productsId: productsId.data.data.category.products , loading: false})

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
                                        
                                              {this.state.productsId.map((product, i) => {
                                                        return(
                                                            <Route key={i} path={`/:categoryname/${product.id}`} element={<SingleProduct id={product.id} />} />
                                                        )
                                                    })}
                                            <Route path="/cart"  element={<ProductCart />} />
                                        </Routes>}
            </div>
        )
    }
}

export default Body