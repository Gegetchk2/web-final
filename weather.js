const apiKey = "1485bcfb9831479aaee162106232402";
const endpoint = "https://api.openweathermap.org/data/3.0/onecall";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.getElementById("add-btn1").addEventListener("click", () => {
  document.getElementById("add-btn1").classList.replace("add-button", "hidden");
  document.getElementById("search-div-1").classList.replace("hidden", "search");
});
document.getElementById("add-btn2").addEventListener("click", () => {
  document.getElementById("add-btn2").classList.replace("add-button", "hidden");
  document.getElementById("search-div-2").classList.replace("hidden", "search");
});
document.getElementById("search-button-1").addEventListener("click", () => {
  const search = document.getElementById("search-input-1").value;

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=no`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("add-btn1")
        .classList.replace("add-button", "hidden");
      document
        .getElementById("search-div-1")
        .classList.replace("search", "hidden");
      document
        .getElementById("weather-1")
        .classList.replace("hidden", "weather");
      const date = new Date(data.location.localtime);
      const day = days[date.getDay()];
      const city = data.location.name;
      const condition = data.current.condition.text;
      const temp = data.current.temp_c;
      const visibility = data.current.vis_km;
      const feelslike = data.current.feelslike_c;
      const humidity = data.current.humidity;
      const wind = data.current.wind_kph;
      console.log(visibility);
      document.getElementById("city").textContent += city;
      document.getElementById("weekday-date").textContent +=
        day + " " + data.location.localtime.split(" ")[0];
      document.getElementById("visibility").textContent += ` ${visibility}km`;
      document.getElementById("condition").textContent += condition;
      document.getElementById("celcius").textContent += temp;
      document.getElementById("feelslike").textContent += ` ${feelslike}c`;
      document.getElementById("humidity").textContent += ` ${humidity}%`;
      document.getElementById("wind").textContent += ` ${wind}kph`;
    });
});
document.getElementById("search-button-2").addEventListener("click", () => {
  const search = document.getElementById("search-input-2").value;

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=no`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("add-btn2")
        .classList.replace("add-button", "hidden");
      document
        .getElementById("search-div-2")
        .classList.replace("search", "hidden");
      document
        .getElementById("weather-2")
        .classList.replace("hidden", "weather");
      const date = new Date(data.location.localtime);
      const day = days[date.getDay()];
      const city = data.location.name;
      const condition = data.current.condition.text;
      const temp = data.current.temp_c;
      const visibility = data.current.vis_km;
      const feelslike = data.current.feelslike_c;
      const humidity = data.current.humidity;
      const wind = data.current.wind_kph;
      console.log(visibility);
      document.getElementById("city2").textContent += city;
      document.getElementById("weekday-date2").textContent +=
        day + " " + data.location.localtime.split(" ")[0];
      document.getElementById("visibility2").textContent += ` ${visibility}km`;
      document.getElementById("condition2").textContent += condition;
      document.getElementById("celcius2").textContent += temp;
      document.getElementById("feelslike2").textContent += ` ${feelslike}c`;
      document.getElementById("humidity2").textContent += ` ${humidity}%`;
      document.getElementById("wind2").textContent += ` ${wind}kph`;
    });
});
