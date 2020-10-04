const initialState = {
    categoryDisplay : 'Groceries & Essentials',
    productCategoryDisplay : 'snacks',
    location : {
        latitude : localStorage.getItem('latitude') ? localStorage.getItem('latitude') : null,
        longitude : localStorage.getItem('longitude') ? localStorage.getItem('longitude') : null,
        userAddress : null,
        generalAddress : localStorage.getItem('generalAddress') ? localStorage.getItem('generalAddress') : null,
    },
    selectedShopId : null,
    selectedShop : localStorage.getItem('activeShop') ? JSON.parse(localStorage.getItem('activeShop')) : null,
    itemSubCategory : null,
    itemCategory : null,
    total : 0,
    productId : null,
    current : null,
    city : localStorage.getItem('activeCity') ? JSON.parse(localStorage.getItem('activeCity')) : null
}

const Reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CHANGE_CATEGORY' : 
            return {
                ...state,
                categoryDisplay : action.category
            }
        case 'CHANGE_PRODUCT_CATEGORY' : 
            return {
                ...state,
                productCategoryDisplay : action.category
            }
        case 'CHANGE_LOCATION' : 
            return {
                ...state,
                location : {
                    ...state.location,
                    latitude : action.location.latitude,
                    longitude : action.location.longitude,
                    userAddress : action.location.userAddress,
                    generalAddress : action.location.generalAddress
                },
            }
        case 'SET_ACTIVE_SHOP' : 
            return{
                ...state,
                selectedShop : action.payload
            }
        case 'CHANGE_ITEM_CATEGORY' : 
            return{
                ...state,
                itemSubCategory : action.payload
            }
        case 'CHANGE_ACTIVE_ITEM' : 
            return{
                ...state,
                itemCategory : action.payload
            }
        case 'CHANGE_TOTAL' : 
            console.log('Changing total : ', action.payload)
            return{
                ...state,
                total : Number(state.total) + Number(action.payload)
            }
        case 'CHANGE_PRODUCT_ID' : 
            return{
                ...state,
                productId : action.payload,
                current : action.current
            }
        case 'SET_CITY' : 
            console.log('Setting city : ', action.payload)
            return{
                ...state,
                city : action.payload
            }
    }
    
    return state
}

export default Reducer