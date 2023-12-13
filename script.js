document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    getWeather(searchInput);
  });
  
  async function getWeather(country) {
    const apiKey = '4dde58aa2830157379a849c08ece81f8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <img src="${getWeatherImage(data.weather[0].main)}" alt="Weather Image">
    `;
  }
  
  function getWeatherImage(weather) {
    switch (weather) {
      case 'Rain':
        return 'rain-image-url';
      case 'Clouds':
        return 'cloud-image-url';
      case 'Clear':
        return 'sunny-image-url';
      case 'Thunderstorm':
        return 'storm-image-url';
      default:
        return '';
    }
  }
  