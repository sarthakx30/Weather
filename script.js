const time=document.getElementById("time");
const day=document.getElementById("day");
const date=document.getElementById("date");
const month=document.getElementById("month");
// const weatherItem=document.getElementsByClassName("weather-item");
const temp=document.getElementById("temperature");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");
const pressure=document.getElementById("pressure");
const time_zone=document.getElementById("time-zone");
const country=document.getElementById("country");
const am_pm=document.getElementById("am-pm");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const t=new Date();
    const month_num=t.getMonth();
    const date_=t.getDate();
    const day_num=t.getDay();
    const hour=t.getHours();
    const minute=t.getMinutes();
    const hoursIn12HrFormat=hour>12?hour%12:hour;
    const ampm=hour>=12?"PM":"AM";

    time.innerHTML=hoursIn12HrFormat+":"+minute;
    am_pm.innerHTML=ampm;

    day.innerHTML=days[day_num];
    date.innerHTML=date_;
    month.innerHTML=months[month_num];
}, 1000);