<template>
    <div>
        <p id="jokeStatus"></p>
        <!-- Using the value of the joke from the store as a local variable -->
        <h1>{{ getJokeFromStore }}</h1>
        <!-- When the button is clicked, the getAPIJoke is called and an axios request is sent -->
        <button @click="getAPIJoke">Get Random Joke</button>
    </div>
</template>

<script>
    export default {
        name: "joke-button",
        methods: {
            // Calling the function that updates the value of the undefined joke in the store
            updateJoke: function() {
                this.$store.commit("updateRandomJoke");
            },

            // Calling the function that configures the axios request to get the joke
            getAPIJoke: function() {
                this.$store.dispatch("requestAPIJoke");
            }
        },
        // Getting the value of the joke from the store
        computed: {
            getJokeFromStore: function() {
                return this.$store.state.randomJoke;
            },
        },
    }
</script>

<style scoped>
    
</style>