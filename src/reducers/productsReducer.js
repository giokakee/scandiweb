const productsReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT_PRODUCTS':
            return action.data



        default:
            return state
    }
}

export const initProducts = (data) => {
    return dispatch => {
        dispatch({
            type: 'INIT_PRODUCTS',
            data
        })
    }
}

export default productsReducer