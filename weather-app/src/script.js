import "./styles.css"

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

console.log(getCondition("Heavy rain showers"));
