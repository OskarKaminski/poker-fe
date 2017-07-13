import {takeLatest, put} from 'redux-saga/effects';
import {auth, facebookProvider} from 'Adapter/firebase';
import {authStateChanged} from './auth.actions';

function* login(){
    const result = yield auth.signInWithPopup(facebookProvider)
    yield put(authStateChanged(result.user));
}

export function* authSaga() {
    yield takeLatest('LOGIN', login);
}