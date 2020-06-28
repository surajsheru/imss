import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCxuKB5H6aKIttwpK1bI4W9mDeozp24DQo",
    authDomain: "imss-5c496.firebaseapp.com",
    databaseURL: "https://imss-5c496.firebaseio.com",
    projectId: "imss-5c496",
    storageBucket: "imss-5c496.appspot.com",
    messagingSenderId: "328835117825",
    appId: "1:328835117825:web:11d88493504995947ae100"
  };
  
  firebase.initializeApp(firebaseConfig)
  export const database=firebase.database().ref('/items')