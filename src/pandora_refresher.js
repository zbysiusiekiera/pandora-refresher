(function() {
	function checkForButton() {
		console.log('Checking for button');
		if (document.getElementById('still_listening_ignore')) {
			console.log('Refreshing!');
			window.location = 'http://www.pandora.com';
		}
	}
	
	setInterval(checkForButton, 10000);
	
}());


