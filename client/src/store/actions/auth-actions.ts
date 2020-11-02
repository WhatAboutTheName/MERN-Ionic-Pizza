import { axios } from "../../axios";
import { IS_ADMIN, IS_LOGIN, USER_TOKEN, USER_EXPIRES_IN, USER_ID } from "../action-types";

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

export const autonotification = (email: string, password: string) => async (dispatch: any) => {
    const res = await axios.post('/auth/login', {email: email, password: password});
    dispatch( isAdmin(res.data.admin) );
    dispatch( isLogin(res.data.isLogin) );
    dispatch( userToken(res.data.token) );
    dispatch( userExpiresIn(res.data.expiresIn) );
    dispatch( userId(res.data.userId) );
}

export const logoutMethod = (Id: string) => async (dispatch: any) => {
    dispatch( isAdmin(false) );
    dispatch( isLogin(false) );
    dispatch( userToken('') );
    dispatch( userExpiresIn('0') );
    dispatch( userId('') );
    localStorage.removeItem('isLogin');
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    await axios.put('/auth/logout', {userId: Id});
}
