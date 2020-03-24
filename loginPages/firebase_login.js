
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0nAFCjtW-dc5h8iCyRZgtmcEjjUTJ-QM",
    authDomain: "projestage-eb43e.firebaseapp.com",
    databaseURL: "https://projestage-eb43e.firebaseio.com",
    projectId: "projestage-eb43e",
    storageBucket: "projestage-eb43e.appspot.com",
    messagingSenderId: "326415405931",
    appId: "1:326415405931:web:68ce4d45c0e5cd941d722e",
    measurementId: "G-11M751R6E0"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const txtEmail = document.getElementById('username')
const txtPassword = document.getElementById('pass')
const btn_Login = document.getElementById('sign_up')

btn_Login.addEventListener('click', e =>{
    const email = txtEmail.value;       
    const pass = txtPassword.value;   
    const promise = firebase.auth().signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message))
})

firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      console.log(firebaseUser)
      console.log("Ok tamer")
      document.location.pathname='studentPages/main.html'
    }else{
      console.log('not logged in')
    }
  })