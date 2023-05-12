const apiKey = "5a592ebc31909ca0c4be762717561666";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.getElementById("weather-icon");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const weatherContainer = document.getElementById("weather-container");
const errorAlert = document.getElementById("error-alert");


async function wheatherUpdate(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    if(response.status == 404){
        weatherContainer.style.display ="none";
        errorAlert.style.display="block";
    }else{
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = Math.round(data.main.temp)+ "&degC";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
	
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        
        weatherContainer.style.display = "block";
        errorAlert.style.display = "none"
    }

    
}

searchButton.addEventListener("click", ()=>
	wheatherUpdate(searchInput.value)
    );