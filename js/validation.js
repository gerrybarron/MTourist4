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


//Validation for Login and Registration
$(document).ready(function(){
	//check if the user is login or not
	var validUser = localStorage.getItem("validation");
	var validUserName;
	console.log(validUser)
	if (validUser == null){
		$('#nav-item').html('');
		$("#nav-item").append(
			'<li><a href="index.html">Home</a></li>'+
			'<li><a href="blogs.html">Blogs</a></li>'+
			'<li id="li-reg"><a href="#regModal" class="modal-trigger">Sign up</a></li>'+
			'<li id="li-log"><a href="#loginModal" class="modal-trigger">Log in</a></li>'
		);
		// FOR MOBILE
		$('#nav-mobile').html('');
		$("#nav-mobile").append(
			'<li><h1><a href="#" class="center blue-text">Zambales Tour</a></h1></li>'+
			'<li><a href="index.html"><i class="fa fa-home"></i>Home</a></li>'+
			'<li><a href="blogs.html"><i class="fa fa-rss-square"></i>Blogs</a></li>'+
			'<li><a href="#regModal" class="modal-trigger"><i class="fa fa-user-plus" aria-hidden="true"></i>Sign up</a></li>'+
			'<li><a href="#loginModal" class="modal-trigger"><i class="fa fa-sign-in" aria-hidden="true"></i>Log in</a></li>'
		);
	}
	else {
		$.getJSON("server/view.php?uID="+validUser, function(result){
			console.log(result.fld_fName);
			validUserName = result.fld_fName;
			$('#nav-item').html('');
			$("#nav-item").append(
				'<li><a href="index.html">Home</a></li>'+
				'<li><a href="blogs.html">Blogs</a></li>'+
				'<li id="li-profile"><a href="profile.html" class="">'+validUserName+'</a></li>'+
				'<li id="li-logout"><a href="" onclick="logout();" class="">Logout</a></li>'
			);
			// FOR MOBILE
			$('#nav-mobile').html('');
			$("#nav-mobile").append(
				'<li><h1><a href="#" class="center blue-text">Zambales Tour</a></h1></li>'+
				'<li><a href="index.html"><i class="fa fa-home"></i>Home</a></li>'+
				'<li><a href="blogs.html"><i class="fa fa-rss-square"></i>Blogs</a></li>'+
				'<li><a href="profile.html" class="modal-trigger"><i class="fa fa-user" aria-hidden="true"></i>'+validUserName+'</a></li>'+
				'<li><a href="" onclick="logout();" class="modal-trigger"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a></li>'
			);
		});

		
	}
	
	/* validation for Login */
	$("#login_form").validate({
		submitHandler: submitForm	
	});
	
	// for owner
	$("#login_form2").validate({
		submitHandler: submitForm2
	});
	
	// for admin 
	$("#login_form3").validate({
		submitHandler: submitForm3
	});
	
	/* validation for Tourist Registration*/
	$("#reg_form").validate({
		submitHandler: signupForm
	});  
	
	/* Validation for Owner Registration*/
	$("#reg_form_owner").validate({
		submitHandler: ownerSignupForm
	});  
	
	/* login submit */
	function submitForm(){		
		var usrnm = $("#usrnm").val();	
		var psswrd = $("#psswrd").val();
		var data = $("#login_form").serialize();
		
		if(usrnm == "" | usrnm == null) {
			$("#err-msg").fadeIn();
			$("#err-msg").text("Please enter an email address.");
			
			setTimeout(function(){
				$("#err-msg").fadeOut();
			}, 3000);
			
		}
		else if(psswrd == "" | psswrd == null) {
			$("#err-msg").fadeIn();
			$("#err-msg").text("Please enter your password.");
			
			setTimeout(function(){
				$("#err-msg").fadeOut();
			}, 3000);
		}
		else {
			$.ajax({
				type : 'POST',
				url  : 'server/login.php',
				data : data,
				beforeSend: function(){	
					$("#btn-login").html('<span class=""></span> &nbsp; loading...');
					
				},
				success :  function(response)
				{						
					//if(response=="ok"){
					if(response > 0){
						$("#btn-login").html('&nbsp; Signing in...');
						if(response == "admin"){
							// setTimeout(' window.location.href = "adashboard.html?usrID='+response+'"; ',2000);
							
						}
						else {
							// setTimeout(' window.location.href = "dashboard.html?usrID='+response+'"; ',2000);
							localStorage.setItem("validation", response);
							location.reload();
						}
					}
					else{
						
						$("#err-msg").fadeIn(1000, function(){						
							$("#err-msg").text(response);
							$("#btn-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Log In');
						});
						//console.log(response);
					}
					usrnm = "";
					psswrd = "";
				}
			});
			return false;
		}
		
	}
	
	/* login submit for owner */
	function submitForm2(){		
		var usrnm = $("#owner_email2").val();	
		var psswrd = $("#owner_password3").val();
		var data = $("#login_form2").serialize();
		
		if(usrnm == "" | usrnm == null) {
			$("#err-msg").fadeIn();
			$("#err-msg").text("Please enter an email address.");
			
			setTimeout(function(){
				$("#err-msg").fadeOut();
			}, 3000);
			
		}
		else if(psswrd == "" | psswrd == null) {
			$("#err-msg").fadeIn();
			$("#err-msg").text("Please enter your password.");
			
			setTimeout(function(){
				$("#err-msg").fadeOut();
			}, 3000);
		}
		else {
			$.ajax({
				type : 'POST',
				url  : 'server/login.php',
				data : data,
				beforeSend: function(){	
					$("#btn-login").html('<span class=""></span> &nbsp; loading...');
					// setTimeout(' window.location.href = "admin/dashboard.html?usrID='+response+'"; ',1000);
				},
				success :  function(response)
				{						
					// console.log(response);
					if(response == "error-code-1"){
						console.log("Email or password is incorrect.");
						$(".err-msg").fadeIn();
						$(".err-msg").text("Email or password is incorrect.");
						
						setTimeout(function(){
							$(".err-msg").fadeOut();
						}, 3000);
					}
					else if (response == "error-code-2") {
						console.log("This account has not been confirmed yet.");
						$(".err-msg").fadeIn();
						$(".err-msg").text("This account has not been confirmed yet.");
						
						setTimeout(function(){
							$(".err-msg").fadeOut();
						}, 3000);
					}
					else if (response == "error-code-3"){
						console.log("This account is deactivated. Please contact the administrator to recover your account.");
						$(".err-msg").fadeIn();
						$(".err-msg").text("This account is deactivated.");
						
						setTimeout(function(){
							$(".err-msg").fadeOut();
							$("#loginModal").modal("close");
							$("#reActivateQ").modal("open");
						}, 3000);
					}
					else if(response == "" || response == null){
						$(".err-msg").fadeIn();
						$(".err-msg").text("Unexpected error.");
						
						setTimeout(function(){
							$(".err-msg").fadeOut();
						}, 3000);
					}
					else {
						$("#btn-owner-login").html('&nbsp; Signing in...');
						setTimeout(' window.location.href = "owner/"',2000);
						localStorage.setItem("owner_validation", response);
						usrnm = "";
						psswrd = "";
					}
					console.log(response);
				},
				error: function(response){
					$("#err-msg").fadeIn(1000, function(){						
						$("#err-msg").text(response);
						$("#btn-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Log In');
					});
					console.log(response);
				}
			});
			return false;
		}
		
	}
	
	/* login submit for admin */
	function submitForm3(){		
		var usrnm = $("#usrnm").val();	
		var psswrd = $("#psswrd").val();
		var data = $("#login_form3").serialize();
		
		if(usrnm == "" | usrnm == null) {
			$("#err-msg").fadeIn();
			$("#err-msg").text("Please enter an email address.");
			
			setTimeout(function(){
				$("#err-msg").fadeOut();
			}, 3000);
			
		}
		else if(psswrd == "" | psswrd == null) {
			$("#err-msg").fadeIn();
			$("#err-msg").text("Please enter your password.");
			
			setTimeout(function(){
				$("#err-msg").fadeOut();
			}, 3000);
		}
		else {
			$.ajax({
				type : 'POST',
				url  : '../server/login.php',
				data : data,
				beforeSend: function(){	
					$("#btn-login").html('<span class=""></span> &nbsp; loading...');
					
				},
				success :  function(response)
				{						
					//if(response=="ok"){
					if(response == "admin"){
						$("#btn-login").html('&nbsp; Signing in...');
						localStorage.setItem("validation", response);
						setTimeout(' window.location.href = "dashboard.html"',2000);
						// location.reload();
						usrnm = "";
						psswrd = "";
					}
					else{
						$("#err-msg").fadeIn(1000, function(){						
							$("#err-msg").text(response);
							$("#btn-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Log In');
						});
					}
				}
			});
			return false;
		}
		
	}
	
	// Call the function for signing up
	function signupForm(){
		var data = $("#reg_form").serialize();
		var remail = $("#usrnm2").val();
		var pass = $("#psswrd2").val();
		var rpass = $("#psswrd3").val();
		
		if(pass != rpass){
			$("#err-msg2").text("Your password did not match.");
			$("#err-msg2").fadeIn();
			$("#err-msg2").fadeOut(5000);
		}
		
		else if(remail==null | remail==""){
			$("#err-msg2").text("Please enter your email address.");
			$("#err-msg2").fadeIn();
			$("#err-msg2").fadeOut(5000);
		}
		else if(pass == null || pass == ""){
			$("#err-msg2").text("Please enter your password.");
			$("#err-msg2").fadeIn();
			$("#err-msg2").fadeOut(5000);
		}
		else {
			$.ajax({		
				type : 'POST',
				url  : 'server/signup.php',
				// url  : 'http://zambalestour.com/server/signup.php',
				data : data,
				beforeSend: function()
				{	
					$("#err-msg2").fadeOut();
					$("#btn-register").html('<span class=""></span> &nbsp; loading...');
				},
				success :  function(response){						
					if(response > 0){
						$("#btn-register").html('&nbsp; Signing up...');
						//setTimeout(' window.location.href = "index.html"; ',4000);
						$("#scc-msg").text(response);
						//console.log(response);
					}
					else{
						if(response == "error-code-4"){
							$("#err-msg2").text("Email already registered.");
							$("#err-msg2").fadeIn();
							$("#err-msg2").fadeOut(5000);
							$("#btn-register").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Sign up');
						}
						else {
							$("#scc-msg").fadeIn(1000, function(){						
								$("#scc-msg").text(response);
								$("#btn-register").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Sign up');
							});
							setTimeout(function(){
								$('#regModal').modal('close');
								$('#loginModal').modal('open');
							}, 3000);
							$("#fname2").val("");
							$("#lname2").val("");
							$("#usrnm2").val("");
							$("#cnum2").val("");
							$("#psswrd2").val("");
							$("#psswrd3").val("");
						}
						//console.log(response);
					}
					
				}
			});
		}
	};
	
	/* Call the function for owner registration */
	function ownerSignupForm(){
		var data = $("#reg_form_owner").serialize();
		var owner_username = $("#owner_username").val();
		var owner_email = $("#owner_email").val();
		var owner_pass = $("#owner_password").val();
		var owner_rpass = $("#owner_password2").val();
		if(owner_pass != owner_rpass){
			$("#err-msg2").text("Your password did not match.");
			$("#err-msg2").fadeIn();
			$("#err-msg2").fadeOut(5000);
		}
		else if(owner_email==null | owner_email==""){
			$("#err-msg2").text("Please enter your email address.");
			$("#err-msg2").fadeIn();
			$("#err-msg2").fadeOut(5000);
		}
		// else if(owner_username==null | owner_username==""){
		// 	$("#err-msg2").text("Please enter your username.");
		// 	$("#err-msg2").fadeIn();
		// 	$("#err-msg2").fadeOut(5000);
		// }
		else if(owner_pass == null || owner_pass == ""){
			$("#err-msg2").text("Please enter your password.");
			$("#err-msg2").fadeIn();
			$("#err-msg2").fadeOut(5000);
		}
		else {
			$.ajax({		
				type : 'POST',
				url  : 'server/signup-owner.php',
				//url  : 'server/signup.php',
				data : data,
				beforeSend: function()
				{	
					$("#err-msg2").fadeOut();
					$("#owner_btn_register").html('<span class=""></span> &nbsp; loading...');
				},
				success :  function(response){						
					if(response > 0){
						$("#owner_btn_register").html('&nbsp; Signing up...');
						//setTimeout(' window.location.href = "index.html"; ',4000);
						$("#scc-msg").text(response);
						console.log(response);
					}
					else{
						if(response == "error-code-4"){
							$("#err-msg2").text("Email already registered.");
							$("#err-msg2").fadeIn();
							$("#err-msg2").fadeOut(5000);
							$("#owner_btn_register").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Sign up');
						}
						else {
							$("#scc-msg").fadeIn(1000, function(){						
								$("#scc-msg").text(response);
								$("#owner_btn_register").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Sign up');
							});
							setTimeout(function(){
								$('#regModal').modal('close');
								$('#loginModal').modal('open');
							}, 3000);

							// FOR RESETTING FIELDS
							$("#owner_fname").val("");
							$("#owner_lname").val("");
							$("#owner_email").val("");
							$("#owner_contact").val("");
							$("#owner_bName").val("");
							$("#owner_bAddress").val("");
							$("#owner_password").val("");
							$("#owner_password2").val("");
						}
						//console.log(response);
					}
				}
			});
		}
	}
});

function logout(){
	localStorage.removeItem("validation");
	// location.reload();
}

//Edit info
function infoUpdateForm(){
	var validUser = localStorage.getItem("validation");
	var fName = $("#fname").val();
	var lName = $("#lname").val();
	var cNum = $("#cnum").val();
	var gender = $("#ugen").val();
	var address = $("#uadd").val();
	var uBio = $("#ubio").val();
	$.ajax({		
		type : 'POST',
		url  : 'server/update-info.php',
		data : "userId2="+validUser+"&fName="+fName+"&lName="+lName+"&cNum="+cNum+"&gender="+gender+"&address="+address+"&uBio="+uBio,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Saved!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

// TO be owner
function sendDetails(){
	var validUser = localStorage.getItem("validation");
	$.ajax({		
		type : 'POST',
		url  : 'server/update-info.php',
		data : "userId="+validUser,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Send!', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

// FOR PlACE INFO ADD
function placeForm(){
	var validUser = localStorage.getItem("validation");
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
		url  : 'server/save-place.php',
		data : "pName="+pName+"&pCategory="+pCategory+"&pMun="+pMun+"&pPrice="+pPrice+"&pAdd="+pAdd+"&pLat="+pLat+"&pLng="+pLng+"&pCnum="+pCnum+"&pWeb="+pWeb+"&pShort="+pShort+"&pLong="+pLong+"&pPax="+pPax+"&userId="+validUser,
		success :  function(response){						
			console.log(response);
			Materialize.toast(response, 3000, 'rounded')
			//$("#u-name").text(uname);
			//$("#uname").val("");
		},
		error : function(response){
			console.log(response);
		}
	});
}

// FOR ADD REVIEW
function reviewForm(){
	var placeId = $("#rPId").val();
	var userId = $("#rUId").val();
	var pRating = $("#result").val();
	var pReview = $("#exp").val();
	
	$.ajax({		
		type : 'POST',
		url  : 'server/save-review.php',
		data : "pId="+placeId+"&uId="+userId+"&pRating="+pRating+"&pReview="+pReview,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Review saved.', 3000, 'rounded');
		},
		error : function(response){
			console.log(response);
		}
	});
}

function confirmReview(getId){
	$.ajax({		
		type : 'POST',
		url  : 'server/update-review.php',
		data : "reviewId="+getId,
		success :  function(response){						
			console.log(response);
			Materialize.toast('Review saved.', 3000, 'rounded');
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
		url  : 'server/update-place.php',
		data : "pName="+pName+"&pCategory="+pCategory+"&pMun="+pMun+"&pPrice="+pPrice+"&pAdd="+pAdd+"&pLat="+pLat+"&pLng="+pLng+"&pCnum="+pCnum+"&pWeb="+pWeb+"&pShort="+pShort+"&pLong="+pLong+"&pPax="+pPax+"&placeId2="+placeId,
		success :  function(response){						
			console.log(response);
			Materialize.toast(response, 3000, 'rounded')
			//$("#u-name").text(uname);
			//$("#uname").val("");
		},
		error : function(response){
			console.log(response);
		}
	});
}

// function postForm(){
// 	$.ajax({		
// 		type : 'POST',
// 		//url  : 'server/name-update.php',
// 		url  : 'server/update-place.php',
// 		data : "pName="+pName+"&pCategory="+pCategory+"&pMun="+pMun+"&pPrice="+pPrice+"&pAdd="+pAdd+"&pLat="+pLat+"&pLng="+pLng+"&pCnum="+pCnum+"&pWeb="+pWeb+"&pShort="+pShort+"&pLong="+pLong+"&pPax="+pPax+"&placeId2="+placeId,
// 		success :  function(response){						
// 			console.log(response);
// 			Materialize.toast(response, 3000, 'rounded')
// 			//$("#u-name").text(uname);
// 			//$("#uname").val("");
// 		},
// 		error : function(response){
// 			console.log(response);
// 		}
// 	});
// }

// Reactivate Account
// FOR ADD REVIEW
function reactivateAccount(){
	var email = $("#owner_reAcEmail").val();
	var password = $("#owner_reAcPassword").val();
	if(email == "" || email == null){
		$('#err-msg3').text("Please enter your email!");
	}
	if(password == "" || password == null) {
		$('#err-msg3').text("Please enter your password!");
	}
	$.ajax({		
		type : 'POST',
		url  : 'server/signup-owner.php',
		data : "email="+email+"&password="+password+"&reactivation=reactivate",
		success :  function(response){						
			console.log(response);
			Materialize.toast('Account Reactivated.', 3000, 'rounded');
			setTimeout(function(){
				$('#reactivate').modal('close');
				$("#owner_reAcEmail").val("");
				$("#owner_reAcPassword").val("");
				$("#owner_email2").val("");
				$("#owner_password3").val("");
				$('#loginModal').modal('open');
			}, 3000);
		},
		error : function(response){
			console.log(response);
			$('#err-msg3').text(response);
		}
	});
}