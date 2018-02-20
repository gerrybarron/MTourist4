var userID = getUrlParameter('usrID');
var localUserID = localStorage.getItem("validation");
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

$(document).ready(function(){
    // FOR USER INFO
    getUserData();
    getOwnerData();
    loadPost();
    //To save loading time
    //console.log(window.location.pathname);
    // if(window.location.pathname){
    
    // }
});// end of document ready function

function getUserData(){
    $.getJSON("server/view.php?uID="+localUserID, function(result){
        // var userName = result.fld_name;
        // if(userName == "" | userName == null){
        //     $("#updateInfo").modal("open");
        // }
        console.log(result);
        var propic;
        var trimpic;
        propic = result.fld_pic;
        trimpic = propic.split(' ').join('+');
        if(result.fld_pic == "" || result.fld_pic == null){
            
        }else {
            // $("#images").append('<img src="data:image/png;base64,'+trimpic+'" class="my-image" />');
            // $("#propic").attr("src",'data:image/png;base64,'+trimpic);
            $("#propic").attr("src",trimpic);
        }
        $("#profileName").text(result.fld_fName+' '+result.fld_lName);
        $("#profileBio").text(result.fld_bio);
        // $("#uEmail").text(result.fld_email);
        $("#fname").val(result.fld_fName);
        $("#lname").val(result.fld_lName);
        $("#cnum").val(result.fld_cNum);
        $("#ugen").val(result.fld_gender);
        $("#uadd").val(result.fld_address);
        $("#ubio").val(result.fld_bio);
        
        //for Profile Page
        if(result.fld_level == "owner" && result.fld_confirm == "unconfirmed"){
            $("#userEmail").prop("disabled", true);
            $("#userCnum").prop("disabled", true);
            $("#btnSend").addClass("disabled");
            $("#placeModalTitle").addClass("hide");
            $("#placeModalSub").text("You already send your application. Please wait for the confirmation, thank you.");
        }
        if(result.fld_level == "owner" && result.fld_confirm == "confirmed"){
            $("#userEmail").prop("disabled", true);
            $("#userCnum").prop("disabled", true);
            $("#btnSend").addClass("disabled");
            $("#toConfirm").addClass("hide");
            $("#hasConfirmed").removeClass("hide");
        }
    });
}

function getOwnerData(){
    $.getJSON("server/view.php?ownerId="+localUserID, function(result){
        console.log(result);
        if(result[0].fld_placeId == null || result[0].fld_placeId == ""){
            $("#tohide2").removeClass("hide");
        }
        else{
            $("#tohide2").addClass("hide");
            var propic;
            var trimpic;
            for (i = 0; i < result.length; i++) {
                if(result[i].fld_img1 == "" || result[i].fld_img1 == null){
                    $("#myplace-list").append('<div class="col l12">'+
                    '<div class="card">'+
                    '<div class="card-image waves-effect waves-block waves-light">'+
                    '<img class="activator" src="img/img-295-218.png">'+
                    '</div>'+
                    '<div class="card-content">'+
                    '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="material-icons right">more_vert</i></span>'+
                    '<p>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                    '</p>'+
                    '</div>'+
                    '<div class="card-reveal">'+
                    '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="material-icons right">close</i></span>'+
                    '<p>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<span class="pull-right">'+result[i].fld_category+'</span>'+
                    '</p>'+
                    '<p>'+result[i].fld_contact+'</p>'+
                    '<p>'+result[i].fld_website+'</p>'+
                    '<p>'+result[i].fld_address+'</p>'+
                    '<p>'+result[i].fld_shortDesc+'</p>'+
                    '<div class="col l12 center">'+
                    '<a id="'+result[i].fld_placeId+'" onclick="getClickedId2(this.id);editmap();" href="#editPlace" class="btn modal-trigger">Edit</a>'+
                    '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#viewReview" class="btn modal-trigger modal-close">Reviews</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>');
                }else {
                    propic = result[i].fld_img1;
                    trimpic = propic.split(' ').join('+');
                    $("#myplace-list").append('<div class="col l12">'+
                    '<div class="card">'+
                    '<div class="card-image waves-effect waves-block waves-light">'+
                    '<img class="activator" src="'+trimpic+'">'+
                    '</div>'+
                    '<div class="card-content">'+
                    '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="material-icons right">more_vert</i></span>'+
                    '<p>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                    '</p>'+
                    '</div>'+
                    '<div class="card-reveal">'+
                    '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="material-icons right">close</i></span>'+
                    '<p>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<span class="pull-right">'+result[i].fld_category+'</span>'+
                    '</p>'+
                    '<p>'+result[i].fld_contact+'</p>'+
                    '<p>'+result[i].fld_website+'</p>'+
                    '<p>'+result[i].fld_address+'</p>'+
                    '<p>'+result[i].fld_shortDesc+'</p>'+
                    '<div class="col l12 center">'+
                    '<a id="'+result[i].fld_placeId+'" onclick="getClickedId2(this.id);editmap();" href="#editPlace" class="btn modal-trigger">Edit</a>'+
                    '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#viewReview" class="btn modal-trigger modal-close">Reviews</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>');
                }
                
            }
        }
        
    });
}

function getClickedId(item_id){
    $("#reviewData").html("");
    $.getJSON("server/view.php?placeId3="+item_id, function(result2){
        console.log(result2);
        var stars;
        var totalrating = 0;
        var count = 0;
        var compute;
        var fivecompute;
        var fourcompute;
        var threecompute;
        var twocompute;
        var onecompute;
        var fiveStar = 0;
        var fourStar = 0;
        var threeStar = 0;
        var twoStar = 0;
        var oneStar = 0;
        
        for (i = 0; i < result2.length + 1; i++) { 
            if (result2[i].fld_rating == 5){
                stars = '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>';
                totalrating = totalrating + result2[i].fld_rating;
                count++;
                fiveStar++;
            }
            if (result2[i].fld_rating == 4) {
                stars = '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star"></span>';
                totalrating = totalrating + result2[i].fld_rating;
                count++;
                fourStar++;
            }
            if (result2[i].fld_rating == 3) {
                stars = '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star"></span>';
                totalrating = totalrating + result2[i].fld_rating;
                count++;
                threeStar++;
            }
            if (result2[i].fld_rating == 2) {
                stars = '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star"></span>';
                totalrating = totalrating + result2[i].fld_rating;
                count++;
                twoStar++;
            }
            if (result2[i].fld_rating == 1) {
                stars = '<span class="fa fa-star checked"></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star"></span>';
                totalrating = totalrating + result2[i].fld_rating;
                count++;
                oneStar++;
            }
            if(result2[i].fld_status == "confirmed"){
                $("#reviewData").append(
                    '<li class="collection-item">'+
                    '<span class="title bold">'+result2[i].fld_email+'</span>'+
                    '<a class="secondary-content grey-text hide-on-small-only">'+result2[i].fld_timestamp+'</a>'+
                    '<div>'+stars+'</div>'+
                    '<p>'+result2[i].fld_review+'</p>'+
                    '<p>Status: '+result2[i].fld_status+'</p>'+
                    '</li>'
                );
            } else {
                $("#reviewData").append(
                    '<li class="collection-item">'+
                    '<span class="title bold">'+result2[i].fld_email+'</span>'+
                    '<a class="secondary-content grey-text hide-on-small-only">'+result2[i].fld_timestamp+'</a>'+
                    '<div>'+stars+'</div>'+
                    '<p>'+result2[i].fld_review+'</p>'+
                    '<p>Status: '+result2[i].fld_status+'</p>'+
                    '<a id="'+result2[i].fld_reviewId+'" onclick="confirmReview(this.id);" href="#">Confirm Review</a>'+
                    '</li>'
                );
            }
            
            
            compute = totalrating/count;
            fivecompute = (fiveStar/count)*100;
            fourcompute = (fourStar/count)*100;
            threecompute = (threeStar/count)*100;
            twocompute = (twoStar/count)*100;
            onecompute = (oneStar/count)*100;
            $("#five-total").text(fiveStar);
            $(".bar-5").css("width", fivecompute+'%');
            $("#four-total").text(fourStar);
            $(".bar-4").css("width", fourcompute+'%');
            $("#three-total").text(threeStar);
            $(".bar-3").css("width", threecompute+'%');
            $("#two-total").text(twoStar);
            $(".bar-2").css("width", twocompute+'%');
            $("#one-total").text(oneStar);
            $(".bar-1").css("width", onecompute+'%');
            $("#rateYo").rateYo("option", "rating", compute);
        }
    });
}

function getClickedId2(item_id){
    $.getJSON("server/view.php?placeId4="+item_id, function(result2){
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

function loadPost(){
    $.getJSON("server/view.php?postUserId="+localUserID, function(result){
        var propic;
        var trimpic;
        console.log(result);
        for (i = 0; i < result.length; i++) {
            propic = result[i].fld_image;
            trimpic = propic.split(' ').join('+');
            $("#post-list").append(
                '<div class="col l12">'+
                    '<div class="card">'+
                        '<div class="card-image">'+
                            '<img src="'+trimpic+'">'+
                            '<span class="card-title">'+result[i].fld_placeName+'</span>'+
                        '</div>'+
                        '<div class="card-content">'+
                            '<p>'+result[i].fld_post+'</p>'+
                        '</div>'+
                    '</div>'+
                '</div>'
            );
        }
        
    });
}