function redirect_user(){
    var name = document.getElementById("Userrname").value;
    localStorage.setItem("user", name);
    window.location="kwitter_room.html";
}