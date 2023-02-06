// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKCFV2Ku8mpMIv4ggwYOJ3XCpEY-kQ01w",
  authDomain: "taxpayercentral.firebaseapp.com",
  projectId: "taxpayercentral",
  storageBucket: "taxpayercentral.appspot.com",
  messagingSenderId: "459378708688",
  appId: "1:459378708688:web:150c821111f4ceef6f0ed5",
  measurementId: "G-5QRPYS53K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);