
interface WeatherConditionProps {
    weatherCondition?: string,
}

export default function WeatherIcon({ weatherCondition }: WeatherConditionProps) {

    let iconSrc = "";

    switch (weatherCondition) {
        case "Clouds":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/clouds.png";
            break;
        case "Fog":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/fog-night.png";
            break;
        case "Thunderstrom":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/storm.png";
            break;
        case "Drizzle":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/rain.png";
            break;
        case "Rain":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/rain.png";
            break;
        case "Snow":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/snow.png";
            break;
        case "Mist":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/rain.png";
            break;
        case "Smoke":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/smoke-explosion.png";
            break;
        case "Haze":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/fog-day.png";
            break;
        case "Dust":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/chance-of-storm.png";
            break;
        case "Sand":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/chance-of-storm.png";
            break;
        case "Ash":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/fuji-volcano.png";
            break;
        case "Squail":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/windy-weather.png";
            break;
        case "Tornado":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/tornado.png";
            break;
        case "Clear":
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/sun.png";
            break;
        default:
            iconSrc = "https://img.icons8.com/sf-regular/96/FFFFFF/sun.png";
    }

    return (
        <>
            <img width="96" height="96" src={iconSrc} alt={weatherCondition} />
        </>

    )
}
