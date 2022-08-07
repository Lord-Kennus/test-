import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDObYM5Byctz3vuREPMLS3QA0yTjyxCals",
    authDomain: "golfar-ce0b6.firebaseapp.com",
    databaseURL: "https://golfar-ce0b6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "golfar-ce0b6",
    storageBucket: "golfar-ce0b6.appspot.com",
    messagingSenderId: "41881550667",
    appId: "1:41881550667:web:ebfe5e13c7eaf5256c72ce"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

function signup(){

  var sEmail = document.getElementById('semail').value;
  var sPassword = document.getElementById('spassword').value;
  var pass2 = document.getElementById('pass2').value;

  /*createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid),{
          username: username,
          email: email
      })
      alert('User Created!');
      document.location.href = "LoginScreen.html";
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      alert(errorMessage);
    });*/

  if(sEmail == "" || sPassword == "" || pass2 == ""){
			alert("One or more boxes are empty!");
			return;
	}
	
	if(sPassword != pass2){
		alert("Both Passwords need to be the same");
		return;
  }
  const promise = auth.createUserWithEmailAndPassword(sEmail.value, sPassword.value);
  promise.catch(e=>alert(e.message));
  alert("SignUp Successful")
  document.location.href = "/Assets/Pages/ListScreen.html";
	
}

 function login(){

   var email = document.getElementById("email");
    var password  = document.getElementById("password");

    if(email == "" || password == ""){
			alert("Missing the either Username,Password or Email");
			return;
	}
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    document.location.href = "/Assets/Pages/ListScreen.html";

    /*  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const dt = new Date();
         update(ref(database, 'users/' + user.uid),{
          last_login: dt,
        })
         alert('User Logged In!');
        document.location.href = "LoginScreen.html";
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        alert(errorMessage);
  });*/
 }
 
//  Unused
function logout(){
  auth.signOut();
  alert("SignOut Successfully from System");
}

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
  }
});