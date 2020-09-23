import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyARrxY4Ra3A-JkHiJpu1ramz9sqIPw5aZQ",
    authDomain: "hurrys-c3677.firebaseapp.com",
    databaseURL: "https://hurrys-c3677.firebaseio.com",
    projectId: "hurrys-c3677",
    storageBucket: "hurrys-c3677.appspot.com",
    messagingSenderId: "959266947515",
    appId: "1:959266947515:web:0bcc5e13ae0293be24849e",
    measurementId: "G-EENE39D4CM"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

export default firebase
export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()