import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
    isAuthenticated: null,
    user: null
}

export default function( state = initialState, action){
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:

            return {
                isAuthenticated: true,
                user: payload.email 
            }
            
            break;
        case LOGIN_FAIL:

            return {
                ...state,
                isAuthenticated: false
            }
    
            break;
    
        default:
            return state;
            break;
    }
}

