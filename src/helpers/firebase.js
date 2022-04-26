import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCRQte61FvHa29XL1UDP9P6eJmm31aQ_p0",
    authDomain: "movie-apps-8b7a8.firebaseapp.com",
    projectId: "movie-apps-8b7a8",
    storageBucket: "movie-apps-8b7a8.appspot.com",
    messagingSenderId: "469042998986",
    appId: "1:469042998986:web:be0ddccd99934ad0920e33"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email,password,navigate)=>{
  try{
    let userCredential =await createUserWithEmailAndPassword(auth, email, password);
    navigate ("/")

    console.log(userCredential);
}catch (err) {
    alert(err.message)
}
}

export const signIn = async(email,password,navigate)=>{
    try{
        let userCredential =await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
        console.log(userCredential);
    }catch (err) {
        alert(err.message)
    }
 
}

export const logOut = ()=>{
    signOut(auth);
    alert("logged out successfully");

}
