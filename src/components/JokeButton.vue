<template>
    <div>
        <!-- Printing an error message to the user -->
        <p id="jokeStatus"></p>
        <!-- Using the value of the joke from the store as a local variable -->
        <h1>{{ getJokeFromStore }}</h1>
        <!-- When the button is clicked, the getAPIJoke function is called -->
        <button @click="getAPIJoke">Get Random Joke</button>
    </div>
</template>

<script>
    export default {
        name: "joke-button",
        methods: {
            // Creating a function that calls the function fromthe mutations option in the store and updates the value of the joke in the store to the joke received by the API
            updateJoke: function() {
                this.$store.commit("updateRandomJoke");
            },

            // Creating a function that calls the function from actions option in the store which configures and sends the axios request
            getAPIJoke: function() {
                this.$store.dispatch("requestAPIJoke");
            }
        },
        // Creating a function that returns the value of the joke from the store
        computed: {
            getJokeFromStore: function() {
                return this.$store.state.randomJoke;
            },
        },
    }
</script>

<style scoped>
    
</style>