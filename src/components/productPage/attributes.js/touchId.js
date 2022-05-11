import { Component } from "react";

class TouchIdAttribute extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: ''     
        }
    }


    render(){
        const { attribute } = this.props

        return(
            <div>
                <p  className="attributeName">{attribute.name}</p>
                <div className="touchIdAttribute">
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


export default TouchIdAttribute