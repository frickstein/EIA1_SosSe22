namespace L09 {
    window.addEventListener("load", Clicker);

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
        document.querySelector(".playBTN").addEventListener("click", function (): void {playButton(); });
        document.querySelector(".playRNG").addEventListener("click", function(): void {Randomizer(); });
   
    }

    var counter: number = 0;
    var playing: boolean;
    var x: number;
    var num: number = 0;
    var rng: number = 0;


    
    var chain: string[] = [
        "../L08/assets/Drumpad/kick.mp3",
        "../L08/assets/Drumpad/snare.mp3",
        "../L08/assets/Drumpad/hihat.mp3"
    ];

        //var toggle: HTMLElement = document.querySelector("#toggler");

    function playSample(beats: string): void {
        var sound: HTMLAudioElement = new Audio(beats);
        sound.play();

    }

    function Randomizer(): void {       
    num = setInterval(Mixer, 500);

    function Mixer(): void {
        for (var i: number = 0; i <= chain.length; i++);
        rng = Math.floor(Math.random() * 3);
        playing = true;
    }
    }    
    
    function playMixer(): void {           
    
        setInterval(function(): void {                       
            playSample(chain[counter]);
            counter++;
            if (counter == 3) {
                counter = 0;
            }            
        },          600);


}
 
    function playButton(): void { 
    document.querySelector("#toggler").setAttribute("class", "fas fa-stop fa-8x");
    document.querySelector("#toggler").classList.remove("fa-play");
    playMixer();
    playing = true;
    console.log("playing sound");

    if (document.querySelector("#toggler").getAttribute("class") == " fas fa-stop fa-8x") {
        document.querySelector("#toggler").setAttribute("class", "fas fa-play fa-8x");
        document.querySelector("#toggler").classList.remove("fa-stop");
        ResetMixer();
        clearInterval(0);
        playing = false;
        console.log("sound stoped");
    }
}


    function ResetMixer(): void {
    chain.length = 0;
    chain.length = 3;
}

}
