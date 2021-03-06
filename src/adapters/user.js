import {db, auth} from './firebase';

export const getUser = (uid) => {
    var ref = db.ref(`/users/${uid}`);
    return ref.once("value").then(data => data.val());
}
export const currentUserId = () => {
    return auth.currentUser.uid;
}
export const getCurrentUser = () => {
    return getUser(currentUserId());
}
export const onUserChange = (id, cb) => {
    return db.ref('/users/' + id)
        .on('value', (snapshot) => cb(snapshot.val()));
}