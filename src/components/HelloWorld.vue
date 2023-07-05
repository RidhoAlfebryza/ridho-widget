<template>
  <br>        
    <h1><center>GENERATE RANDOM IMAGE</center> </h1>
    
  <div class="photo-widget">
    <h2>{{ title }}</h2>
    <img :src="photoUrl" :alt="title" />
    <br>
    <button @click="getRandomPhoto">Load New Photo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      photoUrl: '',
    };
  },
  mounted() {
    this.getRandomPhoto();
  },
  methods: {
    async getRandomPhoto() {
      try {
        const apiKey = '38081527-9df5e7cc02a4f3f576f921d26';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=africa&image_type=photo&orientation=horizontal`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomPhoto = data.hits[randomIndex];
        this.title = randomPhoto.tags;
        this.photoUrl = randomPhoto.webformatURL;
      } catch (error) {
        console.error('Error fetching random photo:', error);
      }
    },
  },
};
</script>

<style scoped>
.photo-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242424;
  box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
}
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 10px;
}
.photo-container img {
  max-width: 100%;
  max-height: 100%;
}
</style>