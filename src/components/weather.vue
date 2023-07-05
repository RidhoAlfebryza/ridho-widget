<template> 
    <br>
    <h1><center>WEATHER</center> </h1>
    
  <div>
    <div class="widget-border">
        <form @submit.prevent="searchWeather">
        <input type="text" v-model="location" placeholder="Masukkan tempat"><br><br>
        <button type="submit">Cek Suhu Kota Anda Hari Ini</button>
        </form>
        <div v-if="weatherData">
        <h2>{{ weatherData.location }}</h2>
        <p>Temperature : {{ weatherData.temperature }}°C</p>
        <p>Weather : {{ weatherData.description }}</p>
        </div>
    </div>
  </div>

  </template>


<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null,
    };
  },
  methods: {
    async searchWeather() {
      const apiKey = 'd9cec9d77b0545ac936102418230507'; //API KEY
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.location}`; //URL API

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.weatherData = {
          location: data.location.name,
          temperature: data.current.temp_c,
          description: data.current.condition.text,
        };
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    },
  },
};
</script>

<style>
.widget-border {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #242424;
    box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
}
</style>
  