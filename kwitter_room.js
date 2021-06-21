function un(){
liuser = localStorage.getItem("user_name");
document.getElementById("username1").innerHTML = "Welcome "+liuser+" !";
}
const firebaseConfig = {
    apiKey: "AIzaSyBUiRWiaUTiPWWM02vYWv3X-UjOr7DowLA",
    authDomain: "project96-42379.firebaseapp.com",
    databaseURL: "https://project96-42379-default-rtdb.firebaseio.com",
    projectId: "project96-42379",
    storageBucket: "project96-42379.appspot.com",
    messagingSenderId: "849461188576",
    appId: "1:849461188576:web:05ea802b1dd4ae59affd85"
  };

function addroom(){
    window.location = "kwitter_page.html"
get_room = document.getElementById("room_name").value;
localStorage.setItem("room_name", get_room);
firebase.database("project96-42379-default-rtdb").ref("/").child(get_room).update({
    purpose: "adding room name"
});

}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room name - " + Room_names);
 row = "<div class='room name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'># " + Room_names + "</div><hr>"
 document.getElementById("output").innerHTML = row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}


function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
    }