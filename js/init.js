(function($){
  $(function(){
    
    // Plugin initialization
    $('.carousel.carousel-slider').carousel({
      fullWidth: false
    });
    $('ul.tabs').tabs('select_tab', 'tCon');
    $('.carousel').carousel();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({
      'edge': 'left'
    });
    $('.datepicker').pickadate({
      selectYears: 20
    });
    $('.timepicker').pickatime();
    $('select').not('.disabled').material_select();
    $('input.autocomplete').autocomplete({
      data: {
        "Resort": null,
        "Hotel": null,
        "Beach": null,
        "Restaurant": null,
        // "Café": null,
        // "Shopping Centre": null,
        // "Bar": null,
        // "Supermarket": null,
        // "Hospital": null,
        // "Bank": null,
        // "Gas Station": null,
        // "ATM": null,
        // "Museum": null,
        // "Cinema": null,
        // "Nightclub": null,
      },
      minLength: 0,
      // limit: 2,
    });
    $('input.autocomplete2').autocomplete({
      data: {
        "Resort": null,
        "Hotel": null,
        "Beach": null,
        "Restaurant": null,
        // "Café": null,
        // "Shopping Centre": null,
        // "Bar": null,
        // "Supermarket": null,
        // "Hospital": null,
        // "Bank": null,
        // "Gas Station": null,
        // "ATM": null,
        // "Museum": null,
        // "Cinema": null,
        // "Nightclub": null,
      },
      minLength: 0,
      // limit: 2,
    });
    $('#placeMun').autocomplete({
      data: {
        "Botolan": null,
        "Cabangan": null,
        "Candelaria": null,
        "Castillejos": null,
        "Iba": null,
        "Masinloc": null,
        "Palauig": null,
        "San Antonio": null,
        "San Felipe": null,
        "San Marcelino": null,
        "San Narciso": null,
        "Santa Cruz": null,
        "Subic": null,
      },
      minLength: 0,
      // limit: 2,
    });
    $('#placeMun2').autocomplete({
      data: {
        "Botolan": null,
        "Cabangan": null,
        "Candelaria": null,
        "Castillejos": null,
        "Iba": null,
        "Masinloc": null,
        "Palauig": null,
        "San Antonio": null,
        "San Felipe": null,
        "San Marcelino": null,
        "San Narciso": null,
        "Santa Cruz": null,
        "Subic": null,
      },
      minLength: 0,
      // limit: 2,
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space