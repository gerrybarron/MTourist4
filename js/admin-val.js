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

// FOR PROMOTION SLIDER 1 UPDATE
function promoSliderCenter(){
	var sliderTagline = $("#pTagline1").val();
	var sliderSlogan = $("#pSlogan1").val();
	
	//console.log(userID);
	$.ajax({		
		type : 'POST',
		url  : '../server/update-promotion.php',
		data : "sliderTagline1="+sliderTagline+"&sliderSlogan1="+sliderSlogan,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Saved!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

// FOR PROMOTION SLIDER 2 UPDATE
function promoSliderLeft(){
	var sliderTagline = $("#pTagline2").val();
	var sliderSlogan = $("#pSlogan2").val();
	
	//console.log(userID);
	$.ajax({		
		type : 'POST',
		url  : '../server/update-promotion.php',
		data : "sliderTagline2="+sliderTagline+"&sliderSlogan2="+sliderSlogan,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Saved!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

// FOR PROMOTION SLIDER 3 UPDATE
function promoSliderRight(){
	var sliderTagline = $("#pTagline3").val();
	var sliderSlogan = $("#pSlogan3").val();
	
	//console.log(userID);
	$.ajax({		
		type : 'POST',
		url  : '../server/update-promotion.php',
		data : "sliderTagline3="+sliderTagline+"&sliderSlogan3="+sliderSlogan,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Saved!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

// FOR MAIN PROMOTION UPDATE
function promoMain(){
    var sliderTagline = $("#pTagline4").val();
	var sliderSlogan = $("#pSlogan4").val();
	
	//console.log(userID);
	$.ajax({		
		type : 'POST',
		url  : '../server/update-promotion.php',
		data : "sliderTagline4="+sliderTagline+"&sliderSlogan4="+sliderSlogan,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Saved!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

// FOR MUNICIPALITIES SHORT DESCRIPTION UPDATE
function munShortDesc(){
    var short_mun1 = $("#short_mun1").val();
    var short_mun2 = $("#short_mun2").val();
    var short_mun3 = $("#short_mun3").val();
    var short_mun4 = $("#short_mun4").val();
    var short_mun5 = $("#short_mun5").val();
    var short_mun6 = $("#short_mun6").val();
    var short_mun7 = $("#short_mun7").val();
    var short_mun8 = $("#short_mun8").val();
    var short_mun9 = $("#short_mun9").val();
    var short_mun10 = $("#short_mun10").val();
    var short_mun11 = $("#short_mun11").val();
    var short_mun12 = $("#short_mun12").val();
    var short_mun13 = $("#short_mun13").val();
	
	console.log(short_mun1);
	$.ajax({		
		type : 'POST',
		url  : '../server/update-description.php',
		data : 'sM1='+short_mun1+'&sM2='+short_mun2+'&sM3='+short_mun3+'&sM4='+short_mun4+'&sM5='+short_mun5+'&sM6='+short_mun6+'&sM7='+short_mun7+'&sM8='+short_mun8+'&sM9='+short_mun9+'&sM10='+short_mun10+'&sM11='+short_mun11+'&sM12='+short_mun12+'&sM13='+short_mun13,
		success :  function(response){				
			console.log(response);
			Materialize.toast('Saved!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
        }
	});
}

// FOR MUNICIPALITIES LONG DESCRIPTION UPDATE
function munLongDesc(){
    var long_mun1 = $("#long_mun1").val();
    var long_mun2 = $("#long_mun2").val();
    var long_mun3 = $("#long_mun3").val();
    var long_mun4 = $("#long_mun4").val();
    var long_mun5 = $("#long_mun5").val();
    var long_mun6 = $("#long_mun6").val();
    var long_mun7 = $("#long_mun7").val();
    var long_mun8 = $("#long_mun8").val();
    var long_mun9 = $("#long_mun9").val();
    var long_mun10 = $("#long_mun10").val();
    var long_mun11 = $("#long_mun11").val();
    var long_mun12 = $("#long_mun12").val();
    var long_mun13 = $("#long_mun13").val();
	
	//console.log(userID);
	$.ajax({		
		type : 'POST',
		url  : '../server/update-description.php',
		data : 'lM1='+long_mun1+'&lM2='+long_mun2+'&lM3='+long_mun3+'&lM4='+long_mun4+'&lM5='+long_mun5+'&lM6='+long_mun6+'&lM7='+long_mun7+'&lM8='+long_mun8+'&lM9='+long_mun9+'&lM10='+long_mun10+'&lM11='+long_mun11+'&lM12='+long_mun12+'&lM13='+long_mun13,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Saved!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

// Get dashboard data
function getDashboardData() {
    $.getJSON("../server/admin-data.php?promo=all", function(result){
        console.log(result[0].promoCaption);
        $("#pTagline1").val(result[0].promoCaption);
        $("#pTagline2").val(result[1].promoCaption);
        $("#pTagline3").val(result[2].promoCaption);
        $("#pTagline4").val(result[3].promoCaption);
        $("#pSlogan1").val(result[0].promoSlogan);
        $("#pSlogan2").val(result[1].promoSlogan);
        $("#pSlogan3").val(result[2].promoSlogan);
        $("#pSlogan4").val(result[3].promoSlogan);
    });
    
    $.getJSON("../server/admin-data.php?description=all", function(result){
        console.log(result[0].promoCaption);
        $("#short_mun1").val(result[0].shortDesc);
        $("#short_mun2").val(result[1].shortDesc);
        $("#short_mun3").val(result[2].shortDesc);
        $("#short_mun4").val(result[3].shortDesc);
        $("#short_mun5").val(result[4].shortDesc);
        $("#short_mun6").val(result[5].shortDesc);
        $("#short_mun7").val(result[6].shortDesc);
        $("#short_mun8").val(result[7].shortDesc);
        $("#short_mun9").val(result[8].shortDesc);
        $("#short_mun10").val(result[9].shortDesc);
        $("#short_mun11").val(result[10].shortDesc);
        $("#short_mun12").val(result[11].shortDesc);
        $("#short_mun13").val(result[12].shortDesc);
        $("#long_mun1").val(result[0].longDesc);
        $("#long_mun2").val(result[1].longDesc);
        $("#long_mun3").val(result[2].longDesc);
        $("#long_mun4").val(result[3].longDesc);
        $("#long_mun5").val(result[4].longDesc);
        $("#long_mun6").val(result[5].longDesc);
        $("#long_mun7").val(result[6].longDesc);
        $("#long_mun8").val(result[7].longDesc);
        $("#long_mun9").val(result[8].longDesc);
        $("#long_mun10").val(result[9].longDesc);
        $("#long_mun11").val(result[10].longDesc);
        $("#long_mun12").val(result[11].longDesc);
        $("#long_mun13").val(result[12].longDesc);
    });

    getAllUsers();
    getAllOwner();
    getAllUnconfirmedOwner();
    getAllUnconfirmedPlace();
    getAllConfirmedPlace();
}

function getAllUsers() {
    // List of tourist
    $.getJSON("../server/admin-data.php?status=confirmed&level=general", function(result){
        for (i = 0; i < result.length; i++) { 
            $("#tourist-list").append('<tr><td>'+result[i].fld_userId+
            '</td><td>'+result[i].fld_email+
            '</td><td>'+result[i].fld_dateCreated+'</td></tr>');
        }
    });
}

function getAllOwner(){
    // List of confirmed business owner
    $.getJSON("../server/admin-data.php?status2=confirmed", function(result){
        for (i = 0; i < result.length; i++) { 
            $("#owner-list").append('<tr><td>'+result[i].fld_ownerId+
            '</td><td>'+result[i].fld_email+
            '</td><td>'+result[i].fld_cNum+
            '</td><td>'+result[i].fld_created_at+'</td></tr>');
        }
    });
}

function getAllUnconfirmedOwner(){
    // List of unconfirmed business owner
    $.getJSON("../server/admin-data.php?status3=unconfirmed", function(result){
        for (i = 0; i < result.length; i++) { 
            $("#unconfirmed-list").append('<tr><td>'+result[i].fld_ownerId+
            '</td><td>'+result[i].fld_email+
            '</td><td>'+result[i].fld_cNum+
            '</td><td>'+result[i].fld_created_at+
            '</td><td><a id="'+result[i].fld_ownerId+'" onclick="getId(this.id);" class="text-blue">Confirm</a></td></tr>');
        }
    });
}

function getAllConfirmedPlace(){
    // List of confirmed places
    $.getJSON("../server/admin-data.php?status5=confirmed", function(result){
        console.log(result);
        for (i = 0; i < result.length; i++) { 
            $("#place-list").append('<tr><td>'+result[i].fld_placeId+
            '</td><td>'+result[i].fld_name+
            '</td><td>'+result[i].fld_category+
            '</td><td>'+result[i].fld_owner+
            '</td><td>'+result[i].fld_address+
            '</td><td>'+result[i].fld_lat+', '+ result[i].fld_lng+
            '</td><td>'+result[i].fld_contact+
            '</td><td>'+result[i].fld_website+'</td></tr>');
        }
    });
}

function getAllUnconfirmedPlace(){
    // List of unconfirmed places
    $.getJSON("../server/admin-data.php?status4=unconfirmed", function(result){
        console.log(result);
        for (i = 0; i < result.length; i++) { 
            $("#place-unconfirm-list").append('<tr><td>'+result[i].fld_placeId+
            '</td><td>'+result[i].fld_name+
            '</td><td>'+result[i].fld_category+
            '</td><td>'+result[i].fld_owner+
            '</td><td>'+result[i].fld_address+
            '</td><td>'+result[i].fld_lat+', '+ result[i].fld_lng+
            '</td><td>'+result[i].fld_contact+
            '</td><td>'+result[i].fld_website+
            '</td><td><a id="'+result[i].fld_placeId+'" onclick="getId2(this.id);" class="text-blue">Confirm</a></td></tr>');
        }
    });
}

// To confirm the request to be an owner
function getId(clicked_id){
    $.ajax({		
		type : 'POST',
		url  : '../server/update-info.php',
		data : "userId3="+clicked_id,
		success :  function(response){						
			console.log(response);
            Materialize.toast('Saved!', 3000, 'rounded');
            $('#unconfirmed-list').html('');
            $('#owner-list').html('');
            getAllOwner();
            getAllUnconfirmedOwner();
		},
		error : function(response){
			console.log(response);
		}
    });
}

// To confirm the place
function getId2(clicked_id){
    $.ajax({		
		type : 'POST',
		url  : '../server/update-place.php',
		data : "placeId="+clicked_id,
		success :  function(response){						
			console.log(response);
            Materialize.toast(response, 3000, 'rounded');
            $('#place-unconfirm-list').html('');
            $('#place-list').html('');
            getAllConfirmedPlace();
            getAllUnconfirmedPlace();
		},
		error : function(response){
			console.log(response);
		}
    });
}

function logout(){
	localStorage.removeItem("validation");
	location.reload();
}