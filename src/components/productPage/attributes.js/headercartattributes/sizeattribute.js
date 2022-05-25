import { Component } from "react";
import '../../../../styles/headercartattributes.css'


class SizeAttribute extends Component {
    render(){
        const  { attribute, chosenAttributes } = this.props
        
        return(
            <div>
                <p className="headerCartAttributeName">{attribute.name.toUpperCase()}: </p>
                <div  className="headerCartSizeAttribute">
                    {attribute.items.map((item) => {
                        return(
                            <div 
                                key={item.id} 
                                className={`headerCartSizeItem ${chosenAttributes[attribute.name] === item.value && 'headerCartChosenSize'}`}>
                                <p>{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SizeAttribute