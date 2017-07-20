import {takeLatest, put} from 'redux-saga/effects';
import {db} from 'Adapter/firebase';
import {storeUpdateTables, storeUpdateTable} from './tables.actions';

function* fetchTables(){
    const result = yield db.ref('/tables').once('value');
    yield put(storeUpdateTables(result.val()));
}
// TODO - update table
function* fetchTable({id}){
    const result = yield db.ref('/tables/'+id).once('value');
    const table = {
        ...result.val(),
        key: id
    }
    yield put(storeUpdateTable(table));
}

export function* tablesSaga() {
    yield takeLatest('DB/FETCHING_TABLES', fetchTables);
    yield takeLatest('DB/FETCHING_TABLE', fetchTable);
}