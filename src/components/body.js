import { Component } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import Categories from "./body.categories";
import SingleProduct from "./productPage/singleproduct";
import ProductCart from "./cart/cart";
import axios from "axios";
import { CATEGORIES, URL } from "../gql/gql";

const CategoryWithPath = () => {
  const { categoryName } = useParams();
  return <Categories category={categoryName} />;
};

const ProductWithParams = () => {
  const { productId } = useParams();
  return <SingleProduct id={productId} />;
};

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      let data = await axios.post(URL, {
        query: CATEGORIES,
      });

      this.setState({
        categories: data.data.data.categories,
        loading: false,
      });
    } catch (err) {
      console.log({ message: err.message });
    }
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className='spin'></div>
        ) : (
          <Routes>
            <Route
              path='/'
              element={<Navigate to={`/${this.state.categories[0].name}`} />}
            />
            {this.state.categories.map((category, i) => {
              return (
                <Route
                  key={i}
                  path={`/:categoryName`}
                  element={<CategoryWithPath />}
                />
              );
            })}

            <Route
              path={`/:categoryname/:productId`}
              element={<ProductWithParams />}
            />
            <Route path='/cart' element={<ProductCart />} />
          </Routes>
        )}
      </div>
    );
  }
}

export default Body;
