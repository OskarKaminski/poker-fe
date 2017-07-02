import firebase from 'firebase';
import {config} from './firebase.config';

export default firebase.initializeApp(config).database();