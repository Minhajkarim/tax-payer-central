import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKCFV2Ku8mpMIv4ggwYOJ3XCpEY-kQ01w",
    authDomain: "taxpayercentral.firebaseapp.com",
    projectId: "taxpayercentral",
    storageBucket: "taxpayercentral.appspot.com",
    messagingSenderId: "459378708688",
    appId: "1:459378708688:web:150c821111f4ceef6f0ed5",
    measurementId: "G-5QRPYS53K0"
	// Your credentials
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};