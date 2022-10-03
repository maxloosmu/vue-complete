// import { rowspanfirstcell } from './test.js';

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      listOfRounds: [],
      winner: null,
      logMessages: [],
      table: {},
    };
  },
  computed: {
    printCurrentRound() {
      const thisRound = this.currentRound;
      return thisRound;
    },
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // A draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Player lost
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // A draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Monster lost
        this.winner = 'player';
      }
    },
  },
  methods: {
    calculateRound(i) {
      return Math.floor(i/2) + 1;
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.listOfRounds = [];
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      this.listOfRounds.push(this.currentRound);
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
      this.fixLogTable();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
      this.fixLogTable();
    },
    specialAttackMonster() {
      this.currentRound++;
      this.listOfRounds.push(this.currentRound);
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
      this.fixLogTable();
    },
    healPlayer() {
      this.currentRound++;
      this.listOfRounds.push(this.currentRound);
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
      this.fixLogTable();
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    },
    fixLogTable() {
      // let table = this.$ref.logTable;
      // console.log(table);
      // let headerCell = null;
      // for (let row of table.rows) {
      //   let firstCell = row.cells[0];
      //   if (headerCell === null || firstCell.innerText !== headerCell.innerText) {
      //     headerCell = firstCell;
      //   } else {
      //     headerCell.rowSpan++;
      //     firstCell.remove();
      //   }
      // }
    }
  },
  mounted() {
    this.table = this.$refs.logTable;
  },
  updated() {
    // rowspanfirstcell();
    table = this.table;
    console.log(table);
    let headerCell = null;
    for (let row of table.rows) {
      let firstCell = row.cells[0];
      if (headerCell === null || firstCell.innerText !== headerCell.innerText) {
        headerCell = firstCell;
      } else {
        headerCell.rowSpan++;
        firstCell.remove();
      }
    }
  }
});

app.mount('#game');


