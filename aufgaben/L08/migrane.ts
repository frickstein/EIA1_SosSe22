
window.addEventListener("load", function(){
    document.querySelector(".btn").addEventListener('click', playSample);      
});

function playSample(){     

document.querySelector(".pad1").addEventListener('click', PadA);      
    function PadA(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/A.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad2").addEventListener('click', PadC);      
    function PadC(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/C.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad3").addEventListener('click', PadF);      
    function PadF(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/F.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad4").addEventListener('click', PadG);      
    function PadG(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/G.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad5").addEventListener('click', PadHihat);      
    function PadHihat(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/hihat.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad6").addEventListener('click', PadKick);      
    function PadKick(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/kick.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad7").addEventListener('click', PadSnare);      
    function PadSnare(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/snare.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad8").addEventListener('click', PadLaugh1);      
    function PadLaugh1(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/laugh-1.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".pad9").addEventListener('click', PadLaugh2);      
    function PadLaugh2(){
        var sound:HTMLAudioElement = new Audio('../L08/assets/Drumpad/laugh-2.mp3');
        sound.play();        
        sound.volume = 0.2;        
    }

    document.querySelector(".playBTN").addEventListener('click', playB);
    var sound:HTMLAudioElement [] = [new Audio("../assets/Drumpad/A.mp3"), new Audio("../assets/Drumpad/F.mp3"), new Audio("../assets/Drumpad/G.mp3")];

    function playB(){      
           
        setInterval(function() {                       
            sound[0].play();
            sound[1].play();
            sound[2].play();           
         }, 500);
    }    
}