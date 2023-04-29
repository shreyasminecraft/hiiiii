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
    var room = localStorage.getItem("roomname");
    function send(){
      var messagee = document.getElementById("message").value;
      firebase.database().ref(room).push({
            user: username,
            text: messagee,
            likes: 0
      });
      document.getElementById("message").value = "";
    }

function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("romess").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name= message_data["user"];
var message = message_data["text"];
var subscribe = message_data["likes"];
var showname = "<h4> "+name+"<img src = 'tick.png' class = 'user_tick'> </h4>";
var show_message = "<h4 class = 'message_h4'>"+message+"</h4>";
var showlike = "<button class = 'btn btn-warning' id ='"+firebase_message_id+"' value = '"+subscribe+"' onclick = 'growlike(this.id)'>";
var viewicon = "<span class = 'glyphicon glyphicon-thumbs-up'> like: "+subscribe+"</span></button> <hr>";
var row = showname+show_message+showlike+viewicon;
document.getElementById("romess").innerHTML += row;

//End code
      } });  }); }
getData();
function quitter(){
      localStorage.removeItem("user");
      localStorage.removeItem("roomname");
      window.location ="index.html";
}
function growlike(message_id){
      console.log(message_id);
      var number_likes = document.getElementById("message_id").value;
      var inclike = Number(number_likes) + 1000;
      firebase.database().ref(room).child(message_id).update({
            likes : inclike
      });
      
}

