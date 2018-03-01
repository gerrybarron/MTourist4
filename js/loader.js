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
var stars;
var compute;
var compute2;
var dest = getUrlParameter('dest');

$(document).ready(function(){
    // if(window.location.pathname == "/MTourist4/destination.html"){
        getDestPlaceData();
        $("#search").change(function(){
            var searched = $("#search").val();
            getSearchPlaceData(searched);
        });
        
        $("#filterPrice").change(function(){
            var searched = $("#filterPrice").val();
            getSearchPriceData(searched);
        });
        
        $("#autocomplete-input").change(function(){
            var searched = $("#autocomplete-input").val();
            getFilterPlaceDataByCat(searched);
        });
    // }
    // else{
        getPromoData();
        getMunicipalityData();
    // }
    
});

// Get promotion data
function getPromoData() {
    $.getJSON("server/admin-data.php?promo=all", function(result){
        console.log(result);
        $("#sliderTagline1").text(result[0].promoCaption);
        $("#sliderTagline2").text(result[1].promoCaption);
        $("#sliderTagline3").text(result[2].promoCaption);
        $("#mainTagline").text(result[3].promoCaption);
        $("#sliderSlogan1").text(result[0].promoSlogan);
        $("#sliderSlogan2").text(result[1].promoSlogan);
        $("#sliderSlogan3").text(result[2].promoSlogan);
        $("#mainSlogan").text(result[3].promoSlogan);
    });
}

function getMunicipalityData(){
    $.getJSON("server/view.php?dest=all", function(result){
        $("#placeLongDesc1").text(result[0].fld_shortDesc);
        $("#placeLongDesc2").text(result[1].fld_shortDesc);
        $("#placeLongDesc3").text(result[2].fld_shortDesc);
        $("#placeLongDesc4").text(result[3].fld_shortDesc);
        $("#placeLongDesc5").text(result[4].fld_shortDesc);
        $("#placeLongDesc6").text(result[5].fld_shortDesc);
        $("#placeLongDesc7").text(result[6].fld_shortDesc);
        $("#placeLongDesc8").text(result[7].fld_shortDesc);
        $("#placeLongDesc9").text(result[8].fld_shortDesc);
        $("#placeLongDesc10").text(result[9].fld_shortDesc);
        $("#placeLongDesc11").text(result[10].fld_shortDesc);
        $("#placeLongDesc12").text(result[11].fld_shortDesc);
        $("#placeLongDesc13").text(result[12].fld_shortDesc);
    });
}

function getDestPlaceData(){
    var totalrating = 0;
    var count = 0;
    var fiveStar = 0;
    var fourStar = 0;
    var threeStar = 0;
    var twoStar = 0;
    var oneStar = 0;
    
    $.getJSON("server/view.php?destName="+dest, function(result){
        for (i = 0; i < result.length; i++) {
            var propic;
            var trimpic;
            
            
            $.getJSON("server/view.php?placeRating="+result[i].fld_placeId, function(result2){
                
                for (i = 0; i < result2.length; i++) {
                    console.log(result2[i].fld_rating);
                    if(result2[i].fld_rating == null || result2[i].fld_rating == "" || result2[i].fld_rating == undefined){
                        
                    }else{
                        if (result2[i].fld_rating == 5){
                            console.log("5")
                            totalrating = totalrating + result2[i].fld_rating;
                            count++;
                        }
                        if (result2[i].fld_rating == 4){
                            totalrating = totalrating + result2[i].fld_rating;
                            count++;
                        }
                        if (result2[i].fld_rating == 3){
                            totalrating = totalrating + result2[i].fld_rating;
                            count++;
                        }
                        if (result2[i].fld_rating == 2){
                            totalrating = totalrating + result2[i].fld_rating;
                            count++;
                        }
                        if (result2[i].fld_rating == 1){
                            totalrating = totalrating + result2[i].fld_rating;
                            count++;
                        }
                        if (result2[i].fld_rating == 0){
                            totalrating = totalrating + result2[i].fld_rating;
                            count++;
                        }
                    }
                    console.log(totalrating);
                    console.log(count);
                    compute = totalrating/count;
                    console.log(compute);
                }
                
                if (compute <= 5){
                    stars = '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>';
                    $("#rating1").html("");
                    $("#rating2").html("");
                    $("#rating1").append(stars);
                    $("#rating2").append(stars);
                }
                if (compute <= 4){
                    stars = '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star"></i>';
                    $("#rating1").html("");
                    $("#rating2").html("");
                    $("#rating1").append(stars);
                    $("#rating2").append(stars);
                }
                if (compute <= 3){
                    stars = '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>';
                }
                if (compute <= 2){
                    stars = '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>';
                }
                if (compute <= 1){
                    stars = '<i class="fa fa-star checked"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>';
                }
                if (compute == 0){
                    stars = '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>';
                }
                compute = compute2;
            });
            
            if(result[i].fld_img1 == "" || result[i].fld_img1 == null){
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="img/img-295-218.png">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
                '<p id="rating1">'+
                '</p>'+
                '<span class="pull-left">₱'+result[i].fld_startPrice+'</span>'+
                '</div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p id="rating2">'+
                '</p>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            }else {
                propic = result[i].fld_img1;
                trimpic = propic.split(' ').join('+');
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="'+trimpic+'">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
                '<p id="rating1">'+
                '</p>'+
                '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                '</div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p id="rating2">'+
                '</p>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            }
            
        }
    });
}

function getSearchPlaceData(searchValue){
    $("#destPlaceList").html("");
    $.getJSON("server/view.php?destName2="+dest+"&name="+searchValue, function(result){
        for (i = 0; i < result.length; i++) {
            var propic;
            var trimpic;
            if(result[i].fld_img1 == "" || result[i].fld_img1 == null){
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="img/img-295-218.png">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
                '<p>'+
                '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                '</p>'+
                '</div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '</p>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            }else {
                propic = result[i].fld_img1;
                trimpic = propic.split(' ').join('+');
                
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="'+trimpic+'">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
                '<p>'+
                '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                '</p>'+
                '</div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '</p>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            }
            
        }
    });
}

function getSearchPriceData(searchValue){
    $("#destPlaceList").html("");
    $.getJSON("server/view.php?destName4="+dest+"&name="+searchValue, function(result){
        for (i = 0; i < result.length; i++) {
            var propic;
            var trimpic;
            if(result[i].fld_img1 == "" || result[i].fld_img1 == null){
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="img/img-295-218.png">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
                '<p>'+
                '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                '</p>'+
                '</div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '</p>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            } else {
                propic = result[i].fld_img1;
                trimpic = propic.split(' ').join('+');
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="'+trimpic+'">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
                '<p>'+
                '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                '</p>'+
                '</div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '</p>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            }
            
        }
    });
}

function getFilterPlaceDataByCat(searchValue){
    $("#destPlaceList").html("");
    $.getJSON("server/view.php?destName3="+dest+"&category="+searchValue, function(result){
        for (i = 0; i < result.length; i++) {
            var propic;
            var trimpic;
            if(result[i].fld_img1 == "" || result[i].fld_img1 == null){
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="img/img-295-218.png">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
                '<p>'+
                '<span class="pull-right">₱'+result[i].fld_startPrice+'</span>'+
                '</p>'+
                '</div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '</p>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            } else {
                propic = result[i].fld_img1;
                trimpic = propic.split(' ').join('+');
                $("#destPlaceList").append('<div class="col l4">'+
                '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                '<img class="activator" src="'+trimpic+'">'+
                '</div>'+
                '<div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-bars right"></i></span>'+
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
                '<span class="card-title grey-text text-darken-4">'+result[i].fld_name+'<i class="fa fa-times right"></i></span>'+
                '<p>'+
                '<i class="fa fa-star checked"></i>'+
                '<i class="fa fa-star checked"></i>'+
                '<i class="fa fa-star checked"></i>'+
                '<i class="fa fa-star checked"></i>'+
                '<i class="fa fa-star checked"></i>'+
                '<span class="pull-right">'+result[i].fld_category+'</span>'+
                '</p>'+
                '<p>'+result[i].fld_contact+'</p>'+
                '<a href="http://'+result[i].fld_website+'" target="_blank">'+result[i].fld_website+'</a>'+
                '<p>'+result[i].fld_address+'</p>'+
                '<p>'+result[i].fld_shortDesc+'</p>'+
                '<div class="col l12 center">'+
                '<a id="'+result[i].fld_placeId+'" onclick="getClickedId(this.id);" href="#placeDetails" class="btn-rounded modal-trigger">Learn more</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
            }
            
        }
    });
}

function getClickedId(item_id){
    $("#reviewData").html("");
    $("#toAppend").html("");
    $.getJSON("server/view.php?placeId="+item_id, function(result){
        $("#pDTitle").text(result.fld_name);
        $("#pDCategory").text(result.fld_category);
        $("#pDPrice").text('₱'+result.fld_startPrice);
        $("#pDWebsite").text(result.fld_website);
        $("#pDCnum").text(result.fld_contact);
        $("#pDAddress").text(result.fld_address);
        $("#pDLongDesc").text(result.fld_longDesc);
        $("#pRId").val(result.fld_placeId);
        $("#pRUId").val(localStorage.getItem("validation"));
        var propic;
        var trimpic;
        if(result.fld_img1 == "" || result.fld_img1 == null){
            
        }else{
            propic = result.fld_img1;
            trimpic = propic.split(' ').join('+');
            $("#imgplace").attr("src",trimpic);

            // FOR FIRST WIDE IMG AND THUMBNAIL
            propic1 = result.fld_img1;
            trimpic1 = propic1.split(' ').join('+');
            $("#img-wide1").attr("src",trimpic1);
            $("#img-thumb1").attr("src",trimpic1);

            // FOR SECOND WIDE IMG AND THUMBNAIL
            propic2 = result.fld_img2;
            trimpic2 = propic2.split(' ').join('+');
            $("#img-wide2").attr("src",trimpic2);
            $("#img-thumb2").attr("src",trimpic2);

            // FOR THIRD WIDE IMG AND THUMBNAIL
            propic3 = result.fld_img3;
            trimpic3 = propic3.split(' ').join('+');
            $("#img-wide3").attr("src",trimpic3);
            $("#img-thumb3").attr("src",trimpic3);

            // FOR FOURTH WIDE IMG AND THUMBNAIL
            propic4 = result.fld_img4;
            trimpic4 = propic4.split(' ').join('+');
            $("#img-wide4").attr("src",trimpic4);
            $("#img-thumb4").attr("src",trimpic4);

            // FOR FIFTH WIDE IMG AND THUMBNAIL
            propic5 = result.fld_img5;
            trimpic5 = propic5.split(' ').join('+');
            $("#img-wide5").attr("src",trimpic5);
            $("#img-thumb5").attr("src",trimpic5);
        }
        $("#toAppend").append(
            '<a class="modal-trigger" id="'+result.fld_placeId+'" href="#directionModal" onclick="getPlaceDirection(this.id);locmap();">'+
            '<i class="fa fa-location-arrow" aria-hidden="true"></i>'+
            'Get Direction'+
            '</a>'
        );
    });
    
    $.getJSON("server/view.php?placeId2="+item_id, function(result2){
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
        
        for (i = 0; i < result2.length; i++) { 
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
            $("#reviewData").append(
                '<li class="collection-item">'+
                '<span class="title bold">'+result2[i].fld_email+'</span>'+
                '<a class="secondary-content grey-text hide-on-small-only">'+result2[i].fld_timestamp+'</a>'+
                '<div>'+stars+'</div>'+
                '<p>'+result2[i].fld_review+'</p>'+
                '</li>'
            );
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

function passData(){
    $("#rTitle").text($("#pDTitle").text());
    $("#rPId").val($("#pRId").val());
    $("#rUId").val($("#pRUId").val());
}