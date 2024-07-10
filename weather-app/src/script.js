import "./styles.css"

const API_KEY = "442fe83fbf324936aba162109241206";
const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=2`;

const brief = document.querySelector(".brief");
const todayHourly = document.querySelector(".today .hourly");
const tomorrowHourly = document.querySelector(".tomorrow .hourly");

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
    hour.textContent = "00:00";
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
    degrees.textContent = data.temp_c;
    info.appendChild(degrees);

    return field;

}

function populateHourly(hourly, data) {
    hourly.textContent = "";

    for (let day of data.hour) {
        let field = generateField(day);
        hourly.appendChild(field);
    }
}

function populateBrief(current) {
    const degrees = brief.querySelector(".degrees");
    degrees.textContent = current.temp_c;

    const status = brief.querySelector(".status");
    const icon = brief.querySelector(".icon");

    let condition = getCondition(current.condition.text);

    status.textContent = condition.desc;
    icon.textContent = condition.icon;
}

function populateData(data) {
    console.log(data);

    populateBrief(data.current);
    populateHourly(todayHourly, data.forecast.forecastday[0]);
    populateHourly(tomorrowHourly, data.forecast.forecastday[1]);
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

let data = await getWeather("Moscow");
populateData(data);
