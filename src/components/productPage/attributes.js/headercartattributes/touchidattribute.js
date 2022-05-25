import { Component } from "react";
import '../../../../styles/headercartattributes.css'



class TouchIdAttribute extends Component {

    render(){
        const { attribute, chosenAttributes, cart } = this.props



        return(
            <div>
                <p  className={cart ? "cartAttributeName" : "headerCartAttributeName"}>{attribute.name.toUpperCase()}: </p>
                <div className="headerCartTouchIdAttribute">
                    {attribute.items.map(item => {
                        return(
                            <div key={item.id}className={`${chosenAttributes[attribute.name] === item.value && 'headerCartChosenValue'}`}>
                                <p>{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TouchIdAttribute