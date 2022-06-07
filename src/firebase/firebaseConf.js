import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { enableNetwork } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
        apiKey: "AIzaSyBsyDhWcGUq6ie4mRYZxAeNoS3KvgFMIhA",
        authDomain: "peject-management.firebaseapp.com",
        projectId: "peject-management",
        storageBucket: "peject-management.appspot.com",
        messagingSenderId: "271853033386",
        appId: "1:271853033386:web:0530c9ac6a52ec73a9bdd3"
   /* 
   apiKey: "AIzaSyAJnCF7zrgYuqCbXKpa4XdQ1Nks4dyeo68",
    authDomain: "todo-react-e07ab.firebaseapp.com",
    projectId: "todo-react-e07ab",
    storageBucket: "todo-react-e07ab.appspot.com",
    messagingSenderId: "967024999620",
    appId: "1:967024999620:web:8d31cb965bf475295e5d91",
    measurementId: "G-S59W4GXKVQ"
    */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;