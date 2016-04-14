// javascript file

var picList = new Array(5);
var locationData = new Array(5);
var captionData = new Array(5);
var whichPic = 0; //0 means first pic

var fButtonListener;
var bButtonListener;

//populate array
picList[0] = "images/p0.jpg";
picList[1] = "images/p1.jpg";
picList[2] = "images/p2.jpg";
picList[3] = "images/p3.jpg";
picList[4] = "images/p4.jpg";


locationData[0] = "Location: Miami Lakes, Florida";
locationData[1] = "Location: Miami Beach, Florida";
locationData[2] = "Location: Coral Gables, Florida";
locationData[3] = "Location: Miami Lakes, Florida";
locationData[4] = "Fort Lauderdale, Florida";

captionData[0] = "Beautiful sunset on the water!";
captionData[1] = "Beautiful white sand and clear blue water";
captionData[2] = "Lots of Palm trees and waterfalls!";
captionData[3] = "Beautiful sunset at the airport!";
captionData[4] = "On our way back home to MA!";


window.onload = function() {

alert("hi there");
alert("have a nice day!");

document.getElementById("picView").src = picList[whichPic];
document.getElementById("location").innerHTML = locationData[whichPic];
document.getElementById("caption").innerHTML = captionData[whichPic];


fButtonListener = document.getElementById("nextButton");
bButtonListener = document.getElementById("backButton");

fButtonListener.addEventListener('click',function(event) {
	++whichPic;
	if(whichPic >= picList.length){
		whichPic = 0;
}

document.getElementById("picView").src = picList[whichPic];
document.getElementById("location").innerHTML = locationData[whichPic];
document.getElementById("caption").innerHTML = captionData[whichPic];

});

bButtonListener.addEventListener('click',function(event){
--whichPic;
if (whichPic < 0){
whichPic = picList.length-1
}

document.getElementById("picView").src = picList[whichPic];
document.getElementById("location").innerHTML = locationData[whichPic];
document.getElementById("caption").innerHTML = captionData[whichPic];
});
};
