var name =prompt("what is your name?")
alert("WELCOME TO OUR SITE "+ name)

function initMap() {
var location={lat:23.473324,lng:77.947998};
var map = new google.maps.Map(document.getElementById("googleMap"),{
zoom:2,
center:location
  });
}
