function do_rsvp() {
	//alert('Placeholder for RSVP box');
	var xmlhttp;
	var str;
	
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			alert('RSVP registered. Thanks!');
		}
	}

	xmlhttp.open("GET", "postrsvp.php?q="+str, true);
	xmlhttp.send();
}
