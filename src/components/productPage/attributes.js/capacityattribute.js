import { Component } from "react";
import "../../../styles/attribute.css";

class CapacityAttribute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenCapacity: "",
    };
  }

  render() {
    const { attribute, setChosenAttribute } = this.props;
    const selectCapacity = (data) => {
      this.setState({ chosenCapacity: data.value });
      setChosenAttribute(({ attributes }) => {
        return {
          attributes: { ...attributes, [attribute.name]: data.value },
        };
      });
    };

    return (
      <div>
        <p className='attributeName'>{attribute.name.toUpperCase()}: </p>
        <div className='capacityItem'>
          {attribute.items.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => selectCapacity(item)}
                className={`${
                  this.state.chosenCapacity === item.value && "chosenCapacity"
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
