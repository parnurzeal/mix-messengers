import firebase from 'firebase';
import 'firebase/firestore';

const config = {
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
};
db.settings(settings);

const lineUsersCollection = db.collection('line');

export {
	db,
	auth,
  lineUsersCollection,
};
