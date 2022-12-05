import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
apiKey: "AIzaSyDlFY3juD2snwlOnhnG7MGJOzYdKTbKahk",
  authDomain: "projeto-c67.firebaseapp.com",
  databaseURL: "https://projeto-c67-default-rtdb.firebaseio.com",
  projectId: "projeto-c67",
  storageBucket: "projeto-c67.appspot.com",
  messagingSenderId: "438447682785",
  appId: "1:438447682785:web:760a1734896c5422fd33a0"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
