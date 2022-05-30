import  '../../styles/header.css'
import { Link, NavLink, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import Cart from './headercart';
import Currency from './currency'
import { Component } from 'react';
import { CATEGORIES } from '../../gql/gql';
import axios from 'axios';

const HeaderCategoriesWithPath = (props) => {
    const { pathname } = useLocation()
    let { name } = props.category

    return <NavLink className={pathname.indexOf(name) >=0 ? 'greenCategory' : 'blackCategory'} to={`/${name}`}>{name}</NavLink>

} 

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: [],
            loading: true
        }
    }

async componentDidMount(){
   try{
    let data = await axios.post('http://localhost:4000/', {
        query: CATEGORIES
      })
      this.setState({categories: data.data.data.categories, loading: false})
      
   }catch(err){
       console.log({message: err.message})
   }
}



render(){
    const { categories } = this.state

    return(
            <div>
                {this.state.loading ? <div className='spin'></div>
                                    :   <div className="header">
                                            <div className='header-categories' >
                                                {categories.map((category, i) => {
                                                    return(
                                                            <HeaderCategoriesWithPath key={i} category={category} />
                                                        )
                                                    })}     
                                            </div>

                                            <div className='header-logo-container'>
                                                <Link to={'/'}><div className='header-logo' ></div></Link>
                                            </div>
                                                
                                            <div className='header-currency-cart'>
                                                <Currency />
                                                <Cart />
                                            </div>
                                        </div>}
            </div>
        )
}
}

const mapStateToProps = state => {
    return {
        symbol: state.currencyReducer
    }
}



export default connect(mapStateToProps)(Header)
