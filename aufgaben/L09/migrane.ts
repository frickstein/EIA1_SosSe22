namespace L09 {
    window.addEventListener("load", Clicker);

    var chain: string [] = [
        "../L09/assets/Drumpad/kick.mp3",
        "../L09/assets/Drumpad/snare.mp3",
        "../L09/assets/Drumpad/hihat.mp3"
    ];
    
    var counter: number = 0;
    var playing: boolean;
    var z: number;
    var num: number = 0;
    var rng: number = 0;

    function Clicker(): void {
        document.querySelector(".pad1").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/kick.mp3"); });
        document.querySelector(".pad2").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/snare.mp3"); });
        document.querySelector(".pad3").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/hihat.mp3"); });
        document.querySelector(".pad4").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/F.mp3"); });
        document.querySelector(".pad5").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/G.mp3"); });
        document.querySelector(".pad6").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/A.mp3"); });
        document.querySelector(".pad7").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/C.mp3"); });
        document.querySelector(".pad8").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/laugh-1.mp3"); });
        document.querySelector(".pad9").addEventListener("click", function (): void { playSample("../L09/assets/Drumpad/laugh-2.mp3"); });
        document.querySelector(".fa-play").addEventListener("click", function (): void {playButton(); });
        document.querySelector(".fa-random").addEventListener("click", function(): void {remixer(); });
   
    }

    function playSample(beats: string): void { 
        var sound: HTMLAudioElement = new Audio(beats);  
        sound.volume = .25; 
        sound.play();
    }
    
    
    
    function remixer(): void {

        if (num != 0) {
            clearInterval(num);
        }
        
        function StartMixer(): void {
            for (var i: number = 0; i <= chain.length; i++) {
                rng = Math.floor(Math.random() * 3);
                playSample(chain[rng]);
                playing = true;
            }
        }
        num = setInterval(StartMixer, 600);
    
    }
    
    function playMixer(): number { 
        return setInterval(function(): void {   
                                
                    playSample(chain[counter]);
                    counter++;
                    if (counter == 3) {
                        counter = 0;         
                    }   
            },             600);
    }  
    
    function playButton(): void { 
        if (document.querySelector("#toggler").getAttribute("class") == "fas fa-stop fa-8x") {
            document.querySelector("#toggler").setAttribute("class", "fas fa-play fa-8x");
            clearInterval(z);
            playing = false;
            resetMixer();
            console.log("sound stopped");
            return;
        }
        document.querySelector("#toggler").setAttribute("class", "fas fa-stop fa-8x");
        document.querySelector("#toggler").classList.remove("fa-play");
        z = playMixer();
        playing = true;
        console.log("sound playing");
    

    }
    
    function resetMixer(): void {
       // chain.length = 0;
       // chain.length = 3;
        playing = false;
    }

}
