# weather-dashboard

https://dawsontc003.github.io/weather-dashboard/

# Description:

This webpage hosts a weather dashboard for any city within the United States. The user is simply able to type any city into the text area and select search. From there they will be presented with a current day weather report including details with what city was searched, the date, the tempature, the humidity, wind speed, and the UV Index. In addition the UV Index UI is response based on the air quality being good = green, moderate = yellow, or bad = red. In addition to the current day weather the user is also presented with a five day forecast where the data will include the tempature high and humidity for each given day. This application will allow users to plan for weather conditions before or during travel. This would be valuable to individual's who may travel for work or individual's who may be researching for an unexpected trip.

# Challenges:

With the implementation of this project there were many challenges. The first of which was gathering the correct data from the "OpenWeather API". The challenge here was getting the details for the five day forecast as it required latitude and longitude coordinates which is not a desired user experience to request these details from the user. To solution this the application is using the desired city from the user to make an initial API call and gather the lat and lon coordinates for that city and then injecting them into a second API call that gathers the complete weather details needed. Another challenge for this application was the factor of updating the data dynamically with data from the API. To accomplish this the application has an index.html page with designated "div"s with IDs for the JS to target and append. Each div is being targeted separately but there will be future refactoring of this application to leverage for loops to iterate and gather details from the API as well as append data to the UI.

![screen shot 1](https://user-images.githubusercontent.com/69283624/97816477-d4eb0480-1c52-11eb-8d48-2fbadf54b976.PNG)

![screen shot 2](https://user-images.githubusercontent.com/69283624/97816479-d74d5e80-1c52-11eb-9e87-0772872c3b0b.PNG)
