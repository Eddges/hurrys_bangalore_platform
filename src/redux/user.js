const initialState = {
        Email : '',
        joiningDate : null,
        messagingToken : null,
        MobileNumber : null,
        Name : null, 
        orders : {
            active : 2
        },
        previousAddress : null,
        ratings : 0,
        role : 'User',
        status : 'Active',
        stripeId : null,
        UserId : null,
        wallet : 0,
        LoggedIn : localStorage.getItem('LoggedIn') ? true : false,
        currentLocation : localStorage.getItem('Location') ? localStorage.getItem('Location') : null
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
    }
    return state
}

export default User