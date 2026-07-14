const API_KEY = `e320951fd491471f8432ed5c45fba3a1`;

async function getWeather() {
    const city = document.getElementById(`cityInput`).value;
    const result = document.getElementById(`result`);

    result.innerHTML = `Loading....`;

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await res.json();

        if (data.cod !== 200) {
            result.innerHTML = "<p>City not found. Try again</p>";
            return;
        };

        result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch(error) {
        result.innerHTML = "<p>Something went wrong. Check your connection</p>";
    }
};
