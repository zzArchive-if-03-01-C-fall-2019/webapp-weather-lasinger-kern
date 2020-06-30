// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart)

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Add some custom data
polygonSeries.data = [{
  "id": "US",
  "capital": "Washington"
}, {
  "id": "CA",
  "capital": "Ottawa"
}, {
  "id": "MX",
  "capital": "Mexico city"
},
{
  "id": "AD",
  "capital": "ANDORRA LA VELLA"
},
{
  "id": "AT",
  "capital": "VIENNA"
},
{
  "id": "BE",
  "capital": "BRUSSELS"
},
{
  "id": "BA",
  "capital": "SARAJEVO"
},
{
  "id": "BG",
  "capital": "SOFIA"
},
{
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
polygonTemplate.events.on("hit", function(ev) {
  var data = ev.target.dataItem.dataContext;
  var info = document.getElementById("info");
  info.innerHTML = "<h3>" + data.name + " (" + data.id  + ")</h3>";
  if (data.description) {
    info.innerHTML += data.description;
  }
  else {
    info.innerHTML += data.capital;
  }
});

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#5A9367");

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();
