import { Component } from "react";
import '../../../styles/attribute.css'


export class TouchIdAttribute extends Component {
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
                        console.log(attribute.name)
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



export class PortsAttribute extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: ''     
        }
    }


    render(){
        const { attribute, setChosenAttribute } = this.props

        const addAttribute = (data) => {
            this.setState({value: data.value})
            setChosenAttribute(({attributes}) => {
                return {
                    attributes: {...attributes, [attribute.name]: data.value }
                }
            })
        }

        return(
            <div>
                <p  className="attributeName">{attribute.name.toUpperCase()}: </p>
                <div className="portAttribute">
                    {attribute.items.map(item => {
                        return(
                            <div key={item.id} onClick={() => addAttribute(item) } className={`${this.state.value === item.value && 'chosenValue'}`}>
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
    
    constructor(props){
        super(props)

        this.state = {
            chosenColor: ''
        }
    }


    render(){
        const  { attribute, setChosenAttribute } = this.props
        const { chosenColor } = this.state
        const setAttribute = (data) => {
            this.setState({chosenColor: data.value})
            setChosenAttribute(({attributes}) => {
                return {
                    attributes: {...attributes, [attribute.name]: data.value }
                }
            })      
        }

            return(
                <div>
                    <p  className="attributeName">{attribute.name.toUpperCase()}: </p>
                    <div className="colorAttribute">
                        {attribute.items.map((item, i) => {
                            return(
                                <div onClick={() => setAttribute(item)}
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


export class CapacityAttribute extends Component {
    constructor(props){
        super(props)

        this.state = {
            chosenCapacity: ''
        }
    }


    render(){
        const  { attribute, setChosenAttribute } = this.props
        const selectCapacity = (data) => {
            this.setState({chosenCapacity: data.value})
            setChosenAttribute(({attributes}) => {
                return {
                    attributes: {...attributes, [attribute.name]: data.value }
                }
            })
        }
        

        return(
            <div>
                <p className="attributeName">{attribute.name.toUpperCase()}: </p>
                <div className="capacityItem">
                    {attribute.items.map(item => {
                            return(
                                <div key={item.id} onClick={() => selectCapacity(item)} 
                                    className={`${this.state.chosenCapacity === item.value  && 'chosenCapacity' }`}>
                                    <p>{item.value}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}



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

export class SizeAttribute extends Component {
    constructor(props){
        super(props)


        this.state = {
            chosenSize: ''
        }
    }


    render(){
        const  { attribute, setChosenAttribute } = this.props

        const addAttribute = (data) => {
            this.setState({chosenSize: data.value})
            setChosenAttribute(({attributes}) => {
                return {
                    attributes: {...attributes, [attribute.name]: data.value }
                }
            })
        }
        
        return(
            <div>
                <p className="attributeName">{attribute.name.toUpperCase()}: </p>
                <div  className="sizeAttribute">
                    {attribute.items.map((item, i) => {
                        return(
                            <div 
                                key={item.id} 
                                className={`sizeItem ${this.state.chosenSize === item.value && 'chosenSize'}`}
                                onClick={() => addAttribute(item)}>
                                <p>{sizes[i].name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}