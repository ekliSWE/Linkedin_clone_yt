import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJThNaadTYy8BrqteXC4pmbL2xMo1OOhY",
  authDomain: "linkedin-clone-yt-8bfa0.firebaseapp.com",
  projectId: "linkedin-clone-yt-8bfa0",
  storageBucket: "linkedin-clone-yt-8bfa0.appspot.com",
  messagingSenderId: "980437759405",
  appId: "1:980437759405:web:2ad4e6662bd93035f91d24",
  measurementId: "G-LRTP6Y4Z1G"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth};