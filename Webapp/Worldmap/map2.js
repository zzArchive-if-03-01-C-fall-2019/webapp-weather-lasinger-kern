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
  "id": "AND",
  "capital": "ANDORRA LA VELLA"
},
{
  "id": "AUT",
  "capital": "VIENNA"
},
{
  "id": "BEL",
  "capital": "BRUSSELS"
},
{
  "id": "BIH",
  "capital": "SARAJEVO"
},
{
  "id": "BGR",
  "capital": "SOFIA"
},

{
  "id": "HRV",
  "capital": "ZAGREB"
},{
  "id": "CYP",
  "capital": "NICOSIA"
},{
  "id": "CZE",
  "capital": "PRAGUE"
},{
  "id": "DNK",
  "capital": "COPENHAGEN"
},{
  "id": "EST",
  "capital": "TALLINN"
},{
  "id": "FIN",
  "capital": "HELSINKI"
},{
  "id": "FRA",
  "capital": "PARIS"
},{
  "id": "DEU",
  "capital": "BERLIN"
},{
  "id": "HUN",
  "capital": "BUDAPEST"
},{
  "id": "ISL",
  "capital": "REYKJAVIK"
},{
  "id": "IRL",
  "capital": "DUBLIN"
},{
  "id": "ITA",
  "capital": "ROME"
},{
  "id": "LIE",
  "capital": "VADUZ"
},{
  "id": "LUX",
  "capital": "LUXEMBOURG"
},{
  "id": "MDA",
  "capital": "CHISINAU"
},{
  "id": "MCO",
  "capital": "MONACO"
},{
  "id": "MNE",
  "capital": "PODGORICA"
},{
  "id": "NLD",
  "capital": "AMSTERDAM"
},{
  "id": "NOR",
  "capital": "OSLO"
},{
  "id": "ROU",
  "capital": "BUCHAREST"
},{
  "id": "RUS",
  "capital": "MOSCOW"
},{
  "id": "SRB",
  "capital": "BELGRADE"
},{
  "id": "SVK",
  "capital": "BRATISLAVA"
},{
  "id": "SVN",
  "capital": "LJUBLJANA"
},{
  "id": "ESP",
  "capital": "MADRID"
},{
  "id": "SWE",
  "capital": "STOCKHOLM"
},{
  "id": "CHE",
  "capital": "BERN"
},{
  "id": "UKR",
  "capital": "KIEV"
},{
  "id": "GBR",
  "capital": "LONDON"
},{
  "id": "VAT",
  "capital": "VATICAN CITY"
},
{
  "id": "POL",
  "capital": "WARSAW"
},
{
  "id": "PRT",
  "capital": "LISBON"
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

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();
