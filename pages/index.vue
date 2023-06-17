<template>
  <div v-if="isPending == false" class="text-center text-white">Loading...</div>
  <div v-else class="flex justify-center items-center h-[100vh] text-white">
    <div class="h-4/5 w-1/3 bg-gradient rounded-xl">
      <div class="ml-8">
        <h2 class="mt-8 font-bold text-3xl">{{ weather.location.name }}</h2>
        <p class="mt-4">
          {{ $moment(dayForecast[index].date).format("dddd") }}
        </p>
        <div class="flex mt-4">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="w-4 h-4" />
          <p class="ml-2">{{ weather.location.country }}</p>
        </div>
      </div>
      <div class="ml-8 mt-36">
        <font-awesome-icon :icon="selectedIcon(dayForecast[index].day.maxtemp_c)" class="w-12 h-12" />
        <div class="font-bold text-3xl mt-8">
          {{ dayForecast[index].day.maxtemp_c }}
        </div>
        <p class="font-semibold text-2xl mt-4">
          {{ dayForecast[index].day.condition.text }}
        </p>
      </div>
    </div>
    <div class="h-3/5 w-1/3 bg-primary rounded-r-xl">
      <input
        type="text"
        v-model="city"
        class="text-black rounded w-4/5 h-8 mt-2 mb-2 ml-[10%]"
      />
      <div class="flex justify-center">
        <ButtonReuse
          class-name="flex w-4/5 bg-gradient-to-r from-sky-500 to-indigo-500 justify-center rounded pt-2 pb-2"
          @click="search"
        >
          <font-awesome-icon :icon="['fas', 'location-dot']" class="w-4 h-4" />
          Search location
        </ButtonReuse>
      </div>
      <div v-if="_error">
        <p
          class="absolute text-red-700 top-4 right-4 p-4 border-2 border-red-700 bg-white"
        >
          {{ _error }}
        </p>
      </div>
      <div class="w-full flex justify-center">
        <div class="w-4/5 mt-6">
          <div class="flex justify-between">
            <p class="text-[28px] font-bold">PRECIPITATION</p>
            <p class="mt-2">{{ dayForecast[index].day.totalprecip_mm }} %</p>
          </div>
          <div class="flex justify-between">
            <p class="text-[28px] font-bold">HUMIDITY</p>
            <p>{{ dayForecast[index].day.avghumidity }} %</p>
          </div>
          <div class="flex justify-between">
            <p class="text-[28px] font-bold">WIND</p>
            <p>{{ dayForecast[index].day.maxwind_kph }} km/h</p>
          </div>
        </div>
      </div>
      <forecastDay @changeDay="changeData" :day-weather="dayForecast"/>
    </div>
  </div>
</template>
<script>
import forecastDay from "./weatherPage/forecastDay.vue";
import { selectedIcon } from "~/composables/handleIcon.js";
// import { getWeather } from "@@/services/getWeatherData.js";
import axios from "axios";
export default {
  components:{
    forecastDay
  },
  setup() {
    const city = ref();
    const index = ref(0);
    const isPending = ref(false);
    const weather = ref();
    const _error = ref();
    const dayForecast = ref();

    const getApi = async (city) => {
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=c5a097a5b90a4b67904161254230906&q=${city}&days=4`
        );
        weather.value = res.data;
        dayForecast.value = weather.value.forecast.forecastday;
        isPending.value = true;
        console.log(weather.value);
      } catch (error) {
        _error.value = error;
        console.log(error);
        setTimeout(()=>{
        _error.value=null
      },3000)
      }
    };

    onMounted(() => {
      getApi('hanoi');
    });

    const search=async ()=>{
      getApi(city.value)
    }
   
    const changeData = (number) => {
      index.value = number;
    };

    return {
      weather,
      isPending,
      city,
      _error,
      dayForecast,
      index,
      selectedIcon,
      search,
      changeData,
    };
  },
};
</script>
