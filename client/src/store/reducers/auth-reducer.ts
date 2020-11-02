import { IS_ADMIN, IS_LOGIN, USER_EXPIRES_IN, USER_ID, USER_TOKEN } from "../action-types";

const initState = {
    isAdmin: false,
    token: '',
    userId: '',
    expiresIn: '0',
    isLogin: false
};

const authReducer = (state = initState, action: any) => {
    switch (action.type) {
        case IS_ADMIN:
            return {
                ...state,
                isAdmin: action.payload.isAdmin
            }
        case IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload.isLogin
            }
        case USER_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        case USER_EXPIRES_IN:
            return {
                ...state,
                expiresIn: action.payload.expiresIn
            }
        case USER_ID:
            return {
                ...state,
                userId: action.payload.userId
            }
        default:
            return state
    }
}

export default authReducer;
