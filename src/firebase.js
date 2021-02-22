import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC35KcMbqgiZnUaHK5Kf-OvJKYb30xx18k",
    authDomain: "crud-d3264.firebaseapp.com",
    projectId: "crud-d3264",
    storageBucket: "crud-d3264.appspot.com",
    messagingSenderId: "666709426310",
    appId: "1:666709426310:web:1b0bac8e2cae84478e5107"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)