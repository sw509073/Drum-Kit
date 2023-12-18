var N = document.querySelectorAll(".drum").length;
for (var i=0;i<N;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        keySound(text);
        animation(text);
    });
}

document.addEventListener("keypress",function(event){
    keySound(event.key);
    animation(event.key);
});

function animation(text){
    var obj = document.querySelector("."+text);
    obj.classList.add("pressed");
    setTimeout(function(){
        obj.classList.remove("pressed");
    },100);

}

function keySound(parameter){
    switch(parameter){
        case "w":
            var audioW = new Audio('sounds/tom-1.mp3');
            audioW.play();
        break;
        case "a":
            var audioA = new Audio('sounds/tom-2.mp3');
            audioA.play();
        break;
        case "s":
            var audioS = new Audio('sounds/tom-3.mp3');
            audioS.play();
        break;
        case "d":
            var audioD = new Audio('sounds/tom-4.mp3');
            audioD.play();
        break;
        case "j":
            var audioJ = new Audio('sounds/crash.mp3');
            audioJ.play();
        break;
        case "k":
            var audioK = new Audio('sounds/kick-bass.mp3');
            audioK.play();
        break;
        case "l":
            var audioL = new Audio('sounds/snare.mp3');
            audioL.play();
        break;

        default:console.log(parameter);
    }
}

