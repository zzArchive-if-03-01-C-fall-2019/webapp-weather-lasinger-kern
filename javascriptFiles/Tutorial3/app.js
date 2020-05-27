//https://www.youtube.com/watch?v=GXrDEA3SIOQ

const input = document.querySelector('.input');
const name = document.querySelector('.name');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const country = document.querySelector('.country');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const button= document.querySelector('.button');
const apiKey = "119b6b49d1cba0373cac83388df19af2";
let temperatureValue, nameValue, descriptionValue, humidityValue, countryValue, windspeedValue, sunriseValue, sunsetValue;


button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
      nameValue = data['name'];
      temperatureValue = data['main']['temp'];
      descriptionValue = data['weather'][0]['description'];
      humidityValue = data['main']['humidity'];
      countryValue = data['sys']['country'];
      windspeedValue = data['wind']['speed'];
      sunriseValue = data['sys']['sunrise'];
      sunsetValue = data['sys']['sunset'];

      temperatureValue = Math.round(temperatureValue - 273,16);
      sunriseValue = new Date(sunriseValue * 1000);
      sunsetValue = new Date(sunsetValue * 1000);

      name.innerHTML = "Name: "+nameValue;
      country.innerHTML = "Country: "+countryValue;
      description.innerHTML = "Description: "+descriptionValue;
      humidity.innerHTML = "Humidity: "+humidityValue;
      temperature.innerHTML = "Temperature: ~"+temperatureValue+" °C";
      windspeed.innerHTML = "Windgeschwindigkeit: "+windspeedValue+" km/h";
      sunrise.innerHTML = "Sonnenaufgang: "+sunriseValue.getHours()+":"+sunriseValue.getMinutes()+" Uhr";
      sunset.innerHTML = "Sonnenuntergang: "+sunsetValue.getHours()+":"+sunsetValue.getMinutes()+" Uhr";

      input.value = "";
    })
    .catch(err => alert("Invalid city name"));
})
