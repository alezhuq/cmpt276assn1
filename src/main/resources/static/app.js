const top10Cities = [
  "Toronto",
  "Montreal",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Winnipeg",
  "Quebec City",
  "Halifax"
];

const citySelect = document.getElementById("city");
const viewCityButton = document.getElementById("viewCity");

async function renderWeather(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  );

  const data = await response.json();

  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code`
  );

  const weather = await weatherResponse.json();

    document.getElementById("cityName").textContent = city;
    document.getElementById("temperature").textContent =
      weather.current.temperature_2m + "°C";
    document.getElementById("wind").textContent =
      weather.current.wind_speed_10m + " km/h";
    document.getElementById("weatherCode").textContent =
      weather.current.weather_code;

}

viewCityButton.addEventListener("click", () => {
  renderWeather(citySelect.value);
});
viewCityButton.addEventListener("click", () => {
  const city = citySelect.value;
  renderWeather(city);
});

function loadCity(city) {
  citySelect.value = city;
  viewCityButton.click();
}

const top10List = document.createElement("ol");

top10Cities.forEach((city) => {
  const item = document.createElement("li");
  const button = document.createElement("button");

  button.textContent = city;
  button.addEventListener("click", () => loadCity(city));

  item.appendChild(button);
  top10List.appendChild(item);
});

document.body.appendChild(top10List);