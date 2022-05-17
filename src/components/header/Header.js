import  '../../styles/header.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { changeCurrency } from '../../reducers/currencyReducer';
import Cart from './headerCart';
import Currency from './currency'
import { Component } from 'react';

class Header extends Component {


render(){
    const { categories, pathname } = this.props
        return(
            <div className="header">
                <div className='header-categories' >
                    {categories.map((category, i) => {
                        return(
                            <Link className={pathname.indexOf(category.name) >=0 ? 'greenCategory' : 'blackCategory'} key={i} to={`/${category.name}`}>{category.name}</Link>
                            )
                        })}     
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Link to={'/'}><div className='header-logo' style={{cursor: 'pointer'}} ></div></Link>
                </div>
                    
                <div className='header-currency-cart'>
                    <Currency />
                    <Cart />
                </div>
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
 


export default connect(mapStateToProps, mapDispatchToPtops)(Header)