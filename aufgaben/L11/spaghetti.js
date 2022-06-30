window.addEventListener("load", Injector);
const sentences = [
    //0
    {
        german: "Das ist leicht",
        spanish: ["Eso", "es", "fácil"]
    },
    //1
    {
        german: "Spanisch ist meine erste Fremdsprache",
        spanish: ["el", "español", "es", "mi", "primera", "lengua", "extranjera"]
    },
    //2    
    {
        german: "Könnten sie das wiederholen?",
        spanish: ["Podrías", "repetir", "eso", "por", "favor"]
    },
    //3    
    {
        german: "Ich fahre morgen nach Mexiko",
        spanish: ["me", "voy", "a", "mexico", "mañana"]
    },
    //4
    {
        german: "Ich komme ursprünglich aus Deutschland",
        spanish: ["soy", "originario", "de", "alemania"]
    },
    //5    
    {
        german: "Wann kommt der Bus?",
        spanish: ["Cuándo", "viene", "el", "autobús"]
    },
    //6    
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //7    
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //8    
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //9    
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //10    
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //11    
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //12   
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //13 
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //14  
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    //15  
    {
        german: "Mutter Maria, was ist das den?",
        spanish: ["Madre", "María", "qué", "es", "eso"]
    }
];
var selected;
var selectWord = []; // das sollte die Variable mit einem leeren Array gleichstellen
var previousSentences = [];
var countTracker = 0;
var sentenceTracker = 0;
// folgende Funktion erzeugt eine zufällige Zahl und sendet diese später an die richtige Stelle
function RandomSentence() {
    var max = 14;
    var random = Math.floor(Math.random() * (max + 1));
    while (previousSentences.includes(random)) {
        random = Math.floor(Math.random() * (max + 1));
    }
    previousSentences.push(random); //keeps track of the number
    return sentences[random];
}
function RandomSpanish(spanish) {
    let newSpanish = [];
    for (let i = 0; i < spanish.length; i++) { //creates a copy of "spanish" and its newSpanish
        newSpanish[i] = spanish[i];
    }
    for (let i = newSpanish.length - 1; i > 0; i--) { //swaps items around randomly based on the Fisher–Yates shuffle
        var rdm = Math.floor(Math.random() * (i + 1));
        var old = newSpanish[i];
        newSpanish[i] = newSpanish[rdm];
        newSpanish[rdm] = old;
    }
    return newSpanish;
}
function Injector() {
    selected = RandomSentence();
    document.querySelector(".head").innerHTML = selected.german;
    console.log(selected);
    var gridContainer = document.querySelector(".grid-container");
    var inputBox = document.querySelector(".input-box");
    var rngSpanish = RandomSpanish(selected.spanish);
    gridContainer.innerHTML = ""; //entfernt alle elemete aus dem Grid 
    inputBox.innerHTML = ""; // entfernt alle Übersetzungen
    selectWord = []; // leert die Worterkennung für den nächsten Satz
    for (let index = 0; index < rngSpanish.length; index++) {
        let element = rngSpanish[index];
        var item = document.createElement("div");
        item.setAttribute("class", "grid-item");
        item.innerHTML = element;
        item.addEventListener("click", function () { OrderChecker(element); });
        gridContainer.appendChild(item);
    }
}
function OrderChecker(word) {
    // index für die korrekte spanische Wort-liste, die gecheckt wird
    // die Wörter werden durch deren numerischen Wert im Array in die input-box im html ausgespuckt
    var nextSpanish = selectWord.length;
    console.log(nextSpanish);
    console.log(word);
    console.log(selected.spanish[nextSpanish]);
    console.log(selected);
    if (selected.spanish[nextSpanish] == word) {
        var input = document.querySelector(".input-box");
        input.innerHTML = input.innerHTML + " " + word; //das ist dazu da, nach der richtigen antwort nochmal ein abstand einzubringe
        selectWord.push(word); //Das ist da um die Auswahl bzw die reihnfolge zu merken
        countTracker++;
    }
    else {
        alert("Das war leider falsch. Versuchs erneut! ");
        countTracker--;
    }
    if (countTracker < 0) {
        countTracker = 0;
    }
    document.querySelector(".point-counter").innerHTML = countTracker.toString() + " Pts.";
    var easyDiff = document.querySelector(".easy");
    var midDiff = document.querySelector(".mid");
    var hardDiff = document.querySelector(".hard");
    if (selectWord.length == selected.spanish.length) { //= 
        sentenceTracker++;
        if (sentenceTracker == 5) {
            if (confirm("Glückwunsch! Die Punktzahl: " + countTracker + ". Du hast den ersten Kurs geschafft! Möchtest du fortfahren?")) {
                midDiff.setAttribute("class", "diff mid current");
                easyDiff.setAttribute("class", "diff easy");
                countTracker = 0;
                Injector();
            }
        }
        else if (sentenceTracker == 10) {
            if (confirm("Glückwunsch! Die Punktzahl: " + countTracker + ". Du hast den zweiten Kurs geschafft! Möchtest du fortfahren?")) {
                hardDiff.setAttribute("class", "diff hard current");
                midDiff.setAttribute("class", "diff mid");
                countTracker = 0;
                Injector();
            }
        }
        else if (sentenceTracker == 15) {
            alert("Glückwunsch! Die Punktzahl: " + countTracker + ". Du hast den ganzen Kurs geschafft!");
            hardDiff.setAttribute("class", "diff hard current");
        }
        else {
            Injector();
        }
    }
}
//# sourceMappingURL=spaghetti.js.map