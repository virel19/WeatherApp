import { createContext, useState, ReactNode } from "react";

export type WeatherData = {
  city: {
    name: string;
    country: string;
  }

  list: [
    index: {
      main: {
        temp: number,
        humidity: number,
        pressure: number,
      }
      weather: [
        index: {
          main: string,
        }
      ]
      wind: {
        speed: number,
      }
    }
  ]
}

export interface WeatherContextType {
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData | null) => void;
}

export interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  setWeatherData: () => {},
});

export default function WeatherProvider({ children }: WeatherProviderProps) {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}