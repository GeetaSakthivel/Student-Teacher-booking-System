import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDJWlMmEcm4Yhb2DRpH7MmLgm4k4AHLJr0",
    authDomain: "student-teacher-booking-202ed.firebaseapp.com",
    projectId: "student-teacher-booking-202ed",
    storageBucket: "student-teacher-booking-202ed.appspot.com",
    messagingSenderId: "1055937679029",
    appId: "1:1055937679029:web:08e479cb266867d6ddb8fc",
    measurementId: "G-3HEHGEEFFW" 
});
const auth = getAuth();
const db= getFirestore();

