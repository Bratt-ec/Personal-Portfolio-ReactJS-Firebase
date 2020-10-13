import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtjUqxXLvxSbDwGAC7pdhhvmixUHmvS5M",
    authDomain: "portafolio-4cef4.firebaseapp.com",
    databaseURL: "https://portafolio-4cef4.firebaseio.com",
    projectId: "portafolio-4cef4",
    storageBucket: "portafolio-4cef4.appspot.com",
    messagingSenderId: "113091747074",
    appId: "1:113091747074:web:e6277dd8d9e7cb9833b61b",
    measurementId: "G-SL2DW20J7K"
  };

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();