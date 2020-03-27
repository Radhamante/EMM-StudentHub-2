const firebaseConfig = {
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

const fb = firebase.firestore();

let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1)


const title = document.getElementsByTagName("h1")[0]
const prof = document.getElementsByTagName("h3")[0]
const hours = document.getElementsByTagName("p")[0]

const lateAdmin = document.getElementById("lateAdmin")
const lateProf = document.getElementById("lateProf")
const lateStudent = document.getElementById("lateStudent")
const absence = document.getElementById("absence")

setLate = () =>{
    fb.collection('Personnes_connectés').doc(firebase.auth().currentUser.uid).get().then((e) => {
        auth = e.data().autorisation
        if (auth == 1) {
            document.querySelector("header").innerHTML += `<a href="addEvent.html"><i class="far fa-calendar-plus"></i></a>`
            document.getElementById("return").href = "../adminPages/main.html"
        }
        else if (auth == 2) {
            document.getElementById("return").href = "../profPages/main.html"
        }
        else if (auth == 3) {
            if(confirm("confirmer votre retard ?")){
                fb.collection("calendar").doc(queryString).update({"late.student":firebase.firestore.FieldValue.arrayUnion(e.data().Nom + e.data().Prenom)})
                alert("retard confirmeé")
            }
        }
    })
} 
setAbsence = () =>{
    fb.collection('Personnes_connectés').doc(firebase.auth().currentUser.uid).get().then((e) => {
        auth = e.data().autorisation
        if (auth == 1) {
            document.querySelector("header").innerHTML += `<a href="addEvent.html"><i class="far fa-calendar-plus"></i></a>`
            document.getElementById("return").href = "../adminPages/main.html"
        }
        else if (auth == 2) {
            document.getElementById("return").href = "../profPages/main.html"
        }
        else if (auth == 3) {
            if(confirm("confirmer votre retard ?")){
                fb.collection("calendar").doc(queryString).update({"absence":firebase.firestore.FieldValue.arrayUnion(e.data().Nom + e.data().Prenom)})
                alert("retard confirmeé")
            }
        }
    })
} 


fb.collection("calendar").doc(queryString).get().then((doc)=>{
    title.innerHTML = doc.data().title.split(" ")[0]
    prof.innerHTML = doc.data().title.split(" ")[5]
    hours.innerHTML = doc.data().end.split(" ")[1] + " - " + doc.data().end.split(" ")[1]

    let late = doc.data().late
    console.log(late.prof)

    let liste = ""
    late.prof.forEach(elem => {
        liste += `<li>${elem}</li>`
    })
    lateProf.innerHTML = liste

    liste = ""
    late.admin.forEach(elem => {
        liste += `<li>${elem}</li>`
    })
    lateAdmin.innerHTML = liste

    liste = ""
    late.student.forEach(elem => {
        liste += `<li>${elem}</li>`
    })
    lateStudent.innerHTML = liste

    liste = ""
    doc.data().absence.forEach(elem => {
        liste += `<li>${elem}</li>`
    })
    absence.innerHTML = liste

    
})