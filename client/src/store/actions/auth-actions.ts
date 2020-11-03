import { IS_ADMIN, IS_LOGIN, USER_TOKEN, USER_EXPIRES_IN, USER_ID, AUTONOTIFICATION, LOGOUT_METHOD } from "../action-types";

export const isAdmin = (isAdmin: boolean) => {
    return {
        type: IS_ADMIN,
        payload: {
            isAdmin: isAdmin
        }
    }
}

export const isLogin = (isLogin: boolean) => {
    localStorage.setItem('isLogin', isLogin.toString());
    return {
        type: IS_LOGIN,
        payload: {
            isLogin: isLogin
        }
    }
}

export const userToken = (token: string) => {
    localStorage.setItem('token', token.toString());
    return {
        type: USER_TOKEN,
        payload: {
            token: token
        }
    }
}

export const userExpiresIn = (expiresIn: string) => {
    localStorage.setItem('expiresIn', expiresIn.toString());
    return {
        type: USER_EXPIRES_IN,
        payload: {
            expiresIn: expiresIn
        }
    }
}

export const userId = (userId: string) => {
    return {
        type: USER_ID,
        payload: {
            userId: userId
        }
    }
}

export const autonotification = (email: string, password: string) => {
    return {
        type: AUTONOTIFICATION,
        payload: {
            email: email,
            password: password
        }
    }
}

export const logoutMethod = (Id: string) => {
    return {
        type: LOGOUT_METHOD,
        payload: {
            Id: Id
        }
    }
}
