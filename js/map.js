// ----------------------------
// ---TO SAVE PLACE LOCATION---
// ----------------------------
var markers = [];
var emap;
var dmap;
var locmap;
var pos2;
var infowindow;
var directionsService;
var directionsDisplay;

function enewmap(){
    var zambales = {lat: 15.367358, lng: 119.963229};
    emap = new google.maps.Map(document.getElementById('emap'), {
        zoom: 10,
        //center: {lat: 14.939, lng: 120.203},
        center: zambales,
        mapTypeId: 'terrain'
    });
    
    emap.addListener('click', function(event) {
        addMarker2(event.latLng);
        var latlang = emarker.getPosition();
        console.log(latlang.lat()+', '+latlang.lng());
        $("#pLat").val(latlang.lat());
        $("#pLng").val(latlang.lng());
    });
    var fpanel = document.getElementById('floating-panel');
    emap.controls[google.maps.ControlPosition.TOP_CENTER].push(fpanel);
}

function addMarker2(location) {
    emarker = new google.maps.Marker({
        position: location,
        map: emap,
        draggable: true
    });
    markers.push(emarker);
}

// Sets the map on all markers in the array.
function setMapOnAll2(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Shows any markers currently in the array.
function showMarkers2() {
    setMapOnAll2(emap);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers2() {
    clearMarkers2();
    markers = [];
}

function clearMarkers2() {
    setMapOnAll2(null);
}

//edit map
function editmap(){
    var zambales = {lat: 15.367358, lng: 119.963229};
    dmap = new google.maps.Map(document.getElementById('dmap'), {
        zoom: 10,
        //center: {lat: 14.939, lng: 120.203},
        center: zambales,
        mapTypeId: 'terrain'
    });
    
    dmap.addListener('click', function(event) {
        addMarker3(event.latLng);
        var latlang = emarker2.getPosition();
        console.log(latlang.lat()+', '+latlang.lng());
        $("#pLat").val(latlang.lat());
        $("#pLng").val(latlang.lng());
    });
    var fpanel = document.getElementById('floating-panel2');
    dmap.controls[google.maps.ControlPosition.TOP_CENTER].push(fpanel);
}

function addMarker3(location) {
    emarker2 = new google.maps.Marker({
        position: location,
        map: dmap,
        draggable: true
    });
    markers.push(emarker2);
}

// Sets the map on all markers in the array.
function setMapOnAll3(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Shows any markers currently in the array.
function showMarkers3() {
    setMapOnAll3(dmap);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers3() {
    clearMarkers3();
    markers = [];
}

function clearMarkers3() {
    setMapOnAll3(null);
}

//for direction

function locmap(){
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    var zambales = {lat: 15.367358, lng: 119.963229};
    locmap = new google.maps.Map(document.getElementById('locmap'), {
        zoom: 10,
        //center: {lat: 14.939, lng: 120.203},
        center: zambales,
        mapTypeId: 'terrain'
    });

    //SET CURRENT LOCATION
    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos2 = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            // infoWindow.setPosition(pos2);
            // infoWindow.setContent('Your here.');
            // infoWindow.open(map);
            var marker = new google.maps.Marker({
                position: pos2,
                map: locmap,
                title:"Your Location",
                icon: "img/normal.png"
            });
            locmap.setCenter(pos2);
        }, function() {
            handleLocationError(true, infoWindow, locmap.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, locmap.getCenter());
    } 
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(locmap);
}

function getPlaceDirection(clicked_id){
    $.getJSON("server/view.php?placeId5="+clicked_id, function(result){
        getPlace = {lat: result.fld_lat, lng: result.fld_lng};
        calculateAndDisplayRoute(directionsService, directionsDisplay, getPlace);
        directionsDisplay.setMap(locmap);
    });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, placeMarker) {
    console.log(pos2);
    directionsService.route({
      origin: pos2,
      destination: placeMarker,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }