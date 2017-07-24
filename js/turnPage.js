function showUp(name){
	if(name == "home-page-effect"){
		document.getElementById("home-page-effect").style.display = "block";
		document.getElementById("home-page-effect").style.zIndex = "9999";
	} else if(name == "pre-page-effect"){
		document.getElementById("pre-page-effect").style.display = "block";
		document.getElementById("pre-page-effect").style.zIndex = "9999";
	} else if(name == "next-page-effect"){
		document.getElementById("next-page-effect").style.display = "block";
		document.getElementById("next-page-effect").style.zIndex = "9999";
	} else if(name == "last-page-effect"){
		document.getElementById("last-page-effect").style.display = "block";
		document.getElementById("last-page-effect").style.zIndex = "9999";
	}
}

function hideEffect(name){
	if(name == "home-page-effect"){
		document.getElementById("home-page-effect").style.display = "none";
		document.getElementById("home-page-effect").style.zIndex = "0";
	} else if(name == "pre-page-effect"){
		document.getElementById("pre-page-effect").style.display = "none";
		document.getElementById("pre-page-effect").style.zIndex = "0";
	} else if(name == "next-page-effect"){
		document.getElementById("next-page-effect").style.display = "none";
		document.getElementById("next-page-effect").style.zIndex = "0";
	} else if(name == "last-page-effect"){
		document.getElementById("last-page-effect").style.display = "none";
		document.getElementById("last-page-effect").style.zIndex = "0";
	}
}