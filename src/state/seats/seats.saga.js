import actions from '../actions';
import {takeLatest, put, select} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';

// export function* fetchSeats({tableKey}){
//     const result = yield db.ref(`/tables/${tableKey}/seats`).once('value');
//     return result.val();
// }
function* reserveSeat({seatKey}) {
    const tableKey = yield select((store) => store.table.key);
    const player = yield select((store) => ({
        id: store.user.uid,
        displayName: store.user.profile.displayName
    }));
    yield db.ref(`/tables/${tableKey}/seats/${seatKey}`)
        .update({status: 1, player});
    // yield addUsersTable({tableKey, seatNumber, userId: user.uid});
}
// function* addUsersTable({tableKey, seatNumber, userId}){
//     yield db.ref(`/users/${userId}/tables`)
//         .push({tableKey, seatNumber});
// }

// function* enroll({amount}){
//     yield db.ref(`/tables/${tableKey}/seats/${seatNumber}`)
//         .update({reserved: false, sitting: user});
//     yield put(dbFetchSeats(tableKey));
// }

export function* seatsSaga() {
    yield takeLatest(actions.seat.reserved, reserveSeat);
    // yield takeLatest('DB/SEAT_SIT', sit);
    // yield takeLatest('DB/SEAT_ENROLL', enroll);
}