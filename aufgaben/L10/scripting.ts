
window.addEventListener("load", Clicker);


function Clicker(): void {

    var sampletext = document.querySelectorAll(".fa-circle");
    //document.querySelectorAll(".fa-circle").addEventListener("click", function (): void {toggler(); });
    for (let index = 0; index < sampletext.length; index++) {
        const element: Element = sampletext[index];
        element.addEventListener("click", function (event): void {toggler(event); });
        
    }
    document.querySelector(".submit").addEventListener("click", function (): void {addingTasks(); });

    var textsample = document.querySelectorAll(".fa-circle-xmark");
    //document.querySelectorAll(".fa-circle").addEventListener("click", function (): void {toggler(); });
    for (let index: number = 0; index < textsample.length; index++) {
        const element: Element = textsample[index];
        element.addEventListener("click", function (event: MouseEvent): void {yeet(event); });
        
    }
}

function yeet(event: MouseEvent): void{

   var nuke: ParentNode = (event.target as HTMLElement).parentNode;

   nuke.parentNode.removeChild(nuke);

}



function addingTasks(): void {
   var main: HTMLDivElement = document.createElement("div");
   main.setAttribute("class", "row");
   var checkI: HTMLElement = document.createElement("i");
   checkI.setAttribute("class", "fa-regular fa-circle");
   var text: HTMLAnchorElement = document.createElement("a");
   text.setAttribute("class", "filler");
   var killI: HTMLElement = document.createElement("i");
   killI.setAttribute("class", "fa-regular fa-circle-xmark");

   main.appendChild(checkI);
   main.appendChild(text);
   main.appendChild(killI);

   document.querySelector(".list").appendChild(main);

   console.log((document.getElementById("intial-input") as HTMLInputElement).value);

   text.innerHTML = (document.getElementById("intial-input") as HTMLInputElement).value;

   checkI.addEventListener("click", function (event: MouseEvent): void {toggler(event); });

   killI.addEventListener("click", function (event: MouseEvent): void {yeet(event); });

   console.log("worked");
}


function toggler(event: any): void {

 if (event.target.getAttribute("class") == "fa-regular fa-circle-check" ) {

    event.target.classList.remove("fa-circle-check");
    event.target.setAttribute("class", "fa-regular fa-circle" );
    console.log("unchecked");
    return;
 }

 event.target.setAttribute("class", "fa-regular fa-circle-check" );
 console.log("checked");
}
//<i id="toggler" class="fa-regular fa-circle-check"></i>
//<i id="toggler" class="fa-regular fa-circle">      </i>



//function addTask() {
//    var div = document.createElement("div").setAttribute("class", "row");
//    var inputValue = document.getElementById("intial-input");
//    }
  