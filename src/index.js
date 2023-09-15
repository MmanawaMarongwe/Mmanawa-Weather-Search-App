function displayJohannesburg(response){
    console.log(response.data.weather); 
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = ` Humidity: ${response.data.temperature.humidity} %`;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = ` Wind: ${response.data.wind.speed} km/h`;

}

let apiKey = "e6ba34ft27a3a8ccco506b17217f3b8b";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Johannesburg}&key=${apiKey}`;

axios.get(apiUrl).then(displayJohannesburg);