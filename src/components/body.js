import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Categories from "./body.categories";
import SingleProduct from "./productPage/singleProduct";
import ProductCart from './cart/cart'


class Body extends Component {

    render(){
        const { categories } = this.props
        return(
            <Routes>
                <Route path="/" element={<Navigate to={`/${categories[0].name}`} />} />
                {this.props.categories.map((category, i) => {
                    return(
                        <Route key={i} path={`/${category.name}`} element={<Categories category={category.name} />} />
                    )
                })}
                
                {categories.map((category, i) => {
                    return  category.products.map((product, i) => {
                                return(
                                    <Route key={i} path={`/${product.category}/${product.id}`} element={<SingleProduct product={product} />} />
                                )
                            })
                        })}
                    <Route path="/cart" element={<ProductCart />} />
            </Routes>
        )
    }
}

export default Body