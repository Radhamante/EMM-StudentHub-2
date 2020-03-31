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
var messagesRef = firebase.database().ref('messages');

const txtEmail = document.getElementById('username')
const txtPassword = document.getElementById('pass1')
const txtPassword2 = document.getElementById('pass2')
const btn_SignUp = document.getElementById('sign_up')
const namee = document.getElementById('name')
const lastnamee = document.getElementById('lastname')
let exo = ""
firebase.firestore().collection('name_class').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.data().name)
      exo+= `
      <option value="${doc.data().name}">${doc.data().name}</option>`
    })
    $('#class_choice').append(exo)
})

btn_SignUp.addEventListener('click', e =>{     
  //verification du mdp
  if(txtPassword.value == txtPassword2.value) {
    const email = txtEmail.value; 
    const pass = txtPassword.value;
    const name = namee.value;
    const lastname = lastnamee.value;
    //envoi de la donnée radio au cloud firestore
    firebase.auth().createUserWithEmailAndPassword(email,pass).then(cred =>{
      alert("Le compte "+txtEmail.value+" à bien été créé")
      var user = firebase.auth().currentUser;
      //class
      let choix_class = document.getElementById('class_choice');
      //retourne la valeur du radio
      return firebase.firestore().collection('Personnes_connectés').doc(cred.user.uid).set({
        autorisation: 3,
        Email: txtEmail.value,
        Classe: choix_class.value,
        Prenom: namee.value,
        Nom: lastnamee.value
      })
    });
    //Formulaire vierge
    // document.getElementById('formulaire').reset();
  }
  else {
    console.log($("input[name='role']:checked").val())
    alert("les mdp ne sont pas pareils")
    // document.getElementById('formulaire').reset();
    
  }
})




