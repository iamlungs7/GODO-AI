alert("GODO AI Dashboard JS Loaded");
// ==========================
// GODO AI Dashboard Engine
// ==========================

console.log("🚀 GODO AI Dashboard Started");

// Platform Status
const platformStatus = "ONLINE";

// Development Mode
const environment = "Development";

// Last Update
const lastUpdate = new Date().toLocaleString();

// Console Output
console.log("Status :", platformStatus);
console.log("Environment :", environment);
console.log("Updated :", lastUpdate);

// ==========================
// Read Statistics JSON
// ==========================

fetch("assets/data/signal_statistics.json")
.then(response => response.json())
.then(data => {

document.getElementById("totalSignals").innerText =
"Signals : " + data.total_signals;

document.getElementById("wins").innerText =
"Wins : " + data.wins;

document.getElementById("losses").innerText =
"Losses : " + data.losses;

document.getElementById("breakeven").innerText =
"Breakeven : " + data.breakeven;

})
.catch(error => {

console.log(error);

});
