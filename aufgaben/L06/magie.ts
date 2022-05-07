var EU2022: number=750832535

var FR2008: number=62040147;
var FR2022: number=65790152;

let resFR02=(FR2022 / EU2022) * 100.0 
let resFR03=(FR2022-FR2008) / FR2008 * 100.0;
let resFR04=(FR2022-FR2008)

console.log("[FR] Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022: " + FR2022 + " Mio.");
console.log("[FR] Relativ zur Gesamtzahl in der EU: " + resFR02.toFixed(2) +"%")
console.log("[FR] Wachstumsrate in Frankreich seit 2008: " + resFR03.toFixed(2) +"%"); 
console.log("[FR] Wachstumsrate gesamt in Frankreich seit 2008: " + resFR04 + " Mio.");

var IT2008: number=58835465;
var IT2022: number=60591668;

let resIT02=(IT2022 / EU2022) * 100.0 
let resIT03=(IT2022-IT2008) / IT2008 * 100.0;
let resIT04=(IT2022-IT2008)

console.log("[IT] Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022: " + IT2022 + " Mio.");
console.log("[IT] Relativ zur Gesamtzahl in der EU: " + resIT02.toFixed(2) +"%")
console.log("[IT] Wachstumsrate in Italien seit 2008 : " + resIT03.toFixed(2) +"%");
console.log("[IT] Wachstumsrate gesamt in Italien seit 2008: " + resIT04 + " Mio."); 

var DE2008: number=81171214;
var DE2022: number=83756658;

let resDE02=(DE2022 / EU2022) * 100.0 
let resDE03=(DE2022-DE2008) / DE2008 * 100.0;
let resDE04=(DE2022-DE2008)

console.log("[DE] Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022: " + DE2022 + " Mio.");
console.log("[DE] Relativ zur Gesamtzahl in der EU: " + resDE02.toFixed(2) +"%")
console.log("[DE] Wachstumsrate in Deutschland seit 2008: " + resDE03.toFixed(2) +"%");
console.log("[DE] Wachstumsrate gesamt in Deutschland seit 2008: " + resDE04 + " Mio."); 


var IR2008: number=4370509;
var IR2022: number=4945642;

let resIR02=(IR2022 / EU2022) * 100.0 
let resIR03=(IR2022-IR2008) / IR2008 * 100.0;
let resIR04=(IR2022-IR2008)

console.log("[IR] Gesamtzahl Einwohnerinnen und Einwohner in Irland in 2022: " + IR2022 + " Mio.");
console.log("[IR] Relativ zur Gesamtzahl in der EU: " + resIR02.toFixed(2) +"%")
console.log("[IR] Wachstumsrate in Irland seit 2008 : " + resIR03.toFixed(2) +"%");
console.log("[IR] Wachstumsrate gesamt in Irland seit 2008: " + resIR04 + " Mio."); 