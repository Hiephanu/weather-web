<template>
     <div class="flex justify-center w-full mt-4">
        <div class="grid w-4/5 gap-2 grid-cols-4 justify-between text-center">
          <div v-for="(day, index) in dayForecast" :key="index">
            <div class=" bg-daycolor hover:bg-white cursor-pointer hover:text-primary h-32 rounded"  @click="changeDay(index)">
              <div :class="[ selectedDay === index ? 'bg-white text-primary h-full rounded':  '']">
                <p class="mt-4 pt-4">{{ $moment(day.date).format("dddd") }}</p>
                <p>{{ day.day.maxtemp_c }} ° C</p>
                <font-awesome-icon :icon="selectedIcon(day.day.maxtemp_c)" class="w-12 h-12 m-auto mt-2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import {selectedIcon} from '@@/composables/handleIcon.js'
import { getWeather } from "@@/services/getWeatherData.js";
export default{
    props:{
      dayWeather:{
        type:Array,
        required:true
      }
    },
    setup(props,{emit}){
    const selectedDay=ref(0)
    const dayForecast=ref(props.dayWeather)

    watch(
      () => props.dayWeather,
      (newDayWeather) => {
        dayForecast.value = newDayWeather;
      }
    );
    
    const changeDay=(index)=>{
      selectedDay.value=index
      emit("changeDay",index)
    }

    return {
      dayForecast,
      selectedDay,
      selectedIcon,
      changeDay
      }
    }
}
</script>