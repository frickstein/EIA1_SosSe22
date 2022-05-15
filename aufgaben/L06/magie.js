var text = {
    r01: "Gesamtzahl Einwohnerinnen und Einwohner in ",
    re02: "Relativ zur Gesamtzahl in der EU ",
    r03: "Wachstumsrate seit 2008",
    r04: "Wachstumsrate gesamt zwischen 2008 and 2022 ",
    y22: " in 2022",
    FR: "Frankreich",
    IT: "Italien",
    DE: "Deutschland",
    IR: "Irland",
    EU: "Europa"
};
var EU2008 = 734428149;
var EU2022 = 750832535;
let resEU03 = (EU2022 - FR2008) / EU2008 * 100.0;
// hier sollte eigentlich 2,23% rauskommen, aber hat irgendwie kein bock mehr
let resEU04 = (EU2022 - EU2008);
console.log("[EU] Wachstumsrate in Europa seit 2008: " + resEU03.toFixed(2) + "%");
function stars() {
    document.getElementById("total").innerHTML = EU2022 + " Mio.";
    document.getElementById("country").innerHTML = text.r01 + text.EU + text.y22;
    document.getElementById("relative").innerHTML = "100% lol";
    // document.getElementById("growth").innerHTML = resEU03.toFixed(2) + "%";
    document.getElementById("growth").innerHTML = Math.abs((EU2022 - EU2008) / EU2008 * 100).toFixed(2);
    document.getElementById("rate").innerHTML = resEU04 + " Mio.";
    document.querySelector("#fr").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#ir").setAttribute("class", "wrapper");
}
var FR2008 = 62040147;
var FR2022 = 65790152;
let resFR02 = (FR2022 / EU2022) * 100.0;
let resFR03 = (FR2022 - FR2008) / FR2008 * 100.0;
let resFR04 = (FR2022 - FR2008);
console.log("[FR] Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022: " + FR2022 + " Mio.");
console.log("[FR] Relativ zur Gesamtzahl in der EU: " + resFR02.toFixed(2) + "%");
console.log("[FR] Wachstumsrate in Frankreich seit 2008: " + resFR03.toFixed(2) + "%");
console.log("[FR] Wachstumsrate gesamt in Frankreich seit 2008: " + resFR04 + " Mio.");
function france() {
    document.getElementById("total").innerHTML = FR2022 + " Mio.";
    document.getElementById("country").innerHTML = text.r01 + text.FR + text.y22;
    document.getElementById("relative").innerHTML = resFR02.toFixed(2) + "%";
    document.getElementById("growth").innerHTML = resFR03.toFixed(2) + "%";
    document.getElementById("rate").innerHTML = resFR04 + " Mio.";
    document.querySelector("#fr").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#ir").setAttribute("class", "wrapper");
}
var IT2008 = 58835465;
var IT2022 = 60591668;
let resIT02 = (IT2022 / EU2022) * 100.0;
let resIT03 = (IT2022 - IT2008) / IT2008 * 100.0;
let resIT04 = (IT2022 - IT2008);
console.log("[IT] Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022: " + IT2022 + " Mio.");
console.log("[IT] Relativ zur Gesamtzahl in der EU: " + resIT02.toFixed(2) + "%");
console.log("[IT] Wachstumsrate in Italien seit 2008 : " + resIT03.toFixed(2) + "%");
console.log("[IT] Wachstumsrate gesamt in Italien seit 2008: " + resIT04 + " Mio.");
function italy() {
    document.getElementById("total").innerHTML = IT2022 + " Mio.";
    document.getElementById("country").innerHTML = text.r01 + text.IT + text.y22;
    document.getElementById("relative").innerHTML = resIT02.toFixed(2) + "%";
    document.getElementById("growth").innerHTML = resIT03.toFixed(2) + "%";
    document.getElementById("rate").innerHTML = resIT04 + " Mio.";
    document.querySelector("#it").setAttribute("class", "active");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("ir").setAttribute("class", "wrapper");
}
var DE2008 = 81171214;
var DE2022 = 83756658;
let resDE02 = (DE2022 / EU2022) * 100.0;
let resDE03 = (DE2022 - DE2008) / DE2008 * 100.0;
let resDE04 = (DE2022 - DE2008);
console.log("[DE] Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022: " + DE2022 + " Mio.");
console.log("[DE] Relativ zur Gesamtzahl in der EU: " + resDE02.toFixed(2) + "%");
console.log("[DE] Wachstumsrate in Deutschland seit 2008: " + resDE03.toFixed(2) + "%");
console.log("[DE] Wachstumsrate gesamt in Deutschland seit 2008: " + resDE04 + " Mio.");
function germany() {
    document.getElementById("total").innerHTML = DE2022 + " Mio.";
    document.getElementById("country").innerHTML = text.r01 + text.DE + text.y22;
    document.getElementById("relative").innerHTML = resDE02.toFixed(2) + "%";
    document.getElementById("growth").innerHTML = resDE03.toFixed(2) + "%";
    document.getElementById("rate").innerHTML = resDE04 + " Mio.";
    document.querySelector("#de").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#ir").setAttribute("class", "wrapper");
}
var IR2008 = 4370509;
var IR2022 = 4945642;
let resIR02 = (IR2022 / EU2022) * 100.0;
let resIR03 = (IR2022 - IR2008) / IR2008 * 100.0;
let resIR04 = (IR2022 - IR2008);
console.log("[IR] Gesamtzahl Einwohnerinnen und Einwohner in Irland in 2022: " + IR2022 + " Mio.");
console.log("[IR] Relativ zur Gesamtzahl in der EU: " + resIR02.toFixed(2) + "%");
console.log("[IR] Wachstumsrate in Irland seit 2008 : " + resIR03.toFixed(2) + "%");
console.log("[IR] Wachstumsrate gesamt in Irland seit 2008: " + resIR04 + " Mio.");
function ireland() {
    document.getElementById("total").innerHTML = IR2022 + " Mio.";
    document.getElementById("country").innerHTML = text.r01 + text.IR + text.y22;
    document.getElementById("relative").innerHTML = resIR02.toFixed(2) + "%";
    document.getElementById("growth").innerHTML = resIR03.toFixed(2) + "%";
    document.getElementById("rate").innerHTML = resIR04 + " Mio.";
    document.querySelector("#ir").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
}
window.addEventListener("load", function () {
    document.querySelector(".germany").addEventListener('click', germany);
    document.querySelector(".italy").addEventListener('click', italy);
    document.querySelector(".france").addEventListener('click', france);
    document.querySelector(".ireland").addEventListener('click', ireland);
    document.querySelector(".stars").addEventListener('click', stars);
});
//# sourceMappingURL=magie.js.map