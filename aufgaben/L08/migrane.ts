window.addEventListener("load", Clicker);

function Clicker(){
    document.querySelector(".pad1").addEventListener('click', function(){playSample("../L08/assets/Drumpad/kick.mp3")});          
    document.querySelector(".pad2").addEventListener('click', function(){playSample("../L08/assets/Drumpad/snare.mp3")});
    document.querySelector(".pad3").addEventListener('click', function(){playSample("../L08/assets/Drumpad/hihat.mp3")});
    document.querySelector(".pad4").addEventListener('click', function(){playSample("../L08/assets/Drumpad/F.mp3")});
    document.querySelector(".pad5").addEventListener('click', function(){playSample("../L08/assets/Drumpad/G.mp3")});
    document.querySelector(".pad6").addEventListener('click', function(){playSample("../L08/assets/Drumpad/A.mp3")});
    document.querySelector(".pad7").addEventListener('click', function(){playSample("../L08/assets/Drumpad/C.mp3")});    
    document.querySelector(".pad8").addEventListener('click', function(){playSample("../L08/assets/Drumpad/laugh-1.mp3")});
    document.querySelector(".pad9").addEventListener('click', function(){playSample("../L08/assets/Drumpad/laugh-2.mp3")});
    document.querySelector(".playBTN").addEventListener('click', function(){playButton()});
}

function playSample(beats: string){     
    var sound: HTMLAudioElement = new Audio(beats);
    sound.play();
}


var chain:string [] = [
    "../L08/assets/Drumpad/kick.mp3",
    "../L08/assets/Drumpad/snare.mp3",
    "../L08/assets/Drumpad/hihat.mp3"
];
    
function playButton(){       
    var counter = 0;
    setInterval(function() {                       
        playSample(chain[counter]);
        counter++;     
    }, 600);
}    