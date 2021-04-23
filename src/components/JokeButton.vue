<template>
    <div>
        <p id="jokeStatus"></p>
        <h1>{{ joke }}</h1>
        <button @click="getRandomJoke">Get Random Joke</button>
    </div>
</template>

<script>
    export default {
        name: "joke-button",
        methods: {
            updateJoke: function() {
                this.$store.commit("updateRandomJoke");
            },

            getRandomJoke: function() {
                this.$store.dispatch("requestAPIJoke");
            }
        },
        computed: {
            joke: function() {
                return this.$store.state.randomJoke;
            }
        },
    }
</script>

<style scoped>
    
</style>