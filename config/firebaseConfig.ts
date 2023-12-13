import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyBsE0cHcsYvV9_uu_d5XnubpUzpmngSE7I",
    authDomain: "rnlearnhook.firebaseapp.com",
    projectId: "rnlearnhook",
    storageBucket: "rnlearnhook.appspot.com",
    messagingSenderId: "377249083565",
    appId: "1:377249083565:web:3c77c4a6dc41c443995624"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth



// android : 862506654808-ojog0f4q8sm1blr1gkbnqjgnbnio23vr.apps.googleusercontent.com