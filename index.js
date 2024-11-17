//Detecting button pressed
var NumberOfClicks = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberOfClicks; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        MakeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    });

    
}
//Detecting keyboard press
document.addEventListener("keypress", function(event){
    MakeSound(event.key);
    buttonAnimation(event.key);
    
    
})
// The MakeSound function plays a specific drum sound based on the key pressed
function MakeSound(key){
    
    switch (key) {
     case "w":
         var crash = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/crash.mp3");
         crash.play();
         break;
     
     case "a":
         var kick_bass = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/kick-bass.mp3");
         kick_bass.play();
         break;

     case "s":
         var snare = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/snare.mp3");
         snare.play();
         break;
      
      case "d":
         var tom4 = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/tom-4.mp3");
         tom4.play();
         break;
     
      case "j":
         var tom1 = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/tom-1.mp3");
         tom1.play();
         break;
     
     case "k":
         var tom2 = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/tom-2.mp3");
         tom2.play();
         break;

     case "l":
         var tom3 = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/tom-3.mp3");
         tom3.play();
         break;

 
     default:
         console.log(buttonInnerHTML);
         break;
    }
}

// The buttonAnimation function adds a 'pressed' class to a button corresponding to the currentKey
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
    
  }, 100);
}

//var audio = new Audio("C:/Users/siyab/Documents/Drum Kit Starting Files/sounds/tom-1.mp3");
//audio.play();


