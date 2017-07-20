import {takeLatest, put} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';
import {storeUpdateSeats, dbFetchSeats} from './seats.actions';

export function* fetchSeats({tableKey}){
    const result = yield db.ref(`/tables/${tableKey}/seats`).once('value');
    return result.val();
}
function* reserveSeat({tableKey, seatNumber, user}){
    yield db.ref(`/tables/${tableKey}/seats/${seatNumber}`)
        .update({reserved: user});
    yield addUsersTable({tableKey, seatNumber, userId: user.uid});
    yield put(dbFetchSeats(tableKey));
}
function* sit({tableKey, seatNumber, user, amount}){
    yield db.ref(`/tables/${tableKey}/seats/${seatNumber}`)
        .update({reserved: false, sitting: user, balance: amount});
    yield put(dbFetchSeats(tableKey));
}
function* addUsersTable({tableKey, seatNumber, userId}){
    yield db.ref(`/users/${userId}/tables`)
        .push({tableKey, seatNumber});
}

// function* enroll({amount}){
//     yield db.ref(`/tables/${tableKey}/seats/${seatNumber}`)
//         .update({reserved: false, sitting: user});
//     yield put(dbFetchSeats(tableKey));
// }

export function* seatsSaga() {
    yield takeLatest('DB/FETCHING_SEATS', function* ({tableKey}) {
        const seats = yield fetchSeats({tableKey});
        yield put(storeUpdateSeats(seats));
    });
    yield takeLatest('DB/SEAT_RESERVATION', reserveSeat);
    yield takeLatest('DB/SEAT_SIT', sit);
    // yield takeLatest('DB/SEAT_ENROLL', enroll);
}