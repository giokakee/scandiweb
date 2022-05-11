const currencyReducer = (state = '$', action) => {
    switch(action.type){
        case 'INITCURRENCY':
            return action.data
        case 'CHANGECURRENCY':
            return action.data
        default:
            return state
    }
}



export const initCurrency = (data) => {
    return dispatch => {
        dispatch({
            type: 'INITCURRENCY',
            data
        })
    }
}

export const changeCurrency = (data) => {
    return dispatch => {
        dispatch({
            type: 'CHANGECURRENCY',
            data
        })
    }
}


export default currencyReducer