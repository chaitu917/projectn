import { LOGIN_USER, LOGOUT_USER } from '../constants/UserConstants'

export const userRegisterLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
           return {
               ...state,
               userInfo: action.payload
           } 
        case LOGOUT_USER:
            return {};
        default:
            return state
    }
}
