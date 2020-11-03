import { takeEvery, put, call } from 'redux-saga/effects';
import { axios } from '../../axios';
import { AUTONOTIFICATION, LOGOUT_METHOD } from '../action-types';
import { isAdmin, isLogin, userToken, userExpiresIn, userId } from '../actions/auth-actions';

export function* autonotificationWatcher() {
    yield takeEvery(AUTONOTIFICATION, autonotificationWorker);
}

async function autonotificationResp(action: any) {
    const res = await axios.post('/auth/login', { email: action.payload.email, password: action.payload.password });
    return res;
}

function* autonotificationWorker(action: any) {
    try {
        const res = yield call(autonotificationResp as any, action);
        yield put(isAdmin(res.data.admin));
        yield put(isLogin(res.data.isLogin));
        yield put(userToken(res.data.token));
        yield put(userExpiresIn(res.data.expiresIn));
        yield put(userId(res.data.userId));
    } catch (e) {
        throw e;
    }
}

export function* logoutMethodWatcher() {
    yield takeEvery(LOGOUT_METHOD, logoutMethodWorker);
}

async function logoutMethodResp(action: any) {
    await axios.put('/auth/logout', { userId: action.payload.Id });
}

function* logoutMethodWorker(action: any) {
    try {
        yield call(logoutMethodResp as any, action);
        yield put(isAdmin(false));
        yield put(isLogin(false));
        yield put(userToken(''));
        yield put(userExpiresIn('0'));
        yield put(userId(''));
        localStorage.removeItem('isLogin');
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
    } catch (e) {
        throw e;
    }
}
