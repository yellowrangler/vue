// functions outside of createApp are only to be used by functions within createApp
function getRandomValue(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}; 
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'}; 
        },
        mayUseSpecialAttack() {
            return this.currentRound % 5 !== 0;
        }

    },
    methods: {
        attackMonster() {
            this.currentRound += 1;

            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;

            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound += 1;

            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;

            this.attackPlayer();
        }
    }
});

app.mount('#game');