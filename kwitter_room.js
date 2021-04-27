
var firebaseConfig = {
      apiKey: "AIzaSyDJL7EpCScHa4jA1i5rwIrRoI5GMcfBDqw",
      authDomain: "kwitter-58e33.firebaseapp.com",
      projectId: "kwitter-58e33",
      storageBucket: "kwitter-58e33.appspot.com",
      messagingSenderId: "775716694699",
      appId: "1:775716694699:web:b7f59142f2cb7dd34325ee",
      measurementId: "G-EB5DX256QD"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
