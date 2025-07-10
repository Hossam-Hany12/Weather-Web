const apiKey = "bc8cd932ddaca1d8a707bd2413a07d1b";
const input = document.querySelector("input");
const button = document.querySelector("button");
let theStatus = false
button.addEventListener("click", function () {
  const city = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      theStatus = true
      let iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.querySelector(".weather-box").classList.add("active");
      document.getElementById("city-name").textContent = data.name;
      document.getElementById("temp").textContent = data.main.temp + "°C";
      document.getElementById("desc").textContent = data.weather[0].description;
      document.getElementById("weather-icon").src = iconUrl;
      document.getElementById("weather-icon").style.display = "block";
      document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;
      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById("pressure").textContent = `Pressure: ${data.main.pressure} hPa`;
      document.getElementById("span").style.display = "none"
      const weatherMain = data.weather[0].main.toLowerCase();
      const weather = data.weather[0].main.toLowerCase();
      if (weather.includes("clear")) {
        document.body.style.background =
          "linear-gradient(to bottom, #56ccf2, #2f80ed)";
      } else if (weather.includes("cloud")) {
        document.body.style.background =
          "linear-gradient(to bottom, #bdc3c7, #2c3e50)";
      } else if (weather.includes("rain")) {
        document.body.style.background =
          "linear-gradient(to bottom, #373B44, #4286f4)";
      } else if (weather.includes("thunderstorm")) {
        document.body.style.background =
          "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)";
      } else {
        document.body.style.background =
          "linear-gradient(to bottom, #89f7fe, #66a6ff)";
      }
      if (weatherMain.includes("thunderstorm")) {
        // كيرسور برق
        document.body.style.cursor =
          "url('https://pngimg.com/uploads/lightning/lightning_PNG36.png'), auto";
      } else if (weatherMain.includes("rain")) {
        // كيرسور قطرة
        document.body.style.cursor =
          "url('https://cdn-icons-png.flaticon.com/32/4148/4148460.png'), auto";
      } else if (weatherMain.includes("clear")) {
        // كيرسور شمس
        document.body.style.cursor =
          "url('https://cdn-icons-png.flaticon.com/32/869/869869.png'), auto";
      } else if (weatherMain.includes("cloud")) {
        // كيرسور سحابة
        document.body.style.cursor =
          "url('https://cdn-icons-png.flaticon.com/32/1163/1163661.png'), auto";
      } else {
        // كيرسور افتراضي
        document.body.style.cursor = "default";
      }
    })
    .catch((err) => {
        window.onload = function() {
        document.querySelector("#span").innerHTML = "Country Not Found";
        document.querySelector("#span").innerHTML = "Countery Not Found";
        document.querySelector("#span").style.display = "Block";
};
    });
});
function typeWriter(text, elementId, speed = 100) {
  let i = 0;
  const target = document.getElementById(elementId);
  target.textContent = "";
  function typing() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

typeWriter("Welcome to the Weather App!", "typing-text", 80);
