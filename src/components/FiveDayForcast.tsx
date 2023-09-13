import { useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import { WeatherContext } from "../WeatherContext";

export default function FiveDayForcast() {
    const { weatherData } = useContext(WeatherContext);

    // Create an array of day names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const specificIndices = [7, 15, 23, 31, 39];

    return (
        <div className="fivedayforecast-container">
            {specificIndices.map((dayIndex, index) => {
                // Get the weather data for the current day
                const weatherDataForDay = weatherData?.list[dayIndex];

                // Calculate the corresponding day index (0-6)
                const dayOfWeekIndex = (new Date().getDay() + index + 1) % 7;

                return (
                        <div className="weather-card" key={index}>
                            <div style={{ fontSize: "x-large" }}>{dayNames[dayOfWeekIndex]}</div>
                            <WeatherIcon weatherCondition={weatherDataForDay?.weather[0].main} />
                            <div style={{ fontSize: "x-large" }}>{weatherDataForDay?.main.temp}°F</div>
                        </div>
                );
            })}
        </div>
    );
}

