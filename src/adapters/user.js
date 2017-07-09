import db from './firedb';

export const getUser = (uid) => {
    var ref = db.ref(`/users/${uid}`);
    return ref.once("value").then(data => data.val());
}