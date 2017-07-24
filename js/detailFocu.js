function showUp(name){
	if(name == "detail-text-effect-01"){
		document.getElementById("detail-text-effect-01").style.display = "block";
		document.getElementById("detail-text-effect-01").style.zIndex = "9999";
	} else if(name == "detail-text-effect-02"){
		document.getElementById("detail-text-effect-02").style.display = "block";
		document.getElementById("detail-text-effect-02").style.zIndex = "9999";
	} else if(name == "detail-text-effect-03"){
		document.getElementById("detail-text-effect-03").style.display = "block";
		document.getElementById("detail-text-effect-03").style.zIndex = "9999";
	} else if(name == "detail-text-effect-04"){
		document.getElementById("detail-text-effect-04").style.display = "block";
		document.getElementById("detail-text-effect-04").style.zIndex = "9999";
	}
}

function hideEffect(name){
	if(name == "detail-text-effect-01"){
		document.getElementById("detail-text-effect-01").style.display = "none";
		document.getElementById("detail-text-effect-01").style.zIndex = "0";
	} else if(name == "detail-text-effect-02"){
		document.getElementById("detail-text-effect-02").style.display = "none";
		document.getElementById("detail-text-effect-02").style.zIndex = "0";
	} else if(name == "detail-text-effect-03"){
		document.getElementById("detail-text-effect-03").style.display = "none";
		document.getElementById("detail-text-effect-03").style.zIndex = "0";
	} else if(name == "detail-text-effect-04"){
		document.getElementById("detail-text-effect-04").style.display = "none";
		document.getElementById("detail-text-effect-04").style.zIndex = "0";
	}
}