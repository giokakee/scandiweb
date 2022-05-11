import '../../../styles/attribute.css'
import { Component } from "react";

const sizes = [
    {
        name: 'MS'
    },
    {
        name: 'S'
    },
    {
        name: 'M'
    },
    {
        name: 'L'
    }
]

class SizeAttribute extends Component {
    constructor(props){
        super(props)


        this.state = {
            chosenSize: ''
        }
    }


    render(){
        const  { attribute } = this.props
        
        return(
            <div>
                <p className="attributeName">SIZE:</p>
                <div  className="sizeAttribute">
                    {attribute.items.map((item, i) => {
                        return(
                            <div 
                                key={item.id} 
                                className={`sizeItem ${this.state.chosenSize === item.value && 'chosenSize'}`}
                                onClick={() => this.setState({chosenSize: item.value})}>
                                <p>{sizes[i].name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default SizeAttribute