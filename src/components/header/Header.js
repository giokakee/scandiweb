import  '../../styles/header.css'
import { useQuery } from "@apollo/client";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GET_CATEGORIES } from "../../gql/gql";
import { connect } from 'react-redux';
import { changeCurrency } from '../../reducers/currencyReducer';
import Cart from './cart';
import Currency from './currency'

const Header = () => {

    const { loading, data, error} = useQuery(GET_CATEGORIES)
   
    const navigate = useNavigate()

    const {pathname} = useLocation()
    if(data){
        return(
            <div className="header">
                <div className='header-categories' >
                    {data.categories.map((category, i) => {
                        return(
                            <Link className={pathname.indexOf(category.name) >=0 ? 'greenCategory' : 'blackCategory'} key={i} to={`/${category.name}`}>{category.name}</Link>
                            )
                        })}     
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='header-logo' onClick={() => navigate('/')} style={{cursor: 'pointer'}} ></div>
                </div>
                    
                <div className='header-currency-cart'>
                    <Currency />
                    <Cart />
                </div>
            </div>
        )
    }


    if(loading){
        
        return(
            <h1>loading...</h1>
        )
    }
    if(error){
        return(
            <h1>error...</h1>
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
 


export default connect(mapStateToProps, mapDispatchToPtops)(Header)