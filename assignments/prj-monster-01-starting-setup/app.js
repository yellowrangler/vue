// functions outside of createApp are only to be used by functions within createApp
function getRandomValue(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: "0%"}
            }
            return {width: this.monsterHealth + '%'}; 
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: "0%"};
            }
            return {width: this.playerHealth + '%'}; 
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }

    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // a draw
                this.winner = 'draw';
            }
            else if (value <= 0) {
                // player dies
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // a draw
                this.winner = 'draw';
            }
            else if (value <= 0) {
                // monster dies
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound += 1;

            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;

            this.addLogMessage('player', 'attack', attackValue);

            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;

            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound += 1;

            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;

            this.addLogMessage('player', 'special-attack', attackValue);

            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound += 1;

            const healthValue = getRandomValue(8, 20);
            if (this.playerHealth + healthValue > 100) {
                this.playerHealth = 100;
            }
            else {
                this.playerHealth += healthValue;
            }

            this.addLogMessage('player', 'heal', healthValue);

            this.attackPlayer();
        },
        restart() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';

            // this.addLogMessage('player', 'surrender', '');
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            });
        }
    }
});

app.mount('#game');