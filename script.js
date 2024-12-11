const API_KEY = '137cb54d58a1a69d7d052cabebf5998f'; // Substitua com sua chave da API
const city = 'Rio de Janeiro'; // Substitua pela cidade desejada
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <p>Location: ${data.name}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    })
    .catch(error => console.error('Error fetching weather data:', error));
