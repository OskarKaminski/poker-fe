import _ from 'lodash';
import {takeLatest, put} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';
import {fetchSeats} from '../seats/seats.saga';
import {tableUpdated} from './table.actions';

export function* tableSaga() {
    yield takeLatest('DB/GET_YOUR_CURRENT_SEAT', function* ({tableKey, yourUid}){
        const seats = yield fetchSeats({tableKey});
        const yourCurrentSeatKey = _.findKey(seats, seat => {
            return seat.player && seat.player.uid === yourUid;
        })
        yield put(tableUpdated(yourCurrentSeatKey));
    });
}