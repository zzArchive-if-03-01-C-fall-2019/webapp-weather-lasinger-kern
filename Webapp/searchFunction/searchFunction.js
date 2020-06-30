var chart = am4core.create("chartdiv", am4maps.MapChart)
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

polygonSeries.data = [{
  "id": "US",
  "capital": "Washington"
},{
  "id": "CA",
  "capital": "Ottawa"
},{
  "id": "MX",
  "capital": "Mexico city"
},{
  "id": "AD",
  "capital": "ANDORRA LA VELLA"
},{
  "id": "AT",
  "capital": "VIENNA"
},{
  "id": "BE",
  "capital": "BRUSSELS"
},{
  "id": "BA",
  "capital": "SARAJEVO"
},{
  "id": "BG",
  "capital": "SOFIA"
},{
  "id": "HR",
  "capital": "ZAGREB"
},{
  "id": "CY",
  "capital": "NICOSIA"
},{
  "id": "CZ",
  "capital": "PRAGUE"
},{
  "id": "DK",
  "capital": "COPENHAGEN"
},{
  "id": "EE",
  "capital": "TALLINN"
},{
  "id": "FI",
  "capital": "HELSINKI"
},{
  "id": "FR",
  "capital": "PARIS"
},{
  "id": "DE",
  "capital": "BERLIN"
},{
  "id": "HU",
  "capital": "BUDAPEST"
},{
  "id": "IS",
  "capital": "REYKJAVIK"
},{
  "id": "IE",
  "capital": "DUBLIN"
},{
  "id": "IT",
  "capital": "ROME"
},{
  "id": "LI",
  "capital": "VADUZ"
},{
  "id": "LU",
  "capital": "LUXEMBOURG"
},{
  "id": "MD",
  "capital": "CHISINAU"
},{
  "id": "MC",
  "capital": "MONACO"
},{
  "id": "ME",
  "capital": "PODGORICA"
},{
  "id": "NL",
  "capital": "AMSTERDAM"
},{
  "id": "NO",
  "capital": "OSLO"
},{
  "id": "RO",
  "capital": "BUCHAREST"
},{
  "id": "RU",
  "capital": "MOSCOW"
},{
  "id": "RS",
  "capital": "BELGRADE"
},{
  "id": "SK",
  "capital": "BRATISLAVA"
},{
  "id": "SI",
  "capital": "LJUBLJANA"
},{
  "id": "ES",
  "capital": "MADRID"
},{
  "id": "SE",
  "capital": "STOCKHOLM"
},{
  "id": "CH",
  "capital": "BERN"
},{
  "id": "UA",
  "capital": "KIEV"
},{
  "id": "GB",
  "capital": "LONDON"
},{
  "id": "VA",
  "capital": "VATICAN CITY"
},{
  "id": "PL",
  "capital": "WARSAW"
},{
  "id": "GL",
  "capital": "COPENHAGEN"
},{
  "id": "PT",
  "capital": "LISBON" //europe end
},{
  "id": "CU",
  "capital": "HAVANA"
},{
  "id": "BR",
  "capital": "BRASILIA"
},{
  "id": "AR",
  "capital": "BUENOS AIRES"
},{
  "id": "VE",
  "capital": "CARACAS"
},{
  "id": "CL",
  "capital": "SANTIAGO"
},{
  "id": "KZ",
  "capital": "NUR-SULTAN"
},{
  "id": "CN",
  "capital": "BEIJING"
},{
  "id": "KP",
  "capital": "PYONGYANG"
},{
  "id": "KR",
  "capital": "SEOUL"
},{
  "id": "JP",
  "capital": "TOKYO"
},{
  "id": "ID",
  "capital": "JAKARTA"
},{
  "id": "AU",
  "capital": "CANBERRA"
},{
  "id": "NZ",
  "capital": "WELLINGTON"
},{
  "id": "IN",
  "capital": "NEW DELHI"
},{
  "id": "BD",
  "capital": "DHAKA"
},{
  "id": "IR",
  "capital": "TEHRAN"
},{
  "id": "IQ",
  "capital": "BAGHDAD"
},{
  "id": "SA",
  "capital": "RIYADH"
},{
  "id": "EG",
  "capital": "CAIRO"
},{
  "id": "ET",
  "capital": "ADDIS ABABA"
},{
  "id": "LY",
  "capital": "TRIPOLI"
},{
  "id": "ZA",
  "capital": "BLOEMFONTEIN"
},{
  "id": "MG",
  "capital": "ANTANANARIVO"
},]

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = "{capital}";
polygonTemplate.events.on("hit", function(event) {
  const data = event.target.dataItem.dataContext;
  input.value = data.capital;
  printAPIData();
});

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#65D4E9");
//chart.zoomControl = new am4maps.ZoomControl();



const input = document.getElementById("input");
const button = document.getElementById("button");

input.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    printAPIData();
  }
})
button.addEventListener('click', printAPIData);



function printAPIData() {
  const apiKey = "119b6b49d1cba0373cac83388df19af2";

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
      //reading Data from API
      const nameValue = data['name'];
      const descriptionValue = data['weather'][0]['description'];
      const humidityValue = data['main']['humidity'];
      const countryValue = data['sys']['country'];
      const windspeedValue = data['wind']['speed'];
      let temperatureValue = Math.round(data['main']['temp'] - 273,16); //Conversion from Kelvin to Celsius
      let sunriseValue = new Date(data['sys']['sunrise']*1000); //Conversion from unix time to regular time
      let sunsetValue = new Date(data['sys']['sunset']*1000); //Conversion from unix time to regular time

      printData(nameValue, countryValue, descriptionValue, humidityValue, temperatureValue, windspeedValue, sunriseValue.getHours(), calculateSunMinute(sunriseValue), sunsetValue.getHours(), calculateSunMinute(sunsetValue));

      input.value = "";
    })
    .catch(err => alert("Invalid city name"));
}

function calculateSunMinute(sunValue) {
  let result = sunValue.getMinutes();

  if(result < 10){
    result = "0"+result;
  }
  return result;
}

function printData(nameValue, countryValue, descriptionValue, humidityValue, temperatureValue, windspeedValue, sunriseHour, sunriseMinute, sunsetHour, sunsetMinute) {
  const name = document.getElementById("name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const country = document.getElementById("country");
  const humidity = document.getElementById("humidity");
  const windspeed = document.getElementById("windspeed");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  name.innerHTML = "Name: "+nameValue;
  country.innerHTML = "Country: "+countryValue;
  description.innerHTML = "Description: "+descriptionValue;
  humidity.innerHTML = "Humidity: "+humidityValue+" %";
  temperature.innerHTML = "Temperature: ~"+temperatureValue+" °C";
  windspeed.innerHTML = "Windspeed: "+windspeedValue+" km/h";
  sunrise.innerHTML = "Sunrise: "+sunriseHour+":"+sunriseMinute+" Uhr";
  sunset.innerHTML = "Sunset: "+sunsetHour+":"+sunsetMinute+" Uhr";
}
