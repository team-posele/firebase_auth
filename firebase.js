// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/compat/app";

// Need to use this for v9 of firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGJF0R0mTNd-0zKUboxJgJd9a0y_OqK1o",
  authDomain: "fir-auth-b50a9.firebaseapp.com",
  projectId: "fir-auth-b50a9",
  storageBucket: "fir-auth-b50a9.appspot.com",
  messagingSenderId: "507214384021",
  appId: "1:507214384021:web:228911a4357706ea7c849c",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
