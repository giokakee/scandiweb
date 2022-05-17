import '../styles/category.css'
import { Component } from "react"
import { connect } from "react-redux"
import Products from "./body.products"


class Categories extends Component {




    render(){

        const { category, categories } = this.props
        const categoryToShow = categories.find( c => c.name === category)
        
        return(
            <div>
                {categoryToShow && <div>
                                        <h1>{category.toUpperCase()}</h1>
                                            <div  className="categoryPage">
                                                {categoryToShow.products.map((product, i) => {
                                                    return(
                                                        <Products key={i} product={product} />
                                                    )
                                                })}
                                            </div>
                                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state  => {
    return {
        categories: state.productsReducer
    }
}



export default connect(mapStateToProps)(Categories)