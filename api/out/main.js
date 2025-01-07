window.onload = function () {
    const apiKey = '9c572809866507b40cf3cbb60d45effd'; 
    const form = document.getElementById('search-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const city = document.getElementById('city').value;
        fetch(`http://localhost:8088/http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
            const lat = data[0].lat;
            const lon = data[0].lon;
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            fetch(`http://localhost:8088/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                const weather = document.getElementById('weather');
                weather.innerHTML = `
                            <h2>${data.name}</h2>
                            <p>${data.weather[0].main}</p>
                            <p>${data.weather[0].description}</p>
                            <p>Température: ${data.main.temp}°K</p>
                        `;
            })
                .catch(error => console.error('Erreur:', error));
        })
            .catch(error => console.error('Erreur:', error));
    });
};
//# sourceMappingURL=main.js.map