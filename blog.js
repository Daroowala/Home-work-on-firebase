
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getFirestore,
    doc, setDoc
      } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

      
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
  const db = getFirestore(app);

  const submit_btn=document.getElementById("btn")
  submit_btn.addEventListener("onclick", submit)

  async function submit() {
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const image = document.getElementById("img").files[0]
    await setDoc(doc(db, "blogs"), {
        title ,
        description,
        image,
      });

    
  }



 
  
  
