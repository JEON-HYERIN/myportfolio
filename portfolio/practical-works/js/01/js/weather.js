const API_KEY = '926a0260c1acfd38c0baa8b3c67d6077';

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(function(data) {
    const temp = document.querySelector('.weather .temp');
    const condition = document.querySelector('.weather .condition');
    const city = document.querySelector('.weather .city');
    temp.textContent = `${Math.floor(data.main.temp)}º`;
    condition.textContent = data.weather[0].main;
    city.textContent = data.name;
  });
};

function error() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(success, error);