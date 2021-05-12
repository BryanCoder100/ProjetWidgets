//* permet de dire que la parge est chargé pour faire des ajustement en js
var inputWeather = document.querySelector(".form-control");
var main = document.querySelector("#weather-location");
var temp = document.querySelector("#weather-temp");
var desc = document.querySelector("#weather-detail");
var button1 = document.querySelector(".btn-btn-secondary");

inputWeather.addEventListener("keyup", function (event) {
if (event.keyCode === 13) {
event.preventDefault();
button1.click();
}
});

button1.addEventListener("click", function () {
console.log(inputWeather.value);
async function getWeather() {
let response = await fetch(
"https://api.openweathermap.org/data/2.5/weather?q="+inputWeather.value+"&appid=cc212b34587e58bcefe64595e8fc8e88"
);
let data = await response.json();
return data;
}

getWeather()
.then((data) => {
var tempValue = data["main"]["temp"];
var nameValue = data["name"];
var descValue = data["weather"][0]["icon"];

main.innerHTML = nameValue;
desc.innerHTML = `<img class="city-icon" src="http://openweathermap.org/img/wn/${descValue}@4x.png" alt="">`;
temp.innerHTML = `Température: ${(tempValue - 273.15).toFixed(2)}°C`;
inputWeather.value = "";
inputWeather.classList.remove("error");
})

.catch((err) => input.classList.add("error"));
});


function takeValue(x) {
    document.getElementById('inputwindow').value += x;
    }
    
    function clearInput(y) {
    document.getElementById('inputwindow').value = y;
    }
    
    function calculateResult() {
    var result = eval(document.getElementById('inputwindow').value);
    document.getElementById('inputwindow').value = result;
    }

      
