import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAG1lkPauWlvBwemcC-6lz3twdtBO4RDJw",
    authDomain: "blog-app-5aa20.firebaseapp.com",
    projectId: "blog-app-5aa20",
    storageBucket: "blog-app-5aa20.appspot.com",
    messagingSenderId: "817002126910",
    appId: "1:817002126910:web:281654f037210e9aedfb6f"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser= async (email, password,navigate)=>{

try{
let userCredential = await createUserWithEmailAndPassword(auth, email, password)
navigate("/")
console.log(userCredential)
}catch(err){
  alert(err.message)
}

}


export const signIn = async (email, password,navigate)=> {

try{ 
let userCredential = await signInWithEmailAndPassword (auth,email,password) 
navigate("/") 
console.log(userCredential)
}catch(err){
alert(err.message)
}
}

export const logOut=()=>{
  signOut(auth)
  alert("çıkış yapıldı.")
}
