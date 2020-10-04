const initialState = {
        Email : localStorage.getItem('Email') ? localStorage.getItem('Email') : null,
        joiningDate : null,
        messagingToken : null,
        MobileNumber : localStorage.getItem('MobileNumber') ? localStorage.getItem('MobileNumber') : null,
        Name : localStorage.getItem('Name') ? localStorage.getItem('Name') : null, 
        orders : {
            active : 2
        },
        previousAddress : null,
        ratings : 0,
        role : 'User',
        status : 'Active',
        stripeId : null,
        UserId : localStorage.getItem('UserId') ? localStorage.getItem('UserId') : null,
        wallet : 0,
        LoggedIn : localStorage.getItem('LoggedIn') ? true : false,
        currentLocation : localStorage.getItem('Location') ? localStorage.getItem('Location') : null,
        address : [{
            latitude : localStorage.getItem('latitude'),
            longitude : localStorage.getItem('longitude'),
            address : 'Luton Airport, Bedfordshire, UK'
        }],
        itemsCost : 0,
        deliveryCost : 0,
        totalCost : 0
}

const User = (state = initialState, action) => {

    switch(action.type) {
        case 'CHANGE_USER' : 
            console.log( 'Payload : ', action.payload)
            return {
                ...state,
                Name : action.payload.Name,
                Email : action.payload.Email,
                MobileNumber : action.payload.MobileNumber,
                UserId : action.payload.UserId
            }
        case 'REMOVE_USER' : 
            console.log('User is being removed')
            return {
                ...state,
                Name : null,
                Email : null,
                MobileNumber : null,
                UserId : null,
                LoggedIn : false
            }
        case 'PUSH_ADDRESS' : 
            console.log('Pushing address : ', action.payload)
            const pushingAddress = state.address
            pushingAddress.push(action.payload)
            console.log('Variable pushing addresss', pushingAddress)
            return{
                ...state,
                address : pushingAddress
            }
        case 'SET_ITEMS_COST' : 
            console.log('Items cost changing to : ', action.payload)
            return{
                ...state,
                itemsCost : action.payload
            }
        case 'SET_DELIVERY_COST' : 
            console.log('Setting delivery cost to : ', action.payload)
            return{
                ...state,
                deliveryCost : action.payload
            }
    }
    return state
}

export default User