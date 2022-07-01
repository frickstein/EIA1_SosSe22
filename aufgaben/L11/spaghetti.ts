// as a heads up: i have actively decided to ignore certain coding requirements set by tslint for my own visual clarity, 
// as well as thinking that (double) declaring every variables/ functions according to tslint to be obsolete.

window.addEventListener("load", function() {
 DiffSelect();
 }
);

//defining objects
interface Basis {
 german:  string;
 spanish: string[];
}


const sentences: Basis[] = [

    //0
    {
    german: "Das ist leicht", 
    spanish: ["eso", "es", "fácil"]
    },

    //1
    {
    german: "Spanisch ist meine erste Fremdsprache", 
    spanish: ["el", "español", "es", "mi", "primera", "lengua", "extranjera"]
    },

    //2    
    {
    german: "Könnten sie das wiederholen?", 
    spanish: ["podrías", "repetir", "eso", "por", "favor"]   
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
    spanish: ["cuándo", "viene", "el", "autobús"]
    },

    //6    
    {
    german: "Mutter Maria, was ist das den?", 
    spanish: ["Madre", "María", "qué", "es", "eso"]
    },
    
    //7    
    {
    german: "Wie lange bleibst du?", 
    spanish: ["cuánto", "tiempo", "te", "quedas"]
    },    
    
    //8    
    {
    german: "Ich hoffe, dass das wasser nicht kalt ist.", 
    spanish: ["espero", "que", "el", "agua", "no", "este", "fria"]
    },

    //9    
    {
    german: "Ich freue mich, dich kennenzulernen!", 
    spanish: ["encantada", "de", "conocerte"]
    },

    //10    
    {
    german: "Entschuldige, wie komme ich den hierher?", 
    spanish: ["disculpe", "cómo", "llego", "aquí"]
    },

    //11    
    {
    german: "Tut mir leid, aber das ist mir zu teuer.", 
    spanish: ["lo", "siento", "pero", "eso", "es", "demasiado", "caro", "para", "mí."]
    },

    //12   
    {
    german: "Dieser Satz wurde in spanische übersetzt.", 
    spanish: ["esta", "frase", "ha", "sido", "traducida", "al", "español"]
    },  

    //13 
    {
    german: "Mir gehen echt die Ideen aus.", 
    spanish: ["realmente", "me", "estoy", "quedando", "sin", "ideas."]
    },   

    //14  
    {
    german: "Meine Aufmerksamkeit ist komplett durchgebrannt.", 
    spanish: ["mi", "atención", "está", "completamente", "impresionada"]
    },  

    //15  
    {
    german: "Eigentlich ist Englisch meine erste Fremdsprache.", 
    spanish: ["el", "inglés", "es", "en", "realidad", "mi", "primer", "idioma", "extranjero."]
    }
];

//variables later purposes
var selected: Basis; 
var selectWord: string[] = [];                                               // this empty bracket thing should equate the variable to an empty array
var previousSentences: number[] = [];
var countTracker: number = 0;
var sentenceTracker: number = 0;
var diffTracker: number = 0;

var easyDiff = document.querySelector(".easy");  
var midDiff = document.querySelector(".mid");
var hardDiff = document.querySelector(".hard");


// the following function generates a random number and later on sends it to correct location
function RandomSentence() {

 var max: number = 14;
 var random: number = Math.floor(Math.random() * (max + 1));

 while (previousSentences.includes(random)) {                             //keeps picking a random number that hasnt been selected yet
     random = Math.floor(Math.random() * (max + 1));
 }

 previousSentences.push(random);                                          //keeps track of the picked numbers

 return sentences[random];
}


// following function randomizes the order of the spanish words
function RandomSpanish(spanish: string[]) {

 let newSpanish = [];                                                        // a copy of the original 'spanish'; its to avoid updating the original one 

 for (let i = 0; i < spanish.length; i++) {   
     newSpanish[i] = spanish[i];
 }

 for (let i = newSpanish.length - 1; i > 0; i--) {                          // swaps items around randomly based on the Fisher–Yates shuffle
     var rdm = Math.floor(Math.random() * (i + 1));
     var old = newSpanish[i];
     newSpanish[i] = newSpanish[rdm];
     newSpanish[rdm] = old;
 }

 return newSpanish;
    

} 

function Injector() {

 selected = RandomSentence(); 

 document.querySelector (".point-counter").innerHTML = countTracker.toString() + " Pts." ;      // showing off the total points in html
 document.querySelector(".head").innerHTML = " \" " + selected.german + " \" ";                 // showing off the germans sentence

 var gridContainer = document.querySelector(".grid-container");                                 // variables for convienience
 var inputBox = document.querySelector(".input-box");
 
 var rngSpanish = RandomSpanish(selected.spanish);

 gridContainer.innerHTML = "";                                                                  // removes all elements from the grid
 inputBox.innerHTML = "";                                                                       // removes all translated words
 selectWord = [];                                                                               // clears the tracker for the next sentence

 for (let index = 0; index < rngSpanish.length; index++) {                                      //creating the 'spanish' as grid-items in the grid-container 
      let element = rngSpanish[index];
        
      var item: HTMLDivElement = document.createElement("div");
      item.setAttribute("class", "grid-item");
      item.innerHTML = element;
      item.addEventListener("click", function() { OrderChecker(element); });

      gridContainer.appendChild(item);                                                           //adds 'item' as a child to grid-container -> puts grid-item into grid-container
}

}

  // index for the propper spanish list of words that gets checked
  // said words will ne displayed in the html element based on the numerical value within the array
function OrderChecker(word: string) {                                                                //word = which spanish was clicked on

 var nextSpanish: number = selectWord.length;

 if (selected.spanish[nextSpanish] == word) {                                                         //its checking if the clicked word is the correct one
   var input = document.querySelector(".input-box");
   input.innerHTML = input.innerHTML  + " " + word;                                                  // this is here to put some space inbetween the correct answers
   selectWord.push(word);                                                                            // this part is there to remember the order of the selection
   countTracker++;
 }
 else {
  alert("Das war leider falsch. Versuchs erneut! ");
  countTracker--;

 }
 if (countTracker < 0) {
    countTracker = 0;
 }

 document.querySelector (".point-counter").innerHTML = countTracker.toString() + " Pts." ;

 if ( selectWord.length == selected.spanish.length) {                                               // if the amount of correct words coressponds with the total length, the sentences completed
    sentenceTracker++;

    if (sentenceTracker == 5 && diffTracker == 0) {                                                // if the amount of completed sentences & difficulty align with the condition, a confirm prompt will ask to continue
     if (confirm("Glückwunsch! Die Punktzahl: " + countTracker + ". Du hast den ersten Kurs geschafft! Möchtest du fortfahren?")) {
         midDiff.setAttribute("class", "diff mid current");
         easyDiff.setAttribute("class", "diff easy");
         countTracker = 0;
         Injector();
     } 
    }
     
     else if (sentenceTracker == 10 && diffTracker == 1) {
     if (confirm("Glückwunsch! Die Punktzahl: " + countTracker + ". Du hast den zweiten Kurs geschafft! Möchtest du fortfahren?")) {
         hardDiff.setAttribute("class", "diff hard current");
         midDiff.setAttribute("class", "diff mid");
         countTracker = 0;
         Injector();
         } 
    }
     
    else if (sentenceTracker == 15) {
         alert("Glückwunsch! Die Punktzahl: " + countTracker + ". Du hast den dritten Kurs geschafft!");
         hardDiff.setAttribute("class", "diff hard current");
    }
     
    else {   
         Injector();
    }
}
}

// a function to enable difficulty selection
function DiffSelect() { 

 easyDiff = document.querySelector(".easy");  
 midDiff = document.querySelector(".mid");
 hardDiff = document.querySelector(".hard");

 easyDiff.addEventListener("click", function() { SetDiff(0); });
 midDiff.addEventListener("click", function() { SetDiff(1); });
 hardDiff.addEventListener("click", function() { SetDiff(2); });

}

function SetDiff(track: number) {                                         //track = selected difficulty
    diffTracker = track;

    previousSentences = [];
    sentenceTracker = 0;
    countTracker = 0;
    
    if (track == 0) {                                                     // adjusting styling after selection
             easyDiff.setAttribute("class", "diff easy current");
             midDiff.setAttribute("class", "diff mid");
             hardDiff.setAttribute("class", "diff hard");
         }
         
     else if (track == 1) {
            
        easyDiff.setAttribute("class", "diff easy");
        midDiff.setAttribute("class", "diff mid current");
        hardDiff.setAttribute("class", "diff hard");             
         }
         
         else if (track == 2) {    
                       
        easyDiff.setAttribute("class", "diff easy");
        midDiff.setAttribute("class", "diff mid");
        hardDiff.setAttribute("class", "diff hard current"); 
         }
          
    Injector();
    document.querySelector (".point-counter").innerHTML = countTracker.toString() + " Pts." ;
         
    
}