const consoleBox = document.getElementById("consoleBox");

function log(msg){
consoleBox.textContent += "\n" + msg;
}

function getWeather(){

log("Sync Start");

const city = document.getElementById("cityInput").value;

log("[ASYNC] Start fetching");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)

.then(res=>res.json())

.then(data=>{

log("Promise.then (Microtask)");

document.getElementById("city").innerText=data.name+", "+data.sys.country;
document.getElementById("temp").innerText=data.main.temp+" °C";
document.getElementById("weather").innerText=data.weather[0].main;
document.getElementById("humidity").innerText=data.main.humidity+"%";
document.getElementById("wind").innerText=data.wind.speed+" m/s";

addHistory(city);

})

setTimeout(()=>{
log("setTimeout (Macrotask)");
},0);

log("Sync End");

}

function addHistory(city){

const history=document.getElementById("history");

const tag=document.createElement("span");

tag.innerText=city;

history.appendChild(tag);

log("[ASYNC] Data received");

}