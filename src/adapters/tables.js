import db from './firedb';

export const addTable = (table) => {
    const ref = db.ref('/tables').push();
    ref.set(table);
}