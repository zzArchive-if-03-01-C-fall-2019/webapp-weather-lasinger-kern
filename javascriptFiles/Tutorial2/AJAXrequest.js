const apiKey = "119b6b49d1cba0373cac83388df19af2";
const inputVal = input.value;
const form = document.querySelector(".top-banner form");

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city";
  });
