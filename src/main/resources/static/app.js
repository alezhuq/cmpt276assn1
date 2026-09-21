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


function renderWeather(city) {
  document.getElementById("cityName").textContent = city;
}

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