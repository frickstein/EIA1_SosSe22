var L09;
(function (L09) {
    window.addEventListener("load", Clicker);
    var chain = [
        "../L09/assets/Drumpad/kick.mp3",
        "../L09/assets/Drumpad/snare.mp3",
        "../L09/assets/Drumpad/hihat.mp3"
    ];
    var counter = 0;
    var playing;
    var z;
    var num = 0;
    var rng = 0;
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
        document.querySelector(".fa-play").addEventListener("click", function () { playButton(); });
        document.querySelector(".fa-random").addEventListener("click", function () { remixer(); });
    }
    function playSample(beats) {
        var sound = new Audio(beats);
        sound.volume = .25;
        sound.play();
    }
    function remixer() {
        num = setInterval(StartMixer, 600);
        function StartMixer() {
            for (var i = 0; i <= chain.length; i++) {
                rng = Math.floor(Math.random() * 3);
                playSample(chain[rng]);
                playing = true;
            }
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
        console.log("sound playing");
        if (document.querySelector("#toggler").getAttribute("class") == " fas fa-stop fa-8x") {
            document.querySelector("#toggler").setAttribute("class", "fas fa-play fa-8x");
            clearInterval(num);
            playing = false;
            resetMixer();
            console.log("sound stopped");
        }
    }
    function resetMixer() {
        chain.length = 0;
        chain.length = 3;
        playing = false;
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=migrane.js.map