// Select our HTML elements in the document
const forecastTemp1 = document.querySelector("#forecast-temp1");
const forecastTemp2 = document.querySelector("#forecast-temp2");
const forecastTemp3 = document.querySelector("#forecast-temp3");

// const apiKey2 = "4678e452fd186f29ff45e9b04a027d92";

const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output the results to the console for testing
      displayForecast1(data);
      displayForecast2(data);
      displayForecast3(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

function displayForecast1(data) {
  // Example: Display the temperature of the first forecast entry
  const temperature = data.list[0].main.temp;
  forecastTemp1.textContent = temperature.toFixed(1);
}

function displayForecast2(data) {
  // Example: Display the temperature of the second forecast entry
  const temperature = data.list[1].main.temp;
  forecastTemp2.textContent = temperature.toFixed(1);
}

function displayForecast3(data) {
    // Example: Display the temperature of the second forecast entry
    const temperature = data.list[2].main.temp;
    forecastTemp3.textContent = temperature.toFixed(2);
  }

// Call the apiFetch function to fetch and display the forecast data
apiFetch();
