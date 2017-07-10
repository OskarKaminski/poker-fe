import db, {auth} from './firedb';

export const getUser = (uid) => {
    var ref = db.ref(`/users/${uid}`);
    return ref.once("value").then(data => data.val());
}
export const currentUserId = () => {
    return auth.currentUser.uid;
}