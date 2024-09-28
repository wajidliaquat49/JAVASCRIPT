const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const weatherContainer = document.getElementById('weather');

// Function to fetch weather data
async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`);
    const data = await response.json();
    displayWeather(data);
}

// Function to display weather data
function displayWeather(data) {
    const { name, main, weather } = data;
    weatherContainer.innerHTML = `
        <h2>${name}</h2>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}

// Fetch weather data on page load
window.onload = getWeather;
