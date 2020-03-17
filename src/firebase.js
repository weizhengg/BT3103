import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCOQ1tpB0PF_WaPg2dY7HJeCNdQsUQbEbE",
  authDomain: "bt3103-ba40b.firebaseapp.com",
  databaseURL: "https://bt3103-ba40b.firebaseio.com",
  projectId: "bt3103-ba40b",
  storageBucket: "bt3103-ba40b.appspot.com",
  messagingSenderId: "765682079165",
  appId: "1:765682079165:web:bbff7971ddeeb2fc1daed4",
  measurementId: "G-KKQ7CSCM8K"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;