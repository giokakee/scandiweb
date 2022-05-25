import { Component } from "react";
import '../../../../styles/headercartattributes.css'



class ColorAttribute extends Component {
    

    render(){
        const { attribute, chosenAttributes } = this.props

            return(
                <div>
                    <p  className="headerCartAttributeName">{attribute.name.toUpperCase()}: </p>
                    <div className="headerCartColorAttribute">
                        {attribute.items.map((item, i) => {
                            return(
                                <div key={item.id} 
                                     className={`headerCartColorItem ${item.value === chosenAttributes[attribute.name] && 'headerCartChosenColor'}`}>
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
