// variable for to display current date
var date = moment().format("l");

$(document).ready(function () {
  // API URL stored as variable...
  var apiURL =
    "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
  // API key variable
  var apiKey = "&appid=cad1a2ecb6a3fa2256d10992dbd96291";
  // Event listener for Search button
  $("#search").on("click", function () {
    // get user entry value for city
    var citySearch = document.getElementById("city").value;
    // set itme to local storage
    storeCityInfo(apiURL, citySearch, apiKey);
    console.log(apiURL + citySearch + apiKey);
    // API fetch call to retrieve API data for lat and lon details using variables to insert user city input
    callAPI(apiURL, citySearch, apiKey)
      // function for storing API data with lon and lat details
      .then(function (latAndlongData) {
        // declared variable for latitude details for user city searched
        var lat = "&lat=" + latAndlongData.coord.lat;
        // declared variable for longitude details for user city searched
        var lon = "&lon=" + latAndlongData.coord.lon;
        getWeatherData(lat, lon);
        // declared variable for weather details URL API
        var allWeatherDataURL =
          "https://api.openweathermap.org/data/2.5/onecall?units=imperial";
        // declared variable for weather details API call parameters and key
        var allWeatherDataAPIkey =
          "&exclude=minutely&alerts&hourly&appid=cad1a2ecb6a3fa2256d10992dbd96291";
        // API call using URL declared variables with latitude and longitude from user city search
        fetch(allWeatherDataURL + lat + lon + allWeatherDataAPIkey)
          .then((response) => response.json())
          .then(function (weatherData) {
            // store variable for UV index color coding
            uviIndex = weatherData.current.uvi;
            // Appending new text value to "current-temp" html ID
            currentTemp.textContent =
              "Tempature:" + "  " + weatherData.current.temp + " " + "F";
            currentTemp.append();
            // Appending new text value to "current-humidity" html ID
            currentHumidity.textContent =
              "Humidity:" + "  " + weatherData.current.humidity + "%";
            currentHumidity.append();
            // Appending new text value to "current-wind" html ID
            currentWindSpeed.textContent =
              "Wind Speed:" + "  " + weatherData.current.wind_speed + "MPH";
            currentWindSpeed.append();
            // Appending new text value to "current-uv" html ID
            currentUVI.textContent =
              "UV Index:" + "  " + weatherData.current.uvi;
            currentUVI.append();
            console.log(weatherData);
            // Appending API value for day1 forecast tempature
            day1forecast.textContent =
              "Temp:" + "  " + weatherData.daily[0].temp.max;
            day1forecast.append();
            // Appending API value for day2 forecast tempature
            day2forecast.textContent =
              "Temp:" + "  " + weatherData.daily[1].temp.max;
            day2forecast.append();
            // Appending API value for day3 forecast tempature
            day3forecast.textContent =
              "Temp:" + "  " + weatherData.daily[2].temp.max;
            day3forecast.append();
            // Appending API value for day4 forecast tempature
            day4forecast.textContent =
              "Temp:" + "  " + weatherData.daily[3].temp.max;
            day4forecast.append();
            // Appending API value for day5 forecast tempature
            day5forecast.textContent =
              "Temp:" + "  " + weatherData.daily[4].temp.max;
            day5forecast.append();

            // Appending API value for day1 forecast humidity
            day1Hum.textContent =
              "Humidity:" + " " + weatherData.daily[0].humidity + "%";
            day1Hum.append();
            // Appending API value for day2 forecast humidity
            day2Hum.textContent =
              "Humidity:" + " " + weatherData.daily[1].humidity + "%";
            day2Hum.append();
            // Appending API value for day3 forecast humidity
            day3Hum.textContent =
              "Humidity:" + " " + weatherData.daily[2].humidity + "%";
            day3Hum.append();
            // Appending API value for day4 forecast humidity
            day4Hum.textContent =
              "Humidity:" + " " + weatherData.daily[3].humidity + "%";
            day4Hum.append();
            // Appending API value for day5 forecast humidity
            day5Hum.textContent =
              "Humidity:" + " " + weatherData.daily[4].humidity + "%";
            day5Hum.append();
            // condition to display color code for UV index
            if (uviIndex > 7) {
              var color = document.getElementById("current-uv");
              color.classList.add("past");
            } else if (uviIndex >= 3 || uviIndex <= 5) {
              var color = document.getElementById("current-uv");
              color.classList.add("present");
            }
            if (uviIndex < 3) {
              var color = document.getElementById("current-uv");
              color.classList.add("future");
            }

            console.log(weatherData.current.uvi);
          });
      });
  });
  // declared variable to target HTML for city and date
  var cityDate = document.querySelector("#city-and-date");
  // declared variable to target HTML for current day tempature
  var currentTemp = document.querySelector("#current-temp");
  // declared variable to target HTML for current day humidity
  var currentHumidity = document.querySelector("#current-humidity");
  // declared variable to target HTML for current day wind speed
  var currentWindSpeed = document.querySelector("#current-wind");
  // declared variable to target HTML for current UV Index
  var currentUVI = document.querySelector("#current-uv");
  // declared variable to target HTML for day 1 of 5 day forecast
  var day1forecast = document.querySelector("#nextDay1");
  // declared variable to target HTML for day 2 of 5 day forecast
  var day2forecast = document.querySelector("#nextDay2");
  // declared variable to target HTML for day 3 of 5 day forecast
  var day3forecast = document.querySelector("#nextDay3");
  // declared variable to target HTML for day 4 of 5 day forecast
  var day4forecast = document.querySelector("#nextDay4");
  // declared variable to target HTML for day 5 of 5 day forecast
  var day5forecast = document.querySelector("#nextDay5");
  // declared variable to target HTML for day 1 of 5 day forecast humidity
  var day1Hum = document.querySelector("#humDay1");
  // declared variable to target HTML for day 2 of 5 day forecast humidity
  var day2Hum = document.querySelector("#humDay2");
  // declared variable to target HTML for day 3 of 5 day forecast humidity
  var day3Hum = document.querySelector("#humDay3");
  // declared variable to target HTML for day 4 of 5 day forecast humidity
  var day4Hum = document.querySelector("#humDay4");
  // declared variable to target HTML for day 5 of 5 day forecast humidity
  var day5Hum = document.querySelector("#humDay5");
  // Title for 5 day forecast section
  var searchSave = document.querySelector("#savedCity1");
  // Get weather details function declared in global memory
  function getWeatherData(lat, lon) {
    // Appending new text value to "city-and-date" html ID
    cityDate.textContent =
      document.getElementById("city").value + " " + "(" + date + ")";
    cityDate.append();
  }
  // Setting local storage for search city history
  function storeCityInfo(apiURL, citySearch, apiKey) {
    localStorage.setItem("City1Search:", apiURL + citySearch + apiKey);
    localStorage.setItem("City1:", citySearch);
  }

  // Global scope function for callAPI function
  async function callAPI(apiURL, citySearch, apiKey) {
    const response = await fetch(apiURL + citySearch + apiKey);
    return response.json();
  }
});
