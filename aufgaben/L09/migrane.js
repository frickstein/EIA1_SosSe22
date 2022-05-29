var L09;
(function (L09) {
    window.addEventListener("load", Clicker);
    function Clicker() {
        document.querySelector(".pad1").addEventListener("click", function () { playSample("../L09/assets/Drumpad/kick.mp3"); });
        document.querySelector(".pad2").addEventListener("click", function () { playSample("../L09/assets/Drumpad/snare.mp3"); });
        document.querySelector(".pad3").addEventListener("click", function () { playSample("../L09/assets/Drumpad/hihat.mp3"); });
        document.querySelector(".pad4").addEventListener("click", function () { playSample("../L09/assets/Drumpad/F.mp3"); });
        document.querySelector(".pad5").addEventListener("click", function () { playSample("../L09/assets/Drumpad/G.mp3"); });
        document.querySelector(".pad6").addEventListener("click", function () { playSample("../L09/assets/Drumpad/A.mp3"); });
        document.querySelector(".pad7").addEventListener("click", function () { playSample("../L09/assets/Drumpad/C.mp3"); });
        document.querySelector(".pad8").addEventListener("click", function () { playSample("../L09/assets/Drumpad/laugh-1.mp3"); });
        document.querySelector(".pad9").addEventListener("click", function () { playSample("../L09/assets/Drumpad/laugh-2.mp3"); });
        document.querySelector(".playBTN").addEventListener("click", function () { playButton(); });
        document.querySelector(".playRNG").addEventListener("click", function () { Randomizer(); });
    }
    var counter = 0;
    var playing;
    var x;
    var num = 0;
    var rng = 0;
    var chain = [
        "../L08/assets/Drumpad/kick.mp3",
        "../L08/assets/Drumpad/snare.mp3",
        "../L08/assets/Drumpad/hihat.mp3"
    ];
    //var toggle: HTMLElement = document.querySelector("#toggler");
    function playSample(beats) {
        var sound = new Audio(beats);
        sound.play();
    }
    function Randomizer() {
        num = setInterval(Mixer, 500);
        function Mixer() {
            for (var i = 0; i <= chain.length; i++)
                ;
            rng = Math.floor(Math.random() * 3);
            playing = true;
        }
    }
    function playMixer() {
        setInterval(function () {
            playSample(chain[counter]);
            counter++;
            if (counter == 3) {
                counter = 0;
            }
        }, 600);
    }
    function playButton() {
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
    function ResetMixer() {
        chain.length = 0;
        chain.length = 3;
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=migrane.js.map