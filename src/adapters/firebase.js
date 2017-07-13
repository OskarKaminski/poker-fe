import firebase from 'firebase';
import {config} from './firebase.config';

const instance = firebase.initializeApp(config);
export const db = instance.database();
export const auth = instance.auth();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();