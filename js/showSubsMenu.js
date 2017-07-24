function showSubsMenu(name){
	if(name == "brands-items"){
		document.getElementById("brands-items").style.display = "block";
		document.getElementById("activities-items").style.display = "none";
		document.getElementById("products-items").style.display = "none";
	} else if(name == "products-items"){
		document.getElementById("products-items").style.display = "block";
		document.getElementById("activities-items").style.display = "none";
		document.getElementById("brands-items").style.display = "none";
	} else if(name == "activities-items"){
		document.getElementById("activities-items").style.display = "block";
		document.getElementById("products-items").style.display = "none";
		document.getElementById("brands-items").style.display = "none";
	}
}