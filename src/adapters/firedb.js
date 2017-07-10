import firebase from 'firebase';
import {config} from './firebase.config';

const instance = firebase.initializeApp(config);
export default instance.database();
export const auth = instance.auth();