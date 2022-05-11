import { Component } from "react";

class ColorAttribute extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            chosenColor: ''
        }
    }


    render(){
        const  { attribute } = this.props
        const { chosenColor } = this.state
        
            return(
                <div>
                    <p  className="attributeName">COLOR: </p>
                    <div className="colorAttribute">
                        {attribute.items.map((item, i) => {
                            return(
                                <div onClick={() => this.setState({chosenColor: item.value})}
                                     key={item.id} 
                                     className={`colorItem ${item.value === chosenColor && 'chosenColor'}`} 
                                     >
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