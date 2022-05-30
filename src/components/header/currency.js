import axios from "axios";
import { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { connect } from "react-redux";
import { GET_CURRENCIES, URL } from "../../gql/gql";
import { changeCurrency } from "../../reducers/currencyreducer";


class Currency extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            currencies: [],
            open: false
        }

    }

    async componentDidMount(){
        try{
            let data = await axios.post(URL, {
                query: GET_CURRENCIES
            })
            this.setState({currencies: data.data.data.currencies, loading: false})
        }catch(err){
            console.log({message: err.message})
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

           <div> {this.state.loading ? <div className="spin"></div>                       
                        :<OutsideClickHandler onOutsideClick={outsideClickHandler}>
                            <div className='header-symbol'>
                                <div className="header-symbol-div" >
                                        <span className="dropDown-symbol" onClick={() => this.setState({open: true}) }>{symbol}</span>
                                        {open   ? <span  onClick={() => this.setState({open: false})} className='currencyClose'></span> 
                                                : <span  onClick={() => this.setState({open: true})} className='currencyOpen'></span>}
                                </div>

                                {open && <div className='symbol'>
                                            {this.state.currencies.map(currency => {
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
                        </OutsideClickHandler>}
            </div>
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

