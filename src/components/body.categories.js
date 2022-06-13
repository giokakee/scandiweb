import "../styles/category.css";
import { Component } from "react";
import Products from "./body.products";
import { BY_CATEGORY, URL } from "../gql/gql";
import axios from "axios";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      category: {},
      categoryName: "",
    };
  }

  async componentDidMount() {
    try {
      const data = await axios.post(URL, {
        query: BY_CATEGORY,
        variables: { title: this.props.category },
      });
      if (data.data.data.category) {
        this.setState({ category: data.data.data.category, loading: false });
      }
    } catch (err) {
      console.log({ message: err.message });
    }
  }

  async componentDidUpdate() {
    if (this.props.category !== this.state.categoryName) {
      this.setState({ categoryName: this.props.category });

      try {
        const data = await axios.post(URL, {
          query: BY_CATEGORY,
          variables: { title: this.props.category },
        });

        if (data.data.data.category) {
          this.setState({ category: data.data.data.category, loading: false });
        }
      } catch (err) {
        console.log({ message: err.message });
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className='spin'></div>
        ) : (
          <div>
            <h1>{this.state.categoryName.toUpperCase()}</h1>
            <div className='categoryPage'>
              {this.state.category.products.map((product, i) => {
                return <Products key={i} product={product} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Categories;
