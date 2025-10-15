// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// Custom filtering without external dependencies
$(document).ready(function() {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        
        if (filterValue === '*') {
            // Show all items
            $('.grid .col-sm-6').show();
        } else {
            // Hide all items first
            $('.grid .col-sm-6').hide();
            // Show only matching items
            $('.grid .col-sm-6' + filterValue).show();
        }
    });
});

// Simple select styling (replacing nice select)
$(document).ready(function() {
    // Basic select styling without external dependencies
    $('select').addClass('form-control');
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Simple carousel functionality (replacing owl carousel)
// Since we removed external dependencies, basic carousel can be handled by Bootstrap