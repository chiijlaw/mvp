import * as firebase from "firebase";
import firebaseConfig from "./config";

//Connect to Firebase Database
export default (firebaseApp = firebase.initializeApp(firebaseConfig));
