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
    getPromoData();
});

// Get dashboard data
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