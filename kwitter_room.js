
const firebaseConfig = {
      apiKey: "AIzaSyBzkiOdHbxGU4C-XFYUPp6l1QbtEEREJXA",
      authDomain: "qwittttter.firebaseapp.com",
      databaseURL: "https://qwittttter-default-rtdb.firebaseio.com",
      projectId: "qwittttter",
      storageBucket: "qwittttter.appspot.com",
      messagingSenderId: "315840308963",
      appId: "1:315840308963:web:5201bceba7f428766b07d6"
    };
    firebase.initializeApp(firebaseConfig);
    
    var username = localStorage.getItem("user");
    document.getElementById("welcome_message").innerHTML = "Welcome  " + username+ "!";

    function add_ur_room(){
      var type = document.getElementById("addd").value;
      firebase.database().ref("/").child(type).update({
            purpose : "nothing"
      });
      localStorage.setItem("roomname",type );
      window.location="kwitter_page.html";
    }

  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      var row = "<div class = 'room_name' id = '"+Room_names+"' onclick = 'ontouch(this.id)'># "+Room_names+" </div> <hr>";
      document.getElementById("output").innerHTML += row;
      

      //End code
      });});}
      
getData();
function ontouch(name_id){
console.log(name_id);
localStorage.setItem("roomname", name_id);
window.location = "kwitter_page.html"; 
}
function quitter(){
      localStorage.removeItem("user");
      localStorage.removeItem("roomname");
      window.location ="index.html";
}
