const apiKey = "4616976c34b65b4aa57e32ee166afb50";

function log(message){
const logBox = document.getElementById("log");
logBox.innerHTML += message + "<br>";
}

async function getWeather(){

log("Sync Start");

const city = document.getElementById("cityInput").value;

if(!city){
alert("Enter city name");
return;
}

addHistory(city);

log("[ASYNC] Start fetching");

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

const data = await response.json();

if(data.cod !== 200){
alert("City not found");
return;
}

document.getElementById("city").innerText =
data.name + ", " + data.sys.country;

document.getElementById("temp").innerText =
data.main.temp + " °C";

document.getElementById("weather").innerText =
data.weather[0].main;

document.getElementById("humidity").innerText =
data.main.humidity + "%";

document.getElementById("wind").innerText =
data.wind.speed + " m/s";

log("[ASYNC] Data received");

}catch(error){

log("Error fetching weather");

}

log("Sync End");

Promise.resolve().then(()=>{
log("Promise.then (Microtask)");
});

setTimeout(()=>{
log("setTimeout (Macrotask)");
},0);

}

function addHistory(city){

const history = document.getElementById("history");

const tag = document.createElement("span");

tag.innerText = city;

tag.onclick = ()=>{
document.getElementById("cityInput").value = city;
getWeather();
};

history.appendChild(tag);

}
