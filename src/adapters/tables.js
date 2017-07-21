import {db} from './firebase';

export const addTable = (table) => {
    const ref = db.ref('/tables').push();
    ref.set(table);
}
export const listenTable = (id, cb) => {
    return db.ref('/tables/' + id).on('value', snapshot => {
        return cb(snapshot.val());
    });
}