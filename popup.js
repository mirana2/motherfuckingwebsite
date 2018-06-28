//setTimeout(()=> alert ('Hey le site xxxvidsxxx et trop bien. Vien dessus stp please'), 10000);
function openmodal() { 
	//document.getElementById("modal").style.top = "0px";
	document.body.style.backgroundColor="magenta";
		var paragraphe = document.getElementsByTagName("p");
		var i;
		for (i=0; i<paragraphe.length;i++) {
			paragraphe[i].style.color="blue";
			paragraphe[i].style.fontFamily='papyrus';
		}

		var ash1=document.getElementsByTagName("h1");
		var i;
		for (i=0; i<ash1.length; i++) {
			ash1[i].style.color="green";
			ash1[i].style.fontFamily='comic Sans';
		}

		var ash2=document.getElementsByTagName("h1");
		var i;
		for (i=0; i<ash2.length; i++) {
			ash2[i].style.color="green";
			ash2[i].style.fontFamily='comic Sans';
		}

}		