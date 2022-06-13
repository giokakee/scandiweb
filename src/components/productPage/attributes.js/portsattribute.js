import { Component } from "react";
import "../../../styles/attribute.css";

class PortsAttribute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    const { attribute, setChosenAttribute } = this.props;

    const addAttribute = (data) => {
      this.setState({ value: data.value });
      setChosenAttribute(({ attributes }) => {
        return {
          attributes: { ...attributes, [attribute.name]: data.value },
        };
      });
    };

    return (
      <div>
        <p className='attributeName'>{attribute.name.toUpperCase()}: </p>
        <div className='portAttribute'>
          {attribute.items.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => addAttribute(item)}
                className={`${
                  this.state.value === item.value && "chosenValue"
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

export default PortsAttribute;
