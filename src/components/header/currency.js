import { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { connect } from "react-redux";
import { changeCurrency } from "../../reducers/currencyreducer";


const currencies = [
    {
        label: "USD",
        symbol: "$"
    },
    {
        label: 'GBP', 
        symbol: '£'
    },
    {
        label: 'AUD', 
        symbol: 'A$'
    },
    {
        label: 'JPY', 
        symbol: '¥'
    },
    {
        label: 'RUB', 
        symbol: '₽'
    }
]


class Currency extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }

    }




    render(){

        const { open } = this.state
        const { setCurrency, symbol} = this.props

        const choseCurrency = (currency) => {
            setCurrency(currency)
            this.setState({open: false})
        }
        
            
    
        const outsideClickHandler = () => {
            this.setState({open: false})
        }

        return(
            <OutsideClickHandler onOutsideClick={outsideClickHandler}>
                <div className='header-symbol'>
                    <div className="header-symbol-div" >
                            <span className="dropDown-symbol" onClick={() => this.setState({open: true}) }>{symbol}</span>
                            {open   ? <span  onClick={() => this.setState({open: false})} className='currencyClose'></span> 
                                    : <span  onClick={() => this.setState({open: true})} className='currencyOpen'></span>}
                    </div>

                    {open && <div style={{position: 'absolute', marginLeft: '-30px'}} className='symbol'>
                                {currencies.map(currency => {
                                        if(currency.symbol !== symbol){
                                            return (
                                                <p key={currency.symbol} onClick={() => choseCurrency(currency.symbol)}>{currency.symbol} {currency.label}</p>
                                            )
                                        }else{
                                            return null
                                        }
                                    })}
                            </div>}
                </div>                    
            </OutsideClickHandler>
)
    }

}


const mapStateToProps = state => {
    return {
        symbol: state.currencyReducer
    }
}

const mapDispatchToPtops = (dispatch) => {
    return {
        setCurrency: (data) => {
            dispatch(changeCurrency(data))
        }
    }
}
 


export default connect(mapStateToProps, mapDispatchToPtops)(Currency)

