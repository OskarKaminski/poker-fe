import {takeLatest, put} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';
import {storeUpdateUserProfile} from './player.actions';

function* fetchUser({payload}){
    const user = yield db.ref('/users/' + payload.uid).once('value');
    yield put(storeUpdateUserProfile(user.val()));
}

export function* playerSaga() {
    yield takeLatest('AUTH_STATE_CHANGED', fetchUser);
}