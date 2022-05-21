import { Component } from "react";
import '../../../styles/headerCartAttributes.css'


export class TouchIdAttribute extends Component {

    render(){
        const { attribute, chosenAttributes } = this.props



        return(
            <div>
                <p  className="attributeName">{attribute.name.toUpperCase()}: </p>
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



export class PortsAttribute extends Component {
    render(){
        const { attribute, chosenAttributes } = this.props
        return(
            <div>
                <p  className="attributeName">{attribute.name.toUpperCase()}: </p>
                <div className="headerCartPortAttribute">
                    {attribute.items.map(item => {
                        return(
                            <div key={item.id} className={`${chosenAttributes[attribute.name] === item.value && 'headerCartChosenValue'}`}>
                                <p>{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export class ColorAttribute extends Component {
    

    render(){
        const { attribute, chosenAttributes } = this.props

            return(
                <div>
                    <p  className="attributeName">{attribute.name.toUpperCase()}: </p>
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


export class CapacityAttribute extends Component {

    render(){
        const { attribute, chosenAttributes } = this.props

        return(
            <div>
                <p className="attributeName">{attribute.name.toUpperCase()}: </p>
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



export class SizeAttribute extends Component {
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