import { Component } from "react";
import "../../../../styles/header-cart-attributes.css";
import "../../../../styles/cart-attributes.css";

class SizeAttribute extends Component {
  render() {
    const { attribute, chosenAttributes, cart } = this.props;

    return (
      <div>
        <p
          className={` ${
            cart ? "cartAttributeName" : "headerCartAttributeName"
          }`}>
          {attribute.name.toUpperCase()}:{" "}
        </p>
        <div
          className={` ${
            cart ? "cartSizeAttribute" : "headerCartSizeAttribute"
          }`}>
          {attribute.items.map((item) => {
            return (
              <div
                key={item.id}
                className={` ${cart ? "cartSizeItem" : "headerCartSizeItem"} ${
                  chosenAttributes[attribute.name] === item.value
                    ? "headerCartChosenSize"
                    : ""
                }`}>
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SizeAttribute;
