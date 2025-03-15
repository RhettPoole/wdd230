// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// API URL with query parameters
const lat = "49.7537"; // Latitude for Trier, Germany
const lon = "6.6394"; // Longitude for Trier, Germany
const apiKey = "843c937f1cba545b3e01493f05512f37"; // Replace with your actual API key
const units = "imperial"; // Set units to imperial

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output the results to the console for testing
      displayWeather(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeather(data) {
  const temperature = data.main.temp;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const description = data.weather[0].description;

  currentTemp.textContent = temperature.toFixed(1);
  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", description);
  captionDesc.textContent = description;
}

// Call the apiFetch function to fetch and display the weather data.
apiFetch();