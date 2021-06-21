var firebaseConfig = {
    apiKey: "AIzaSyBUiRWiaUTiPWWM02vYWv3X-UjOr7DowLA",
    authDomain: "project96-42379.firebaseapp.com",
    databaseURL: "https://project96-42379-default-rtdb.firebaseio.com",
    projectId: "project96-42379",
    storageBucket: "project96-42379.appspot.com",
    messagingSenderId: "849461188576",
    appId: "1:849461188576:web:05ea802b1dd4ae59affd85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

get_user_name = localStorage.getItem("user_name")
get_room_name = localStorage.getItem("room_name")

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_name = childKey;
                //Start code
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                console.log("Room name - " + Room_name);
               
                document.getElementById("output").innerHTML = row;
                //End code
            });
        });
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(get_room_name).push({
        name: get_user_name,
        message: msg,
        like: 0
    })
    document.getElementById("output").innerHTML = "";
    document.getElementById("msg").value = "";
    getData();
}





function updatelike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like: update_likes
    });
}