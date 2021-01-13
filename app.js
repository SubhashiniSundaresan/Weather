window.addEventListener('DOMContentLoaded', (event) => 
                        { 
    console.log('DOM fully loaded and parsed');
    const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const weather={};
weather.temperature={unit:"celsius"};
if ('geolocation' in navigator){
navigator.geolocation.getCurrentPosition(setPosition, showError);
}
function setPosition(position) {
let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;
    getWeather(latitude, longitude);
}
function showError(error){
console.log(error);
}
function getWeather(latitude, longitude)
{
let api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9ce2dac72a40f15e71c6bcfae7e63d23`
fetch(api) 
    .then(
    function(response){ 
        return response.json();
         })
    .then(function(data){ 
    weather.temperature.value = Math.floor(data.main.temp - 273); weather.description = data.weather[0].description; weather.iconId = data.weather[0].icon; weather.city = data.name; weather.country = data.sys.country;
    console.log(weather);
})
    .then(function(){ displayWeather(); });
    
}
function displayWeather() {
iconElement.innerHTML=`<img src="https://raw.githubusercontent.com/CodeExplainedRepo/Weather-App-JavaScript/master/icons/01n.png"/>`;
    tempElement.innerHTML= weather.temperature.value;
    descElement.innerHTML= weather.description
    locationElement.innerHTML= `${weather.city}, ${weather.country}`
}

});
