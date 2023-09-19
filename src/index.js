function formatTime(timestamp){

    let now = new Date(timestamp);
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
     let day = weekDays[now.getDay()];
     let hour = now.getHours();
     let minutes = now.getMinutes();
     if (minutes<0){
        minutes = `0${minutes}`;
     }
     return `Last updated on  ${day} ${hour}:${minutes}`;
  }
  
function displayJohannesburg(response){
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = ` Humidity: ${response.data.temperature.humidity} %`;
    windElement.innerHTML = ` Wind: ${response.data.wind.speed} km/h`;  
    dateElement.innerHTML = formatTime(response.data.time *1000);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src",`${response.data.condition.icon_url}`);
    iconElement.setAttribute("alt",  response.data.condition.icon);
}

function search(city){
    let apiKey = "e6ba34ft27a3a8ccco506b17217f3b8b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayJohannesburg);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("Johannesburg");
let form = document.querySelector("#search-bar");
form.addEventListener("submit", handleSubmit);