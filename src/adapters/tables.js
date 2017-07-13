import {db} from './firebase';

export const addTable = (table) => {
    const ref = db.ref('/tables').push();
    ref.set(table);
}