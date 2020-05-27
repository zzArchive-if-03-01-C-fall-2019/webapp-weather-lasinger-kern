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


button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
      const nameValue = data['name'];
      const descriptionValue = data['weather'][0]['description'];
      const humidityValue = data['main']['humidity'];
      const countryValue = data['sys']['country'];
      const windspeedValue = data['wind']['speed'];
      let temperatureValue = data['main']['temp'];
      let sunriseValue = data['sys']['sunrise'];
      let sunsetValue = data['sys']['sunset'];

      temperatureValue = Math.round(temperatureValue - 273,16);
      sunriseValue = new Date(sunriseValue * 1000);
      sunsetValue = new Date(sunsetValue * 1000);

      name.innerHTML = "Name: "+nameValue;
      country.innerHTML = "Country: "+countryValue;
      description.innerHTML = "Description: "+descriptionValue;
      humidity.innerHTML = "Humidity: "+humidityValue;
      temperature.innerHTML = "Temperature: ~"+temperatureValue+" °C";
      windspeed.innerHTML = "Windspeed: "+windspeedValue+" km/h";
      sunrise.innerHTML = "Sunrise: "+sunriseValue.getHours()+":"+sunriseValue.getMinutes()+" Uhr";
      sunset.innerHTML = "Sunset: "+sunsetValue.getHours()+":"+sunsetValue.getMinutes()+" Uhr";

      input.value = "";
    })
    .catch(err => alert("Invalid city name"));
})
