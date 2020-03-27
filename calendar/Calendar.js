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

let calendarEl = document.getElementById('calendar');
let event = []
const fb = firebase.firestore();



console.log(document.querySelector("header"))


window.onload = () => {


    let calendar
    fb.collection("calendar").onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            event.push(doc.data())
        })
        let test = [{"title":"aaa","start":"2020-03-25 09:00:00","end":"2020-03-25 11:00:00","borderColor": "#839c49"}]
        calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [ 'dayGrid','timeGrid' ],
            defaultView: 'timeGridWeek',
            locale:'fr',
            allDaySlot : false,
            height: 585,
            startTime:9,
            minTime: '8:00',
            maxTime: '18:00',
            
            header:{
                left:'prev,next today',
                center:'title',
                right:'dayGridMonth,timeGridWeek,timeGridDay'
            },
            buttonText:{
                today:"Aujourd'hui",
                month:"Mois",
                week:"Semaine"
            },
            nowIndicator:true,
            businessHours: {
              startTime: '9:00', 
              endTime: '17:00',
            },
            events: event,
            eventClick: function(info) {
                console.log(info.event.id)
                window.location.href = window.location.origin + "/absenceLate/index.html?" + info.event.id
            }
        });
        
        calendar.render();
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
                document.getElementById("return").href = "../studentPages/main.html"
            }
        })
    })
};