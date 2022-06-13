import { Component } from "react";
import "../../../../styles/header-cart-attributes.css";

class CapacityAttribute extends Component {
  render() {
    const { attribute, chosenAttributes, cart } = this.props;

    return (
      <div>
        <p
          className={`${
            cart ? "cartAttributeName" : "headerCartAttributeName"
          }`}>
          {attribute.name.toUpperCase()}:{" "}
        </p>
        <div
          className={
            cart ? "cartCapacityAttribute" : "headerCartCapacityAttribute"
          }>
          {attribute.items.map((item) => {
            return (
              <div
                key={item.id}
                className={`${
                  cart ? "cartCapacityItem" : "headerCartCapacityItem"
                } ${
                  chosenAttributes[attribute.name] === item.value
                    ? `${
                        cart ? "cartChosenCapacity" : "headerCartChosenCapacity"
                      }`
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

export default CapacityAttribute;
