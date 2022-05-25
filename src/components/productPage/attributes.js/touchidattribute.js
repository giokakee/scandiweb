import { Component } from "react";
import '../../../styles/attribute.css'


class TouchIdAttribute extends Component {
    constructor(props){
        super(props)

        this.state = {
            touchId: ''     
        }
    }


    render(){
        const { attribute, setChosenAttribute } = this.props

        const addAttribute = (data) => {
            this.setState({touchId: data.value})
            setChosenAttribute(({attributes}) => {
                return {
                    attributes: {...attributes, [attribute.name]: data.value }
                }
            })
        }
        

        return(
            <div>
                <p  className="attributeName">{attribute.name.toUpperCase()}: </p>
                <div className="touchIdAttribute">
                    {attribute.items.map(item => {
                        return(
                            <div key={item.id} onClick={() => addAttribute(item)} className={`${this.state.touchId === item.value && 'chosenValue'}`}>
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