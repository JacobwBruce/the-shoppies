import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD4INfTnIdZiGvlUZ8uGOuYJ3A7XKCnxuM',
    authDomain: 'the-shoppies-3fda6.firebaseapp.com',
    projectId: 'the-shoppies-3fda6',
    storageBucket: 'the-shoppies-3fda6.appspot.com',
    messagingSenderId: '115019596799',
    appId: '1:115019596799:web:83d13ffba4c3c904985dca',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
