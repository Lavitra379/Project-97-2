function addUser()
{
user_name1 = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name1);
window.location = "kwitter_room.html";


}