import { Component } from "react";

class CapacityAttribute extends Component {
    constructor(props){
        super(props)

        this.state = {
            chosenCapacity: ''
        }
    }


    render(){
        const  { items } = this.props.attribute
        
        return(
            <div>
                <p className="attributeName">CAPACITY:</p>
                <div className="capacityItem">
                    {items.map(item => {
                        return(
                            <div key={item.id} onClick={() => this.setState({chosenCapacity: item.value})} 
                                 className={`${this.state.chosenCapacity === item.value && 'chosenCapacity' }`}>
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