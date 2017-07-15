import {takeLatest, put} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';
import {storeUpdateSeats} from './seats.actions';

function* fetchSeats({tableKey}){
    const result = yield db.ref(`/tables/${tableKey}/seats`).once('value');
    yield put(storeUpdateSeats(result.val()));
}

export function* seatsSaga() {
    yield takeLatest('DB/FETCHING_SEATS', fetchSeats);
}