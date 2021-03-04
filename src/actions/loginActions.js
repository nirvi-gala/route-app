import USER from "../constants/loginConstants";

export const login = (userDetails) => ({
    type: USER.USER_LOGIN,
    payload: userDetails
});

export const logout = () => ({
    type: USER.USER_LOGOUT,
}); 