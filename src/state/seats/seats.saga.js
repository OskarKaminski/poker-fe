import {takeLatest, put} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';
import {storeUpdateSeats, dbFetchSeats} from './seats.actions';

function* fetchSeats({tableKey}){
    const result = yield db.ref(`/tables/${tableKey}/seats`).once('value');
    yield put(storeUpdateSeats(result.val()));
}
function* reserveSeat({tableKey, seatNumber, user}){
    yield db.ref(`/tables/${tableKey}/seats/${seatNumber}`)
        .update({reserved: user});
    yield put(dbFetchSeats(tableKey));
}

export function* seatsSaga() {
    yield takeLatest('DB/FETCHING_SEATS', fetchSeats);
    yield takeLatest('DB/SEAT_RESERVATION', reserveSeat);
}