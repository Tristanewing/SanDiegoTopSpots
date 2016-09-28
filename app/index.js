$(document).ready(function() {

	$()
$.getJSON("topspots.json", function(work) {

$.each(work.topspots, function(index,sd){


	

$("#info").append("<tr><td>" + sd.name + "</td><td>" + sd.description + "</td><td>" + "<a href=https://www.google.com/maps?q=" 
            + sd.location[0] + "," + sd.location[1] + "><button type='button' class= 'btn btn-primary'>Google Maps</button></a>" + "</td></tr>");




});


     

   });

});














