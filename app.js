
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth, 
         signInWithEmailAndPassword, 
      } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAEJg09XlsyYZdZ0hekDszCX0CnHKpP-Sw",
  authDomain: "class-test-project-288c8.firebaseapp.com",
  projectId: "class-test-project-288c8",
  storageBucket: "class-test-project-288c8.appspot.com",
  messagingSenderId: "1089947485620",
  appId: "1:1089947485620:web:451748515273efe7fa9ee1",
  measurementId: "G-XBVXQG1FPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");


const auth_container =document.getElementById("auth_container");
const user_container =document.getElementById("user_container");

signin_btn.addEventListener("click", signIn);


async function signIn(event){
    event.preventDefault();
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href="index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

