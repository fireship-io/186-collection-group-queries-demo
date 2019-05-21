import * as firebase from 'firebase/app';
const db = firebase.firestore();


const query = db.collectionGroup('comments')
                .where('user', '==', 'jeffd23')
                .orderBy('createdAt');
