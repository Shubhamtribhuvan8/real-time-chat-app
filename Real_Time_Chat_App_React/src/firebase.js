import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBAZQ6vv8z6tb8DQeKdiAn4elPCgk5vyz8",
    authDomain: "my-project-3-372405.firebaseapp.com",
    databaseURL: "https://my-project-3-372405-default-rtdb.firebaseio.com",
    projectId: "my-project-3-372405",
    storageBucket: "my-project-3-372405.appspot.com",
    messagingSenderId: "929921965319",
    appId: "1:929921965319:web:c267867b1f3b3a49a2f9a2"
  })
  .auth();
