import { Component } from "react";
import "../../../styles/attribute.css";

class SizeAttribute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSize: "",
    };
  }

  render() {
    const { attribute, setChosenAttribute } = this.props;
    const addAttribute = (data) => {
      this.setState({ chosenSize: data.value });
      setChosenAttribute(({ attributes }) => {
        return {
          attributes: { ...attributes, [attribute.name]: data.value },
        };
      });
    };

    return (
      <div>
        <p className='attributeName'>{attribute.name.toUpperCase()}: </p>
        <div className='sizeAttribute'>
          {attribute.items.map((item) => {
            return (
              <div
                key={item.id}
                className={`sizeItem ${
                  this.state.chosenSize === item.value && "chosenSize"
                }`}
                onClick={() => addAttribute(item)}>
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
