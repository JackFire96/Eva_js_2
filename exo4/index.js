var wm = document.getElementById("svg2");

wm.addEventListener("load", function() {
	
	var caption = document.querySelector("#map-caption"); 
    var selectedCountries = document.querySelector("path");
    
	for (var i = 0, length = selectedCountries.length; i < length; i++) {
		 
		// add mouseover event listener on all selected countries
		selectedCountries[i].addEventListener("mouseover", function() {			
			var elemId = this.id;
			elemId = elemId.split('_').join(''); // remove the default "_" separator from country names
            caption.innerHTML = elemId; //get the id to write the name of the country
            this.style.fill = "blue";
            console.log('log hover');
		});		 
		
		// add mouseout event listener on all selected countries
		selectedCountries[i].addEventListener("mouseout", function() {
            caption.innerHTML = ""; //remove the country name
            this.style.fill = ""; //remove background color
            console.log('log out');
        });	

        console.log('log for 1');
    }

    for (var j = 0, length = selectedCountries.length; j < length; j++) {
        // add click event listener on all selected countries
		selectedCountries[i].addEventListener("click", function() {
            var elemId = this.id; 
			elemId = elemId.split('_').join(' ');
            caption.innerHTML = elemId;
            this.style.fill = "#ff452f"; 
            console.log('log click');
        });
        console.log('log for 2');
    }
    console.log('working');	

}, false);