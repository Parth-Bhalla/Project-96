var firebaseConfig = {
    apiKey: "AIzaSyAf9G2ijmJbMTTuzb9kl8IcQ2UWUej88-0",
    authDomain: "project-94-7ed4f.firebaseapp.com",
    databaseURL: "https://project-94-7ed4f-default-rtdb.firebaseio.com",
    projectId: "project-94-7ed4f",
    storageBucket: "project-94-7ed4f.appspot.com",
    messagingSenderId: "527209596093",
    appId: "1:527209596093:web:d78cf92fedfc09aa7323d4",
    measurementId: "G-L2CEMV0CJQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

    function addRoom() {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"addingRoomName"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}