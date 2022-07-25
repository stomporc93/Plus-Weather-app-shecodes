let now = new Date();
let dateElement = document.querySelector("#currentTime");
let date = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

dateElement.innerHTML = `${month} ${date}, ${year}  ${hour}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-a-city");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchInput.value}`;
}

let searchForm = document.querySelector("#search-engine-form");
searchForm.addEventListener("submit", searchCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `The current temperature in your location is ${temperature}`;
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "imperial";
  let apiKey = "120fe6344a09d842fa739744b51e1227";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiURL = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiURL).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
