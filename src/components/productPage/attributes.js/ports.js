import { Component } from "react";

class PortsAttribute extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: ''     
        }
    }


    render(){
        const { attribute } = this.props
        console.log(attribute)
        console.log(this.state.value)
        return(
            <div>
                <p  className="attributeName">{attribute.name}</p>
                <div className="portAttribute">
                    {attribute.items.map(item => {
                        return(
                            <div key={item.id} onClick={() => this.setState({value: item.value})} className={`${this.state.value === item.value && 'chosenValue'}`}>
                                <p>{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default PortsAttribute