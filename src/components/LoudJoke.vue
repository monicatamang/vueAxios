<template>
    <div>
        <!-- When the button is clicked, the loudJoke function is called -->
        <button @click="makeJokeInAllCaps">Get Loud Joke</button>
    </div>
</template>

<script>
    export default {
        name: "loud-joke",
        methods: {
            // Creating a function that changes the value of the joke in the store to be all capital letters, calling the updateRandomJoke function and passing the joke as argument in all capital letters to the function so that it can be updated to the store
            // To ensure the joke is updated to the correct format, i.e., in all capital letters, if the joke was previously updated to snake casing or normal text, the underscores will be removed in the joke and all letters will be set to upper case
            makeJokeInAllCaps: function() {
                let jokeFromStore = this.$store.state.randomJoke;
                let jokeFromStoreInCaps = jokeFromStore.replaceAll("_", " ").toUpperCase();
                this.$store.commit("updateRandomJoke", jokeFromStoreInCaps);
            },
        },
    }
</script>

<style scoped>
    button {
        padding: 3vh;
        width: 15vw;
    }
</style>