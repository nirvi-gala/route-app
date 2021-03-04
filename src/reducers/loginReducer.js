import USER from "../constants/loginConstants";

const INITIAL_STATE = {
    userData: {},
    error: false,
    loading: false,
    isAuthentication: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER.USER_LOGIN:{
            return {
                ...state,
                isAuthentication: true,
                userData: action.payload,
            }
        }
        case USER.USER_LOGOUT:{
            return {
                ...state,
                isAuthentication: false,
                userData: {},
            }
        }
        default:
            return state;
    }
}

export default loginReducer;