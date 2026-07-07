const weatherIconEl = document.getElementById("weather-icon");
const locationEl = document.getElementById("location");
const weatherMainEl = document.getElementById("weather-main");
const mainTemperatureEl = document.getElementById("main-temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust")
const button = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select");
async function getWeather(city) {
    try {
        const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
        if (!response.ok) {
            throw new Error("Error al obtener el clima");
        }
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(error)
    }
}

async function showWeather(city) {
    const data = await getWeather(city)
    if (!data) {
        alert("Something went wrong, please try again later");
        return
    }
    const icono = data.weather[0].icon
    const ciudad = data.name;
    const typeWeather = data.weather[0].main
    const temp = data.main.temp
    const sensacionTermica = data.main.feels_like
    const humedad = data.main.humidity
    const viento = data.wind.speed
    const rafagas = data.wind.gust;
    weatherIconEl.src = icono
    locationEl.textContent = ciudad ?? "N/A"
    weatherMainEl.textContent = typeWeather ?? "N/A"
    mainTemperatureEl.textContent = temp ?? "N/A"
    feelsLikeEl.textContent = sensacionTermica ?? "N/A"
    humidityEl.textContent = humedad ?? "N/A"
    windEl.textContent = viento ?? "N/A"
    windGustEl.textContent = rafagas ?? "N/A"
}
button.addEventListener("click", () => {
        const city = citySelect.value;
        if (!city){
            return
        }
        showWeather(citySelect.value)
    }
);
