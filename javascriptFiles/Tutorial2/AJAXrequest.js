const apiKey = "119b6b49d1cba0373cac83388df19af2";
const inputVal = input.value;
const form = document.querySelector(".top-banner form");

const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
    const { main, name, sys, weather } = data;
    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
  })
  .catch(() => {
    msg.textContent = "invalid city";
  });
console.log(list);
msg.textContent = "";
form.reset();
input.focus();
