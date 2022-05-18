import { initializeApp } from "firebase/app";
import {GoogleAuthProvider , getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJTsjkV8voiW4J1WoX2VKNhrC8kGSyI3U",
  authDomain: "uber-next-clone-73eca.firebaseapp.com",
  projectId: "uber-next-clone-73eca",
  storageBucket: "uber-next-clone-73eca.appspot.com",
  messagingSenderId: "607346193797",
  appId: "1:607346193797:web:9dff17e3c6943a8a4280ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app,provider,auth }