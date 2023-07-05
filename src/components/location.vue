<template> 
    <br>
    <h1><center>LOCATION</center> </h1>


<div>
    <button @click="getLocation">Cari Lokasi</button> <br><br>
    <div v-if="locationData">
        <div class="widget-border">
            <h2>Lokasi Anda:</h2>
            <p>Longitude: {{ locationData.longitude }}</p>
            <p>Latitude: {{ locationData.latitude }}</p>
        </div>
    </div>
  </div>


    
     </template>


<script>
export default {
  data() {
    return {
      locationData: null,
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
      } else {
        console.error('Geolocation tidak didukung oleh browser ini.');
      }
    },
    showPosition(position) {
      this.locationData = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
    },
    showError(error) {
      console.error('Terjadi kesalahan dalam mendapatkan lokasi:', error);
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