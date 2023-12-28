import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCeUer2RC_zIqJ5AKai1YjCI5wtLDm-vc0",
  authDomain: "react-netflix-clone-1a25a.firebaseapp.com",
  projectId: "react-netflix-clone-1a25a",
  storageBucket: "react-netflix-clone-1a25a.appspot.com",
  messagingSenderId: "1017653887202",
  appId: "1:1017653887202:web:48e49f9ef5ca112e30debb",
  measurementId: "G-VHM0XM5CZC"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);