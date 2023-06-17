import axios from "axios";
const weather = ref();
const _error = ref();
const dayForecast = ref();
async function getApi(city) {
  try {
    // const data = await axios.get(`forecast.json`, {
    //   params: {
    //     key: "c5a097a5b90a4b67904161254230906",
    //     q: "hanoi",
    //     days: 4,
    //   },
    // });
    const data= await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c5a097a5b90a4b67904161254230906&q=hanoi&days=4`)
    weather.value = data.data;
    console.log(weather);
    dayForecast.value = data.data.forecast.forecastday;
  } catch (error) {
    _error.value = error.message;
    console.log(error)
  } finally {
    
  }
}
export function getWeather() {
  return {
    weather,
    getApi,
    _error,
    dayForecast,
  };
}
