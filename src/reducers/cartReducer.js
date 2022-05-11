const cartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            if(state.includes(action.data)){
                return state
            }else{
                return [...state, action.data]
            }
            
        case 'DELETE':
            return state.filter(product => product.id !== action.data.id)


            default:
                return state
    }
}


export const addProductToCart = (data) => {
    return dispatch => {
        dispatch({
            type: 'ADD',
            data
        })
    }
}


export const deleteProduct = (id) => {

    return dispatch => {
        dispatch({
            type: 'DELETE',
            data: {id}
        })
    }
}

export default cartReducer