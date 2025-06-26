<script setup>
const props = defineProps(['weather'])
console.log(props.weather)
</script>

<template>
  <div class="error" v-if="weather?.error">{{ weather.error }}</div>
  <div class="card" v-else-if="weather">
    <h2 class="city">{{ weather.city }}</h2>
    <p class="desc">{{ weather.description }}</p>
    <img :src="`https://openweathermap.org/img/wn/${weather.icon}@2x.png`" class="icon" />
    <div class="info">
      <div>
        <span class="small">Temperature</span>
        <span>{{ weather.temp }} °C</span>
      </div>
      <div>
        <span class="small">Humidity</span>
        <span>{{ weather.humidity }} %</span>
      </div>
      <div>
        <span class="small">Wind Speed</span>
        <span>{{ weather.windspeed }} m/s</span>
      </div>
      <div>
        <span class="small">Wind Direction</span>
        <span>{{ weather.winddeg }}</span>
      </div>
    </div>
    <!-- {{ weather }} -->
  </div>
  <div class="welcome" v-else>Please enter your city</div>
</template>

<style scoped>
.icon {
  width: 80px;
  height: 80px;
  margin: 10px;
  display: block;
}
.card {
  margin-top: 30px;
  background-color: #fff;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.city {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #222;
}

.desc {
  font-size: 16px;
  margin-bottom: 16px;
  color: #555;
  text-transform: capitalize;
}
.info div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 15px;
}

.small {
  font-weight: 500;
  color: #333;
}

.error {
  text-align: center;
  color: #cd5c5c;
  font-size: 24px;
}

.welcome {
  font-size: 24px;
  text-align: center;
}
</style>
