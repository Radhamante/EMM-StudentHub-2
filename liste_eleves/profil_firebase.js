
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

//supprimer un compte 
const supprimer_le_compte = document.getElementById('supp')

supprimer_le_compte.addEventListener('click', e =>{

  var user = firebase.auth().currentUser;

  // fonction delete
  user.delete().then(function(){
      document.location.pathname='loginPages/login.html'
  }).catch(function(error){
    console.log("erreur de suppression")
  })
})

//deconnexion
const deconnexion = document.getElementById('deco')

deconnexion.addEventListener('click', e =>{
    firebase.auth().signOut();
    document.location.pathname='loginPages/login.html'
})

firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      console.log(firebaseUser)
      console.log("PLUS CO")
      deconnexion.classList.remove('hide')

    }else{
      console.log('not logged in')
      deconnexion.classList.add('hide')
    }
  })

  //profil change

// //Prénom
// let e_prenom = ""
// firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         // let console = doc.data();
//         e_prenom +=  `<p>${doc.data().Prenom}</p>`

//         console.log(doc.data())
//     })
//     $('#name_usersID').append(e_prenom)
// })

// //Nom
// let e_nom = ""
// firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         // let console = doc.data();
//         e_nom +=  `<p>${doc.data().Nom}</p>`

//         console.log(doc.data())
//     })
//     $('#lastname_usersID').append(e_nom)
// })

// //Classe
// let e_classe = ""
// firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         // let console = doc.data();
//         e_classe +=  `<p>${doc.data().Classe}</p>`

//         console.log(doc.data())
//     })
//     $('#class_usersID').append(e_classe)
// })

// //Email
// let e_email = ""
// firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         // let console = doc.data();
//         e_email +=  `<p>${doc.data().Email}</p>`

//         console.log(doc.data())
//     })
//     $('#email_usersID').append(e_email)
// })

//Filter

//Filter 6e
const filter_6e = document.getElementById('filter_6e')
filter_6e.addEventListener('click', e =>{
  let e_emaill = ""
  let e_name=""
  let e_lastname=""
  let e_classe=""
  firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if(doc.data().Classe == "6e"){
          e_emaill +=  `<p>${doc.data().Email}</p>`
          e_name +=  `<p>${doc.data().Prenom}</p>`
          e_lastname +=  `<p>${doc.data().Nom}</p>`
          e_classe +=  `<p>${doc.data().Classe}</p>`
        }
      })
      $('#email_usersID').append(e_emaill)
      $('#name_usersID').append(e_name)
      $('#lastname_usersID').append(e_lastname)
      $('#class_usersID').append(e_classe)
    })
})

//Filter 5e
const filter_5e = document.getElementById('filter_5e')

filter_5e.addEventListener('click', e =>{
  let e_email = ""
  let e_name=""
  let e_lastname=""
  let e_classe=""
  firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if(doc.data().Classe == "5e"){
          e_email +=  `<p>${doc.data().Email}</p>`
          e_name +=  `<p>${doc.data().Prenom}</p>`
          e_lastname +=  `<p>${doc.data().Nom}</p>`
          e_classe +=  `<p>${doc.data().Classe}</p>`
        }
      })
      $('#email_usersID').append(e_email)
      $('#name_usersID').append(e_name)
      $('#lastname_usersID').append(e_lastname)
      $('#class_usersID').append(e_classe)
    })
})

//Filter 4e
const filter_4e = document.getElementById('filter_4e')
filter_4e.addEventListener('click', e =>{
  let e_emaill = ""
  let e_name=""
  let e_lastname=""
  let e_classe=""
  firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if(doc.data().Classe == "4e"){
          e_emaill +=  `<p>${doc.data().Email}</p>`
          e_name +=  `<p>${doc.data().Prenom}</p>`
          e_lastname +=  `<p>${doc.data().Nom}</p>`
          e_classe +=  `<p>${doc.data().Classe}</p>`
        }
      })
      $('#email_usersID').append(e_emaill)
      $('#name_usersID').append(e_name)
      $('#lastname_usersID').append(e_lastname)
      $('#class_usersID').append(e_classe)
    })
})