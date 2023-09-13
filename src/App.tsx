import './App.css'
import OtherInfo from './components/OtherInfo'
import Layout from './components/Layout'
import TodaysForcast from './components/TodaysForcast'
import FiveDayForcast from './components/FiveDayForcast'
import WeatherProvider  from './WeatherContext'

function App() {

  return (
    <>
      <WeatherProvider>
        <Layout>
          <TodaysForcast />
          <OtherInfo />
        </Layout>
        <FiveDayForcast />
      </WeatherProvider>
    </>
  )
}

export default App
