/* -------------------- GLOBALS -------------------- */
/* ------------------------------------------------ */
var perLine = 4;
/* ----------- BROWSER SUPPORT ---------- */

//check if user's browser is Chrome
var isChrome = !!window.chrome && !!window.chrome.webstore;
var windowWidth;
var vpWidth;

//IE9 transit fallback
if (!$.support.transition) {
   $.fn.transition = $.fn.animate;
}


/* -------------------- PLUGINS -------------------- */
/* ------------------------------------------------ */

/* -------------------- AJAX ------------------------ */
/* -------------------------------------------------- */


/* -------------------- FUNCTIONS -------------------- */
/* -------------------------------------------------- */
//we need to treat the window width variable differently depending on
//whether the user is using Chrome or not. Chrome interprets the window width
//larger than css does (maybe this is an error that will be fixed soon), so without treating them differently, there would be gaps
//in responsive breakpoints. Other browsers wth this issue should be added as noticed.
//Make sure to use the windowWidth variable rather than using $(window).width()
function setWindowWidth() {
	if (isChrome === true) {
		vpWidth = viewport().width;
   		windowWidth = vpWidth;
	} else {
		windowWidth = $(window).width();
	}
}
//get viewport size 
function viewport() {
   var e = window, a = 'inner';
   if (!('innerWidth' in window )) {
       a = 'client';
       e = document.documentElement || document.body;
   }
   return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

//add break between every x boxes to create interface
function createInterface() {
	$('.card-container').each(function(i) {
		if ((i + 1) % perLine == 0 && i != 0) {
			$(this).after("<div class='push'></div>");
		}
	});
}
/* --------------------- EVENT LISTENERS ---------------------- */
/* ------------------------------------------------------------ */


/* --------------------- DOCUMENT READY ---------------------- */
/* ----------------------------------------------------------- */
$(document).ready(function() {
	createInterface();
}); // end document ready
// $( window ).load(function() {

//this throws an error, probably something to do with webpack. turned off for now.
// }); // end window load
$(window).scroll(function() {

});// end window scroll
$(window).resize(function() {

}); // end window resize