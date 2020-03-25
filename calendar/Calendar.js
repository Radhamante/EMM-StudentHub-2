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

window.onload = () =>{

    let calendar
    fb.collection("calendar").onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            event.push(doc.data())
        })
        console.log(event)
        let test = [{"title":"aaa","start":"2020-03-25 09:00:00","end":"2020-03-25 11:00:00","borderColor": "#839c49"}]
        calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [ 'dayGrid','timeGrid' ],
            defaultView: 'timeGridWeek',
            locale:'fr',
            allDaySlot : false,
            height: 600,
            startTime:9,
            minTime: '8:30',
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
              startTime: '9:00', // a start time (10am in this example)
              endTime: '19:00', // an end time (6pm in this example)
            },
            events: test
        });
        
        calendar.render();
    })
    
    

    
};