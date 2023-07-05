<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="nav" class="navbar">
    <ul>
      <li><router-link to="/HelloWorld">random image</router-link></li>
      <li><router-link to="/location">location</router-link></li>
      <li><router-link to="/stopwatch">stopwatch</router-link></li>
      <li><router-link to="/game">game</router-link></li>
      <li><router-link to="/weather">weather</router-link></li>
    </ul>
  </div>
  <router-view />
</template>

