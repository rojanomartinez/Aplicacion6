// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener( 'deviceready', function() {
		$('#btnvibrar').on('tap',function() {
			navigator.notification.vibrate(999999999999999999999999999999999999999999999999999999990000);
    });
  });
});

