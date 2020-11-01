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
            // Appending API value for day1 forcast tempature
            day1Forcast.textContent =
              "Temp:" + "  " + weatherData.daily[0].temp.max;
            day1Forcast.append();
            // Appending API value for day2 forcast tempature
            day2Forcast.textContent =
              "Temp:" + "  " + weatherData.daily[1].temp.max;
            day2Forcast.append();
            // Appending API value for day3 forcast tempature
            day3Forcast.textContent =
              "Temp:" + "  " + weatherData.daily[2].temp.max;
            day3Forcast.append();
            // Appending API value for day4 forcast tempature
            day4Forcast.textContent =
              "Temp:" + "  " + weatherData.daily[3].temp.max;
            day4Forcast.append();
            // Appending API value for day5 forcast tempature
            day5Forcast.textContent =
              "Temp:" + "  " + weatherData.daily[4].temp.max;
            day5Forcast.append();

            // Appending API value for day1 forcast humidity
            day1Hum.textContent =
              "Humidity:" + " " + weatherData.daily[0].humidity + "%";
            day1Hum.append();
            // Appending API value for day2 forcast humidity
            day2Hum.textContent =
              "Humidity:" + " " + weatherData.daily[1].humidity + "%";
            day2Hum.append();
            // Appending API value for day3 forcast humidity
            day3Hum.textContent =
              "Humidity:" + " " + weatherData.daily[2].humidity + "%";
            day3Hum.append();
            // Appending API value for day4 forcast humidity
            day4Hum.textContent =
              "Humidity:" + " " + weatherData.daily[3].humidity + "%";
            day4Hum.append();
            // Appending API value for day5 forcast humidity
            day5Hum.textContent =
              "Humidity:" + " " + weatherData.daily[4].humidity + "%";
            day5Hum.append();
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
  // declared variable to target HTML for day 1 of 5 day forcast
  var day1Forcast = document.querySelector("#nextDay1");
  // declared variable to target HTML for day 2 of 5 day forcast
  var day2Forcast = document.querySelector("#nextDay2");
  // declared variable to target HTML for day 3 of 5 day forcast
  var day3Forcast = document.querySelector("#nextDay3");
  // declared variable to target HTML for day 4 of 5 day forcast
  var day4Forcast = document.querySelector("#nextDay4");
  // declared variable to target HTML for day 5 of 5 day forcast
  var day5Forcast = document.querySelector("#nextDay5");
  // declared variable to target HTML for day 1 of 5 day forcast humidity
  var day1Hum = document.querySelector("#humDay1");
  // declared variable to target HTML for day 2 of 5 day forcast humidity
  var day2Hum = document.querySelector("#humDay2");
  // declared variable to target HTML for day 3 of 5 day forcast humidity
  var day3Hum = document.querySelector("#humDay3");
  // declared variable to target HTML for day 4 of 5 day forcast humidity
  var day4Hum = document.querySelector("#humDay4");
  // declared variable to target HTML for day 5 of 5 day forcast humidity
  var day5Hum = document.querySelector("#humDay5");
  // Get weather details function declared in global memory
  function getWeatherData(lat, lon) {
    // Appending new text value to "city-and-date" html ID
    cityDate.textContent = document.getElementById("city").value + " " + date;
    cityDate.append();
  }

  function storeCityInfo(apiURL, citySearch, apiKey) {
    localStorage.setItem("City1Search:", apiURL + citySearch + apiKey);
    localStorage.setItem("City1:", citySearch);
  }
  // display city from previous search

  // Global scope function for callAPI function
  async function callAPI(apiURL, citySearch, apiKey) {
    const response = await fetch(apiURL + citySearch + apiKey);
    return response.json();
  }
});
// current day info City and date, temp. Huminity, wind speed, UV index

// DONE // Set up UI with specified classes and ID's to target in JS
// variable for current date (use moment js)
// Declare variables in global memory for the API call URL value
/////////// var for initial part of URL
/////////// var for user input of city
/////////// var for required key for API
// Use variables for current day container for
//////// user city searched
/////// current date
// target API data and store in variable
////// tempature
////// humidity
////// wind speed
////// UV index
// use current day variable details to show API data in UI
////// target HTML elements by ID and append new API data

// 5 day forcast
// Create card style UI with HTML (note: variables for day 1 are present from current day display)
////// Var for date
////// Var for temp day 2
////// Var for temp day 3
////// Var for temp day 4
////// Var for temp day 5
////// Var for Humidity day 2
////// Var for Humidity day 3
////// Var for Humidity day 4
////// Var for Humidity day 5

// persist history of last 5 searches
////// set key value pairs to story data in local memory
////// set local storage items
//////set functionality to retrieve local storage items
