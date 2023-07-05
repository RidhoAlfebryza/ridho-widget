<template>
    <div>
    <br>        
    <h1><center>BATU GUNTING KERTAS</center> </h1>
     <div class="widget-border">
        <h2>PILIH DIANTARA YANG ADA DIBAWAH INI</h2>
        <div v-if="!gameOver">
          <p>Pilih tangan Anda:</p>
          
          <button @click="selectHand('batu')">Batu</button>
          <button @click="selectHand('gunting')">Gunting</button>
          <button @click="selectHand('kertas')">Kertas</button>
        </div>
        <div v-if="gameOver">
          <p>Anda memilih: {{ playerHand }}</p>
          <p>Komputer memilih: {{ computerHand }}</p>
          <p>{{ resultMessage }}</p>
          <button @click="restartGame">Mulai Ulang</button>
       </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerHand: '',
        computerHand: '',
        gameOver: false,
        resultMessage: '',
      };
    },
    methods: {
      selectHand(hand) {
        this.playerHand = hand;
        this.computerHand = this.generateComputerHand();
        this.gameOver = true;
        this.resultMessage = this.determineWinner();
      },
      generateComputerHand() {
        const hands = ['batu', 'gunting', 'kertas'];
        const randomIndex = Math.floor(Math.random() * hands.length);
        return hands[randomIndex];
      },
      determineWinner() {
        if (this.playerHand === this.computerHand) {
          return 'Hasilnya seri!';
        } else if (
          (this.playerHand === 'batu' && this.computerHand === 'gunting') ||
          (this.playerHand === 'gunting' && this.computerHand === 'kertas') ||
          (this.playerHand === 'kertas' && this.computerHand === 'batu')
        ) {
          return 'Anda menang!';
        } else {
          return 'Anda kalah!';
        }
      },
      restartGame() {
        this.playerHand = '';
        this.computerHand = '';
        this.gameOver = false;
        this.resultMessage = '';
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
  