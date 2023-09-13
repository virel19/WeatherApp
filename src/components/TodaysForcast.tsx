/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from "react";
import { WeatherContext } from "../WeatherContext";
import WeatherIcon from "./WeatherIcon";

export default function TodaysForcast() {
  const [showInput, setShowInput] = useState(false);
  const [location, setLocation] = useState<string>('San Francisco');
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  const [error, setError] = useState(false);

  const fetchWeatherData = useCallback(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${import.meta.env.VITE_APP_KEY}&units=imperial`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Location not found');
      })
      .then((apiData) => {
        setWeatherData(apiData);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  }, [location]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleGetLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchWeatherData();
    }
  };

  return (
    <>
      <div className="todaysforcast-container">
        <WeatherIcon weatherCondition={weatherData?.list[0].weather[0].main} />
        <div>
          <div>
            <div style={{ fontSize: "xx-large", fontWeight: "300" }}>{weatherData?.list[0].weather[0].main}</div>
            <div style={{ fontSize: "large", fontWeight: "300" }}>{weatherData?.city.name}, {weatherData?.city.country}</div>
          </div>
          <div style={{ fontSize: "5rem", fontWeight: "500", marginTop: "20px" }}>{weatherData?.list[0].main.temp ? `${weatherData.list[0].main.temp}°F` : null}</div>
          <div className="changelocation">
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/marker.png" alt="marker" />
            {showInput ? (
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  type="text"
                  placeholder="Enter a city"
                  className="input-search"
                  style={{ color: "white" }}
                  onChange={handleGetLocation}
                  onKeyDown={handleKeyDown}
                />
                {error && <div className="error">Location not found</div>}
              </div>
            ) : (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setShowInput(true)}
              >
                Change location
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
