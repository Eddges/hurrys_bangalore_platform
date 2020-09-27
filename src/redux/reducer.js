const initialState = {

    currentProduct : {
        veg : true,
        brand : "MuscleBlaze",
        productName : 'Crunchy Muesli',
        description : 'These thin potato crisps are just as crunchy, finely chopped, roasted to perfection, and spiced with a tangy mix of amchur, black salt, pepper, pomegranate seed, mint, salt, and coriander.',
        features : [
            {
                '100% assured quality guaranteed' : 'These thin potato crisps are just as crunchy, finely chopped and roasted to perfection'
            },
            {
                'Imported from USA' : 'These thin potato crisps are just as crunchy, finely chopped and roasted to perfection'
            },
            {
                'Lowest fat & carb content' : ''
            },
            {
                'No added sugar' : ''
            }
        ],
        varieties : [
            {
                price : 180,
                wrongPrice : 200,
                quantity : '250g'
            },
            {
                price : 240,
                wrongPrice : 300,
                quantity : '750g'
            },
            {
                price : 300,
                wrongPrice : 350,
                quantity : 'Pack of 2 (250g)'
            }
        ],
        details : [
            {
                'Brand' : 'MuscleBlaze'
            },
            {
                'Model Name' : 'Whey Gold'
            },
            {
                'Weight' : '3.0 kg'
            },
            {
                'Price per kg' : '700.0'
            },
            {
                'Flavor Base' : 'Strawberry'
            },
            {
                'Calories Per Serving' : '473 KCal'
            },
            {
                'Manufacturer' : 'Sapiens Labs, Village Dhana Bagbania, P.O. Manpura,Tehsil Nalagarh , Solan (Himachal Pradesh), 174101'
            }
        ]
    },
    
    categoryDisplay : 'Groceries & Essentials',
    productCategoryDisplay : 'snacks',
    location : {
        latitude : localStorage.getItem('latitude') ? localStorage.getItem('latitude') : null,
        longitude : localStorage.getItem('longitude') ? localStorage.getItem('longitude') : null,
        userAddress : null,
        generalAddress : localStorage.getItem('generalAddress') ? localStorage.getItem('generalAddress') : null,
    },
    selectedShopId : null,
    selectedShop : null,
    itemSubCategory : null,
    itemCategory : null
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
    }
    
    return state
}

export default Reducer