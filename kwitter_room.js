
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC3mfiQtQmDy3nKVpnrKA9_iNHTnHSB8-8",
      authDomain: "kwitterapp-2fbe2.firebaseapp.com",
      databaseURL: "https://kwitterapp-2fbe2-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-2fbe2",
      storageBucket: "kwitterapp-2fbe2.appspot.com",
      messagingSenderId: "234864500142",
      appId: "1:234864500142:web:25e5ea4bc30f4aeb303c3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" Welcome " + user_name +"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

