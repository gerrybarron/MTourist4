function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;
	
	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');
		
		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};
var userID = getUrlParameter('usrID');

$(document).ready(function(){
    getDashboardData();
});

// Get dashboard data
function getDashboardData() {
    getAllConfirmedPlace();
    getAllUnconfirmedPlace();
}

// List of confirmed places
function getAllConfirmedPlace(){
    $('#place-list').html('');
    var validUser = localStorage.getItem("owner_validation");
    $.getJSON("../server/owner-data.php?status=confirmed&owner="+validUser, function(result){
        console.log(result);
        for (i = 0; i < result.length; i++) { 
            $("#place-list").append('<tr><td>'+result[i].pName+
            '</td><td>'+result[i].pCat+
            '</td><td>'+result[i].pAdd+
            '</td><td>'+result[i].pLat+', '+ result[i].pLng+
            '</td><td>'+result[i].pContact+
            '</td><td>'+result[i].pWebsite+
            '</td><td><a href="#editPlace" id="'+result[i].place_id+'" onclick="getId(this.id);editmap();" class="text-blue modal-trigger">Edit</a></td></tr>');
        }
    });
}

// List of unconfirmed places
function getAllUnconfirmedPlace(){
    $('#place-unconfirm-list').html('');
    var validUser = localStorage.getItem("owner_validation");
    $.getJSON("../server/owner-data.php?status1=unconfirmed&owner="+validUser, function(result){
        console.log(result);
        for (i = 0; i < result.length; i++) { 
            $("#place-unconfirm-list").append('<tr><td>'+result[i].pName+
            '</td><td>'+result[i].pCat+
            '</td><td>'+result[i].pAdd+
            '</td><td>'+result[i].pLat+', '+ result[i].pLng+
            '</td><td>'+result[i].pContact+
            '</td><td>'+result[i].pWebsite+
            '</td><td><a href="#editPlace" id="'+result[i].place_id+'" onclick="getId(this.id);editmap();" class="text-blue modal-trigger">Edit</a></td></tr>');
        }
    });
}

function getId(item_id){
    $.getJSON("../server/view.php?placeId4="+item_id, function(result2){
        $("#eplaceId").val(result2.fld_placeId);
        $("#eplaceName").val(result2.fld_name);
        $("#autocomplete-input2").val(result2.fld_category);
        $("#eplaceMun").val(result2.fld_desId);
        $("#eplacePrice").val(result2.fld_startPrice);
        $("#eplaceAdd").val(result2.fld_address);
        $("#epLat").val(result2.fld_lat);
        $("#epLng").val(result2.fld_lng);
        $("#eplaceCnum").val(result2.fld_contact);
        $("#eplaceWeb").val(result2.fld_website);
        $("#eplaceShort").val(result2.fld_shortDesc);
        $("#eplaceLong").val(result2.fld_longDesc);
        $("#eplacePax").val(result2.fld_pax);
        localStorage.setItem("editPlaceId", result2.fld_placeId);
    });
}

// FOR PlACE INFO ADD
function placeForm(){
	var validUser = localStorage.getItem("owner_validation");
	var pName = $("#placeName").val();
	var pCategory = $("#autocomplete-input").val();
	var pMun = $("#placeMun").val();
	var pPrice = $("#placePrice").val();
	var pAdd = $("#placeAdd").val();
	var pLat = $("#pLat").val();
	var pLng = $("#pLng").val();
	var pCnum = $("#placeCnum").val();
	var pWeb = $("#placeWeb").val();
	var pShort = $("#placeShort").val();
	var pLong = $("#placeLong").val();
	var pPax = $("#placePax").val();
	
	$.ajax({		
		type : 'POST',
		//url  : 'server/name-update.php',
		url  : '../server/save-place.php',
		data : "pName="+pName+"&pCategory="+pCategory+"&pMun="+pMun+"&pPrice="+pPrice+"&pAdd="+pAdd+"&pLat="+pLat+"&pLng="+pLng+"&pCnum="+pCnum+"&pWeb="+pWeb+"&pShort="+pShort+"&pLong="+pLong+"&pPax="+pPax+"&userId="+validUser,
		success :  function(response){						
			console.log(response);
            Materialize.toast(response, 3000, 'rounded');
            getAllUnconfirmedPlace();
		},
		error : function(response){
			console.log(response);
		}
	});
}

// FOR UPdate PlACE INFO ADD
function placeEditForm(){
	var placeId = $("#eplaceId").val();
	var pName = $("#eplaceName").val();
	var pCategory = $("#autocomplete-input2").val();
	var pMun = $("#eplaceMun").val();
	var pPrice = $("#eplacePrice").val();
	var pAdd = $("#eplaceAdd").val();
	var pLat = $("#epLat").val();
	var pLng = $("#epLng").val();
	var pCnum = $("#eplaceCnum").val();
	var pWeb = $("#eplaceWeb").val();
	var pShort = $("#eplaceShort").val();
	var pLong = $("#eplaceLong").val();
	var pPax = $("#eplacePax").val();
	
	$.ajax({		
		type : 'POST',
		//url  : 'server/name-update.php',
		url  : '../server/update-place.php',
		data : "pName="+pName+"&pCategory="+pCategory+"&pMun="+pMun+"&pPrice="+pPrice+"&pAdd="+pAdd+"&pLat="+pLat+"&pLng="+pLng+"&pCnum="+pCnum+"&pWeb="+pWeb+"&pShort="+pShort+"&pLong="+pLong+"&pPax="+pPax+"&placeId2="+placeId,
		success :  function(response){						
			console.log(response);
            Materialize.toast(response, 3000, 'rounded');
            getAllUnconfirmedPlace();
		},
		error : function(response){
			console.log(response);
		}
	});
}

function logout(){
	localStorage.removeItem("owner_validation");
	location.reload();
}

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