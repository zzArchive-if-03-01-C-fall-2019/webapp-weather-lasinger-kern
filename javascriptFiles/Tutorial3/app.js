//https://www.youtube.com/watch?v=GXrDEA3SIOQ

const input = document.querySelector('.input');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const cntry = document.querySelector('.cntry');
const hum = document.querySelector('.hum');
const clouds = document.querySelector('.clouds'); //???
const button= document.querySelector('.button');
const apiKey = "119b6b49d1cba0373cac83388df19af2";
let temperatureValue, nameValue, descriptionValue, humidityValue, countryValue; //add sunrise, sunset


button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
      nameValue = data['name'];
      temperatureValue = data['main']['temp'];
      temperatureValue = Math.round(tempValue - 273,16);
      descriptionValue = data['weather'][0]['description'];
      humidityValue = data['main']['humidity'];
      countryValue = data['sys'][2];

      name.innerHTML = "Name: "+nameValue;
      cntry.innerHTML = "Country: "+countryValue;
      desc.innerHTML = "Description: "+descriptionValue;
      hum.innerHTML = "Humidity: "+humidityValue;
      temp.innerHTML = "Temperature: ~"+temperatureValue+" °C";

      input.value = "";
    })
    .catch(err => alert("Invalid city name"));
})
