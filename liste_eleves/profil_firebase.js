
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

  
      //Prénom
      let e_prenom = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              // let console = doc.data();
              e_prenom +=  `<p>${doc.data().Prenom}</p>`

              console.log(doc.data())
          })
          $('#name_usersID').append(e_prenom)
      })

      //Nom
      let e_nom = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              // let console = doc.data();
              e_nom +=  `<p>${doc.data().Nom}</p>`

              console.log(doc.data())
          })
          $('#lastname_usersID').append(e_nom)
      })

      //Classe
      let e_classee = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              // let console = doc.data();
              e_classee +=  `<p>${doc.data().Classe}</p>`

              console.log(doc.data())
          })
          $('#class_usersID').append(e_classee)
      })

      //Email
      let e_email = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              // let console = doc.data();
              e_email +=  `<p>${doc.data().Email}</p>`

              console.log(doc.data())
          })
          $('#email_usersID').append(e_email)
      })
      
let all_user = document.getElementById('list_complet_user')
  //profil change
  all_user.addEventListener('click', e =>{     
      //Prénom
      let e_prenom = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              e_prenom +=  `<p>${doc.data().Prenom}</p>`
          })
          $('#name_usersID').append(e_prenom)
      })
      //Nom
      let e_nom = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              e_nom +=  `<p>${doc.data().Nom}</p>`
          })
          $('#lastname_usersID').append(e_nom)
      })
      //Classe
      let e_classee = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              e_classee +=  `<p>${doc.data().Classe}</p>`
          })
          $('#class_usersID').append(e_classee)
      })
      //Email
      let e_email = ""
      firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              e_email +=  `<p>${doc.data().Email}</p>`
          })
          $('#email_usersID').append(e_email)
      })
    })


let exo = ""
firebase.firestore().collection('name_class').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      exo+= `<button value="${doc.data().name}" class="hhey" id="${doc.data().name}">${doc.data().name}</button>`
      var noem = document.getElementById(doc.data().name)
    })
    $('#filter_class').append(exo)
    let tbl = document.getElementsByClassName('hhey');
    for(let j=0; j<tbl.length; j++){
       console.log(tbl[j].value)
       $('#filter_class').on('click','button', e =>{
        $( "#principal_list" ).load(window.location.href + " #principal_list" )
        if (e.target && e.target.id == tbl[j].value){
          console.log("oui")
          let e_classe = "";
          let e_mail ="";
          let e_name = "";
          let e_lastname ="";
          firebase.firestore().collection('Personnes_connectés').get().then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                  if(doc.data().Classe ==tbl[j].value ){
                    e_classe +=  `<p>${doc.data().Classe}</p>`
                    e_mail +=  `<p>${doc.data().Email}</p>`
                    e_name +=  `<p>${doc.data().Prenom}</p>`
                    e_lastname += `<p>${doc.data().Nom}</p>`

                  console.log(doc.data())
                  }
              })
              $('#class_usersID').append(e_classe)
              $('#email_usersID').append(e_mail)
              $('#name_usersID').append(e_name)
              $('#lastname_usersID').append(e_lastname)

          })

        }
      })
    }
    
      
    })
