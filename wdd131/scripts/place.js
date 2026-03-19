// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// STATIC WEATHER
const temp = 8;
const wind = 10;

// FUNCTION (1 line return ✔)
function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

// CONDITION CHECK
let windChill = "N/A";

if (temp <= 10 && wind > 4.8) {
    windChill = calculateWindChill(temp, wind).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;