import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCZIU-mg4wC-iTxtzu7Ih7-0m29qY9dVAE',
  authDomain: 'swearjar-a92e7.firebaseapp.com',
  databaseURL: 'https://swearjar-a92e7-default-rtdb.firebaseio.com',
  projectId: 'swearjar-a92e7',
  storageBucket: 'swearjar-a92e7.appspot.com',
  messagingSenderId: '770216810223',
  appId: '1:770216810223:web:8ce2ff4566bb0be838ed1a',
  measurementId: 'G-D6P8K8F8Q0',
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const db = firebase.database();
