import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAZQ6vv8z6tb8DQeKdiAn4elPCgk5vyz8",
  authDomain: "my-project-3-372405.firebaseapp.com",
  projectId: "my-project-3-372405",
  storageBucket: "my-project-3-372405.appspot.com",
  messagingSenderId: "929921965319",
  appId: "1:929921965319:web:c267867b1f3b3a49a2f9a2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
