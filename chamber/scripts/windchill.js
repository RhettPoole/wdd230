function calculateWindChill(temp, speed) {
    if (temp <= 50 && speed > 3.0) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill;
});