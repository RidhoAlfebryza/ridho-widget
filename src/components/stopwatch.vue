<template>
    <br>        
    <h1><center>STOPWATCH</center> </h1>
    <div class="widget-border">
      <div class="stopwatch">
        <div class="display">{{ formatTime() }}</div>
        <div class="controls">
          <button @click="start">Start</button>
          <button @click="stop">Stop</button>
          <button @click="reset">Reset</button>
        </div>
    </div>
</div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          isRunning: false,
          startTime: null,
          elapsedTime: 0
        };
      },
      methods: {
        start() {
          if (!this.isRunning) {
            this.startTime = Date.now() - this.elapsedTime;
            this.isRunning = true;
            this.timer = setInterval(() => {
              this.elapsedTime = Date.now() - this.startTime;
            }, 10);
          }
        },
        stop() {
          if (this.isRunning) {
            clearInterval(this.timer);
            this.isRunning = false;
          }
        },
        reset() {
          this.stop();
          this.elapsedTime = 0;
        },
        formatTime() {
          const minutes = Math.floor(this.elapsedTime / 60000);
          const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
          const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
    
          return `${this.padTime(minutes)}:${this.padTime(seconds)}:${this.padTime(
            milliseconds
          )}`;
        },
        padTime(time) {
          return time.toString().padStart(2, "0");
        }
      }
    };
    </script>
    
    <style>
    .stopwatch {
      text-align: center;
      font-family: Arial, sans-serif;
    }
    
    .display {
      font-size: 2em;
      margin-bottom: 1em;
    }
    
    .controls {
      margin-top: 1em;
    }
    
    button {
      margin-right: 0.5em;
    }

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