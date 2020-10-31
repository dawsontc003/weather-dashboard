// variable for to display current date
var date = moment().format("l");
console.log(date);
// API URL stored as variable...
var apiURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
// API key variable
var apiKey = "&appid=cad1a2ecb6a3fa2256d10992dbd96291";
// Event listener for Search button
$("#search").on("click", function () {
  // get user entry value for city
  var citySearch = document.getElementById("city").value;
  console.log(citySearch);
  //
  // API fetch call to retrieve API data for lat and lon details using variables to insert user city input
  fetch(apiURL + citySearch + apiKey)
    .then(function (response) {
      return response.json();
    })
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
          console.log(weatherData.current.temp);
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
          currentUVI.textContent = "UV Index:" + "  " + weatherData.current.uvi;
          currentUVI.append();
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

// Get weather details function declared in global memory
function getWeatherData(lat, lon) {
  // Appending new text value to "city-and-date" html ID
  cityDate.textContent = document.getElementById("city").value + " " + date;
  cityDate.append();
}
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
