import firebase from "firebase/app";
import "firebase/database";
// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyBWGXfQZsVlIMNajAirrtIhQjeA7yIKGtc",
    authDomain: "sushinhivn.firebaseapp.com",
    databaseURL: "https://sushinhivn.firebaseio.com",
    projectId: "sushinhivn",
    storageBucket: "sushinhivn.appspot.com",
    messagingSenderId: "459515566691",
    appId: "1:459515566691:web:0f27d4b3ae6f6b8d81b656",
    measurementId: "G-GQV5H5E7F5"
};
firebase.initializeApp(firebaseConfig);
export default firebase;