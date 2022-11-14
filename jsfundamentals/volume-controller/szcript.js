//length: how many bars
//height: height of the tallest bar
//nowselected: which bar is selected
function drawvolumecontroller(length,height,nowselected){	
	document.getElementById("volumcontroller").innerHTML = "";
	for (i=0;i<length;i++){
		magassag = 7 + Math.round((1.4)*(length - i)); //where 40 is the container height
		margintop = height-magassag;
		if (margintop <= 0) {margintop=0;}
		if (i >= nowselected){		//background-color valtozik ameddig epp ki van jelolve
			document.getElementById("volumcontroller").innerHTML = document.getElementById("volumcontroller").innerHTML+'<div  onmouseup="volumecontrolchanged('+i+')" style="background-color:#898989;height:'+magassag+'px;margin-top:'+margintop+'px;" class="volumecontrollerbar"></div>';
		} else {
			document.getElementById("volumcontroller").innerHTML = document.getElementById("volumcontroller").innerHTML+'<div  onmouseup="volumecontrolchanged('+i+')" style="height:'+magassag+'px;margin-top:'+margintop+'px;" class="volumecontrollerbar"></div>';
		}		
	}	
}
function volumecontrolchanged(newvolume){
	drawvolumecontroller(20,35,newvolume);
	document.getElementById("volumeindicator").innerHTML = newvolume;
//	alert(newvolume);
}
