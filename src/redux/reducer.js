const initialState = {
    categoryDisplay : 'grocery',
    productCategoryDisplay : 'snacks'
}

const Reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CHANGE_CATEGORY' : 
            console.log('Action dispatch ', action.category)
            return {
                ...state,
                categoryDisplay : action.category
            }
        case 'CHANGE_PRODUCT_CATEGORY' : 
            console.log('Action dispatch ', action.category)
            return {
                ...state,
                productCategoryDisplay : action.category
            }
    }
    
    return state
}

export default Reducer