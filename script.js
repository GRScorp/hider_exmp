document.addEventListener("DOMContentLoaded", function(){
	var visibility_marker=0; 
	
	//var a = document.getElementsByClassName("cl_test") ;
	//console.log(document.getElementsByClassName("cl_test"));
    //a.innerText = "reeee";
	
	document.querySelector(".cl_calc_box").addEventListener("click", function(){
		if (visibility_marker==0)/*show box*/{
			document.querySelector('#idmain_calc_box').style.display = "block";
		    document.querySelector('#idmain_calc_box').style.opacity = 1;
			var iddiv = document.querySelector(".cl_calc_box").getAttribute("iddiv");
			document.querySelector('#'+iddiv).style.display = "block";
		    document.querySelector('#'+iddiv).style.opacity = 1;
			document.querySelector('#idmain_calc_box').setAttribute('opendiv',iddiv);
        	visibility_marker=1;
        	return false;
		}
		if (visibility_marker==1)/*hide box*/{
        	var iddiv = document.querySelector('#idmain_calc_box').getAttribute('opendiv');
			document.querySelector('#idmain_calc_box').style.display = "block";
			document.querySelector('#idmain_calc_box').style.opacity = 0;
			document.querySelector('#'+iddiv).style.display = "block";
			document.querySelector('#'+iddiv).style.opacity = 0;
			visibility_marker=0;
		}
	});

 	document.querySelector('#cl_calc_box, .cl_calc_box_hider').addEventListener("click", function()/*hide key*/{
		var iddiv = document.querySelector('#idmain_calc_box').getAttribute('opendiv');
		document.querySelector('#idmain_calc_box').style.display = "block";
		document.querySelector('#idmain_calc_box').style.opacity = 0;
		document.querySelector('#'+iddiv).style.display = "block";
		document.querySelector('#'+iddiv).style.opacity = 0;
		visibility_marker=0;
	});
});