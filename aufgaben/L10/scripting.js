window.addEventListener("load", Clicker);
function Clicker() {
    var sampletext = document.querySelectorAll(".fa-circle");
    //document.querySelectorAll(".fa-circle").addEventListener("click", function (): void {toggler(); });
    for (let index = 0; index < sampletext.length; index++) {
        const element = sampletext[index];
        element.addEventListener("click", function (event) { toggler(event); });
    }
    document.querySelector(".submit").addEventListener("click", function () { addingTasks(); });
    var textsample = document.querySelectorAll(".fa-circle-xmark");
    //document.querySelectorAll(".fa-circle").addEventListener("click", function (): void {toggler(); });
    for (let index = 0; index < textsample.length; index++) {
        const element = textsample[index];
        element.addEventListener("click", function (event) { yeet(event); });
    }
}
function yeet(event) {
    var nuke = event.target.parentNode;
    nuke.parentNode.removeChild(nuke);
}
function addingTasks() {
    var main = document.createElement("div");
    main.setAttribute("class", "row");
    var checkI = document.createElement("i");
    checkI.setAttribute("class", "fa-regular fa-circle");
    var text = document.createElement("a");
    text.setAttribute("class", "filler");
    var killI = document.createElement("i");
    killI.setAttribute("class", "fa-regular fa-circle-xmark");
    main.appendChild(checkI);
    main.appendChild(text);
    main.appendChild(killI);
    document.querySelector(".list").appendChild(main);
    console.log(document.getElementById("intial-input").value);
    text.innerHTML = document.getElementById("intial-input").value;
    checkI.addEventListener("click", function (event) { toggler(event); });
    killI.addEventListener("click", function (event) { yeet(event); });
    console.log("worked");
}
function toggler(event) {
    if (event.target.getAttribute("class") == "fa-regular fa-circle-check") {
        event.target.classList.remove("fa-circle-check");
        event.target.setAttribute("class", "fa-regular fa-circle");
        console.log("unchecked");
        return;
    }
    event.target.setAttribute("class", "fa-regular fa-circle-check");
    console.log("checked");
}
//<i id="toggler" class="fa-regular fa-circle-check"></i>
//<i id="toggler" class="fa-regular fa-circle">      </i>
//function addTask() {
//    var div = document.createElement("div").setAttribute("class", "row");
//    var inputValue = document.getElementById("intial-input");
//    }
//# sourceMappingURL=scripting.js.map