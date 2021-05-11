//* permet de dire que la parge est chargé pour faire des ajustement en js



var inputWeather = document.querySelector(".form-control");
var main = document.querySelector("#weather-location");
var temp = document.querySelector("#weather-temp");
var desc = document.querySelector("#weather-detail");
var button = document.querySelector(".btn-btn-secondary");

inputWeather.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
    }
    });
    

    button.addEventListener("click", function () {
        console.log(inputWeather.value)
        async function getWeather() {
            let response = await fetch("http://api.weatherstack.com/current?access_key=0b73d81f0cf08e6d0a24b7648db2b339&query=" + inputWeather.value + "");
            let data = await response.json()
            return data;    
        }
    
    getWeather()
    .then((data) => {
        var tempValue = data["current"]["temperature"];
        var nameValue = data["location"]["name"];
        var descValue = data["current"]["weather_descriptions"];
    
        main.innerHTML = nameValue;
        desc.innerHTML = descValue;
        temp.innerHTML = `Température: ${(tempValue )}°C`;
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
