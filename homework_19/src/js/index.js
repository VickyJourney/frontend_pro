import { formatDate, formatSunTime } from "./utils.js";
import "../scss/style.scss";

import nycImg from "../../img/nyc.jpeg";
import odesaImg from "../../img/ods.jpg";
import esmorizImg from "../../img/Esmoriz.jpg";
import warsawImg from "../../img/waw.jpeg";

const imageMap = {
  "nyc.jpeg": nycImg,
  "ods.jpg": odesaImg,
  "Esmoriz.jpg": esmorizImg,
  "waw.jpeg": warsawImg,
};

const cityPhoto = document.querySelector(".city_photo");

let currentLocation = {
  lat: 40.71427,
  lon: -74.00597,
};
cityPhoto.src = imageMap["nyc.jpeg"];
getWeatherForLocation(currentLocation.lat, currentLocation.lon);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("city-btn")) {
    const lat = parseFloat(event.target.dataset.lat);
    const lon = parseFloat(event.target.dataset.lon);
    const img = event.target.dataset.img;

    currentLocation = { lat, lon };
    cityPhoto.src = imageMap[img];
    getWeatherForLocation(lat, lon);
  }
});

const reload = document.querySelector(".reload_btn");
reload.addEventListener("click", () => {
  getWeatherForLocation(currentLocation.lat, currentLocation.lon);
});

function getWeatherForLocation(lat, lon) {
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d12b43920720e2a34508a4346608f996`
  );

  response
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error. Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const locationName = document.querySelector("h1");
      const city = data.name;
      locationName.textContent = city;
      const date = document.querySelector("h2");
      const myTimezone = data.timezone;
      date.textContent = formatDate(myTimezone);
      const tempActual = document.getElementById("actualTemperature");
      const tempA = data.main.temp;
      tempActual.textContent = `Actual: ${Math.trunc(tempA)}℃`;
      const tempFeelsLike = document.getElementById("feelsLikeTemp");
      const tempF = data.main.feels_like;
      tempFeelsLike.textContent = `Feels like: ${Math.trunc(tempF)}℃`;
      const description = document.getElementById("description");
      const descriptionCondition = data.weather.find(
        (weather) => weather.description
      );
      description.textContent = descriptionCondition.description
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      const humidity = document.getElementById("humidity");
      const humidityActual = data.main.humidity;
      humidity.textContent = `Humidity: ${humidityActual}%`;
      const wind = document.getElementById("wind");
      const windActual = data.wind.speed;
      wind.textContent = `Wind: ${Math.round(windActual * 3.6 * 10) / 10} km/h`;
      const sunriseTime = document.getElementById("sunrise");
      const sunriseActual = data.sys.sunrise;
      sunriseTime.textContent = formatSunTime(sunriseActual, "Europe/Lisbon");
      const sunsetTime = document.getElementById("sunset");
      const sunsetActual = data.sys.sunset;
      sunsetTime.textContent = formatSunTime(sunsetActual, "Europe/Lisbon");
    })
    .catch((error) => {
      console.error("Error with getting information: ", error);
    });
}
