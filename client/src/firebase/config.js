import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXVOUOKaNLEtU8RoWFOq84QIHexnB1n2U",
  authDomain: "underblog-2589f.firebaseapp.com",
  projectId: "underblog-2589f",
  storageBucket: "underblog-2589f.firebasestorage.app",
  messagingSenderId: "969778947057",
  appId: "1:969778947057:web:5b6815ae654f16e4581a50"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);