document.addEventListener('DOMContentLoaded', function() {
    const city = 'Ternovka';
    const apiKey = '05e843198dc81fcb16948bccc683a990';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').innerText = data.city.name;
            const forecastElements = document.querySelectorAll('.day');
            let currentDate = new Date().getDate();
            let forecasts = [];
            let lastAddedDate = null;
            for (let i = 0; i < data.list.length; i++) {
                let forecastDate = new Date(data.list[i].dt_txt).getDate();
                if (forecastDate >= currentDate && forecastDate !== lastAddedDate) {
                    forecasts.push(data.list[i]);
                    lastAddedDate = forecastDate;
                }
            }
            forecasts.forEach((item, index) => {
                forecastElements[index].querySelector('.name')
                    .innerText = new Date(item.dt_txt).toLocaleDateString();
                forecastElements[index].querySelector('.icon')
                    .src = getWeatherIcon(item.weather[0].main);
                let temp = item.main.temp.toString().split('.')[0];
                forecastElements[index].querySelector('.temp')
                    .innerText = `${temp >= 0 ? '+' : '-'}${temp}°C`;
            });
        })
        .catch(error => console.error('Error:', error));
});

function getWeatherIcon(weather) {
    switch (weather) {
        case 'Clear':
            return 'assets/images/sun.png';
        case 'Clouds':
            return 'assets/images/cloudy.png';
        case 'Rain':
            return 'assets/images/rain.png';
        default:
            return 'assets/images/sun.png';
    }
}