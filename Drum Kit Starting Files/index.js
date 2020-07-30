// alert("working");
var noOfDrums=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrums;i++){
		document.querySelectorAll(".drum")[i].addEventListener("click",function (){
		//alert("click hua bhai");
		// this.style.color="white";
		var nameOfDrum=this.innerHTML;	
		playSound(nameOfDrum);
		buttonAnimation(nameOfDrum);
	});
}
document.addEventListener("keypress",function(event){
	// alert("key is pressed");
	playSound(event.key);//event.key tells us which keyboard key was pressed
	//console.log(event);
	buttonAnimation(event.key);
});

function playSound(option) {

	switch (option) {
		case 'w':
			var audio =new Audio("sounds/tom-1.mp3");
			audio.play();
			break;
		case 'a':
			var audio =new Audio("sounds/tom-2.mp3");
			audio.play();
			break;
		case 's':
			var audio =new Audio("sounds/tom-3.mp3");
			audio.play();
			break;
		case 'd':
				var audio =new Audio("sounds/tom-4.mp3");
				audio.play();
				break;
		case 'j':
			var audio =new Audio("sounds/snare.mp3");
			audio.play();
			break;
		case 'k':
			var audio =new Audio("sounds/crash.mp3");
			audio.play();
			break;
		case 'l':
			var audio =new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;
		default:console.log(option);
			break;
	}	
}
function buttonAnimation(key){
	var activeButton=document.querySelector("."+key);
	activeButton.classList.add("pressed");

	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);			//function,time in milli sec

}

