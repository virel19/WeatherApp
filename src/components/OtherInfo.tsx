import { useContext } from "react";
import {WeatherContext} from "../WeatherContext";


export default function OtherInfo() {
  const {weatherData} = useContext(WeatherContext);

  return (
    <div className="otherinfo-container">
      <div className="otherinfo-child-container">
      <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/FFFFFF/hygrometer.png" alt="hygrometer"/>
        <div>
          <div className="otherinfo-title">Humidity</div>
          <div style={{ fontSize: "x-large" }}>{weatherData?.list[0].main.humidity ? `${weatherData?.list[0].main.humidity}%` : null}</div>
        </div>
      </div>
      <div className="otherinfo-child-container">
      <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/FFFFFF/atmospheric-pressure.png" alt="atmospheric-pressure"/>
        <div>
          <div className="otherinfo-title">Air Pressure</div>
          <div style={{ fontSize: "x-large" }}>{weatherData?.list[0].main.pressure ? `${weatherData?.list[0].main.pressure} PS` : null}</div>
        </div>
      </div>
      <div className="otherinfo-child-container">
      <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/FFFFFF/windsock.png" alt="windsock"/>
        <div>
          <div className="otherinfo-title">Wind Speed</div>
          <div style={{ fontSize: "x-large" }}>{weatherData?.list[0].wind.speed ? `${weatherData?.list[0].wind.speed} mph` : null}</div>
        </div>
      </div>
    </div>
  )
}
