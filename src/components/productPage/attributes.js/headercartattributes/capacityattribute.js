import { Component } from "react";
import '../../../../styles/headercartattributes.css'





class CapacityAttribute extends Component {

    render(){
        const { attribute, chosenAttributes } = this.props

        return(
            <div>
                <p className="headerCartAttributeName">{attribute.name.toUpperCase()}: </p>
                <div className="headerCartCapacityItem">
                    {attribute.items.map(item => {
                            return(
                                <div key={item.id} 
                                    className={`${chosenAttributes[attribute.name] === item.value  && 'headerCartChosenCapacity' }`}>
                                    <p>{item.value}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default CapacityAttribute


