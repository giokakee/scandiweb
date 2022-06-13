import { Component } from "react";
import "../../../styles/attribute.css";

class ColorAttribute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenColor: "",
    };
  }

  render() {
    const { attribute, setChosenAttribute } = this.props;
    const { chosenColor } = this.state;
    const setAttribute = (data) => {
      this.setState({ chosenColor: data.value });
      setChosenAttribute(({ attributes }) => {
        return {
          attributes: { ...attributes, [attribute.name]: data.value },
        };
      });
    };

    return (
      <div>
        <p className='attributeName'>{attribute.name.toUpperCase()}: </p>
        <div className='colorAttribute'>
          {attribute.items.map((item, i) => {
            return (
              <div
                onClick={() => setAttribute(item)}
                key={item.id}
                className={`colorItem ${
                  item.value === chosenColor ? "chosenColor" : ""
                }`}>
                <div style={{ backgroundColor: item.value }}></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorAttribute;
