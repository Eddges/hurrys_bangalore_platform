const initialState = {
    user : {
        name : 'Michael Cera', 
        phone : '+44 9876543210',
        email : 'ceramichael@business.com',
        orders : {
            active : 2
        }
    },
    
    categoryDisplay : 'grocery',
    productCategoryDisplay : 'snacks',
    location : {
        latitude : null,
        longitude : null,
        userAddress : null,
        generalAddress : null
    }
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
        case 'CHANGE_LOCATION' : 
            console.log('Action dispatch ', action.location)
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
    }
    
    return state
}

export default Reducer