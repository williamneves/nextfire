import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVy79SxrNdEjQDwGk5VyZa3LegkW4eVjs",
  authDomain: "tutorial-firebase-f9a1d.firebaseapp.com",
  projectId: "tutorial-firebase-f9a1d",
  storageBucket: "tutorial-firebase-f9a1d.appspot.com",
  messagingSenderId: "25788909130",
  appId: "1:25788909130:web:4a93863ad69efb5494c8b3"
};


// Check if the app has been initialized
function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

// Initialize Firebase
export const firebaseApp = createFirebaseApp( firebaseConfig );

// Auth exports
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const emailAuthProvider = new EmailAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);


// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';