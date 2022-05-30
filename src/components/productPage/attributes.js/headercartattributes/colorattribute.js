import { Component } from "react";
import '../../../../styles/header-cart-attributes.css'



class ColorAttribute extends Component {
    

    render(){
        const { attribute, chosenAttributes, cart } = this.props

            return(
                <div>
                    <p  className={`${cart ? 'cartAttributeName' : "headerCartAttributeName"}`}>{attribute.name.toUpperCase()}: </p>
                    <div className={`${cart ? "cartColorAttribute": "headerCartColorAttribute"}`}>
                        {attribute.items.map((item) => {
                            return(
                                <div key={item.id} 
                                     className={`${cart ? "cartColorItem" : "headerCartColorItem"} ${item.value === chosenAttributes[attribute.name] ? `${cart ? "cartChosenColor" : "headerCartChosenColor"}` : ""}`}>
                                        <div style={{backgroundColor: item.value}}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
    }
}

export default ColorAttribute
