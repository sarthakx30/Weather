const time=document.getElementById("time");
const day=document.getElementById("day");
const date=document.getElementById("date");
const month=document.getElementById("month");
// const weatherItem=document.getElementsByClassName("weather-item");
const curr_temp=document.getElementById("temperature");
const curr_humidity=document.getElementById("humidity");
const curr_wind_speed=document.getElementById("wind-speed");
const curr_pressure=document.getElementById("pressure");
const time_zone=document.getElementById("time-zone");
const country=document.getElementById("country");
const am_pm=document.getElementById("am-pm");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY='146032c9215c16508ba86b23642f6813';

setInterval(() => {
    const t=new Date();
    const month_num=t.getMonth();
    const date_=t.getDate();
    const day_num=t.getDay();
    const hour=t.getHours();
    var minute=t.getMinutes();
    const hoursIn12HrFormat=hour>12?hour%12:hour;
    const ampm=hour>=12?"PM":"AM";

    if(minute<10){
        minute='0'+minute;
    }
    time.innerHTML=hoursIn12HrFormat+":"+minute;
    am_pm.innerHTML=ampm;

    day.innerHTML=days[day_num];
    date.innerHTML=date_;
    month.innerHTML=months[month_num];
}, 1000);

function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude,longitude}=success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            showWeather(data);
        })
    })
}

function showWeather(data) {
    let {humidity,pressure,wind_speed,temp}=data.current;
    curr_humidity.innerHTML=humidity;
    curr_pressure.innerHTML=pressure;
    curr_wind_speed.innerHTML=wind_speed;
    curr_temp.innerHTML=Math.round(temp);
}

getWeatherData();