// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDex9SjgJNCj-4371aswL_faaUQ7gWrrc8',
  authDomain: 'netflixappdemo-ff7b9.firebaseapp.com',
  projectId: 'netflixappdemo-ff7b9',
  storageBucket: 'netflixappdemo-ff7b9.appspot.com',
  messagingSenderId: '189691004284',
  appId: '1:189691004284:web:8a21d9575fd1d2a054d0f9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
