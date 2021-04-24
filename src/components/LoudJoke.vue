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
            // Creating a function that changes the value of the joke in the store to be all caps and calling the function in the mutations option from the store and passes the joke in all capital letters as an argument so that it can be updated to the store
            makeJokeInAllCaps: function() {
                let jokeFromStore = this.$store.state.randomJoke;
                let jokeFromStoreInCaps = jokeFromStore.replaceAll("_", " ").toUpperCase();
                this.$store.commit("updateRandomJoke", jokeFromStoreInCaps);
            },
        },
    }
</script>

<style scoped>

</style>