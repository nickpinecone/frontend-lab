import dateFormat from "dateformat";

import "./styles.css"

const API_KEY = "442fe83fbf324936aba162109241206";
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=2`;

const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

const brief = document.querySelector(".brief");
const todayHourly = document.querySelector(".today .hourly");
const tomorrowHourly = document.querySelector(".tomorrow .hourly");

const city = document.querySelector(".city");
const search = document.querySelector("#search");

const todayDate = document.querySelector(".today .date");
const tomorrowDate = document.querySelector(".tomorrow .date");

async function getWeather(query) {
    let url = BASE_URL + "&q=" + query;
    let res = await fetch(url);
    let data = await res.json();

    return data;
}

function generateField(data) {
    let field = document.createElement("div");
    field.classList.add("field");

    let hour = document.createElement("span");
    hour.classList.add("hour");
    let time = data.time.split(" ")[1];
    hour.textContent = time;
    field.appendChild(hour);

    let info = document.createElement("div");
    info.classList.add("info");
    field.appendChild(info);

    let condition = getCondition(data.condition.text);

    let status = document.createElement("span");
    status.classList.add("status");
    status.textContent = condition.desc;
    info.appendChild(status);

    let icon = document.createElement("span");
    icon.classList.add("icon");
    icon.textContent = condition.icon;
    info.appendChild(icon);

    let degrees = document.createElement("span");
    degrees.classList.add("degrees");
    if (celsius.checked) {
        degrees.textContent = data.temp_c;
    }
    else if (fahrenheit.checked) {
        degrees.textContent = data.temp_f;
    }

    info.appendChild(degrees);
    return field;

}

function populateHourly(hourly, data) {
    hourly.textContent = "";

    for (let day of data) {
        let field = generateField(day);
        hourly.appendChild(field);
    }
}

function populateBrief(current) {
    const degrees = brief.querySelector(".degrees");

    if (celsius.checked) {
        degrees.textContent = current.temp_c;
    }
    else if (fahrenheit) {
        degrees.textContent = current.temp_f;
    }

    const status = brief.querySelector(".status");
    const icon = brief.querySelector(".icon");

    let condition = getCondition(current.condition.text);

    status.textContent = condition.desc;
    icon.textContent = condition.icon;
}

function populateDay(day, hourly, dateDisplay) {
    let filter = [];
    let timeNow = Date.now() / 1000;

    for (var hour of day.hour) {
        if (hour.time_epoch >= timeNow) {
            filter.push(hour)
        }
    }

    populateHourly(hourly, filter);

    let date = new Date(day.date);
    dateDisplay.textContent = dateFormat(date, "dd mmmm, dddd");
}

function populateData(data) {
    city.textContent = data.location.name;

    populateBrief(data.current);
    populateDay(data.forecast.forecastday[0], todayHourly, todayDate)
    populateDay(data.forecast.forecastday[1], tomorrowHourly, tomorrowDate);
}

function containsAny(text, arr) {
    let has = false;

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        if (text.includes(str)) {
            has = true;
            break;
        }
    }

    return has;
}

function getCondition(text) {
    text = text.toLowerCase();

    if (containsAny(text, ["cloud", "overcast"])) {
        return { icon: "☁️️", desc: "Clouds" };
    }
    else if (containsAny(text, ["rain", "drizzle", "sleet"])) {
        return { icon: "🌧️", desc: "Rain" };
    }
    else if (containsAny(text, ["mist", "fog"])) {
        return { icon: "🌫️", desc: "Mist" };
    }
    else if (containsAny(text, ["snow", "ice", "blizzard"])) {
        return { icon: "❄️", desc: "Snow" };
    }
    else if (containsAny(text, ["thunder"])) {
        return { icon: "🌩️", desc: "Thunder" };
    }
    else {
        return { icon: "☀️", desc: "Clear" };
    }
}

search.addEventListener("keypress", async (event) => {
    if (event.key == "Enter") {
        let data = await getWeather(search.value);
        if (!("error" in data)) {
            populateData(data);
        }
    }
});
