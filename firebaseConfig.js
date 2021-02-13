import Firebase from 'firebase';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.manifest.extra.API_KEY,
  appId: Constants.manifest.extra.APP_ID,
  authDomain: Constants.manifest.extra.AUTH_DOMAIN,
  databaseURL: Constants.manifest.extra.DATABASE_URL,
  measurementId: Constants.manifest.extra.MEASUREMENT_ID,
  messagingSenderId: Constants.manifest.extra.MESSAGING_SENDER_ID,
  projectId: Constants.manifest.extra.PROJECT_ID,
  storageBucket: Constants.manifest.extra.STORAGE_BUCKET,
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
