import _ from 'lodash';
import {takeLatest, put} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';
import {storeUpdateTables} from './tables.actions';

function* fetchTables(){
    const result = yield db.ref('/tables').once('value');
    yield put(storeUpdateTables(_.toArray(result.val())));
}

export function* tablesSaga() {
    yield takeLatest('DB/FETCHING_TABLES', fetchTables);
}