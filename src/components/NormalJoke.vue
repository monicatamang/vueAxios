<template>
    <div>
        <button @click="makeJokeInNormalText">Get Normal Joke</button>
    </div>
</template>

<script>
    export default {
        name: "normal-joke",
        methods: {
            makeJokeInNormalText: function() {

                let jokeFromStore = this.$store.state.randomJoke;

                for (let i = 0; i < jokeFromStore.length; i++) {
                    if ((jokeFromStore.charAt(i) === "_") || (jokeFromStore.charAt(i).toUpperCase())) {
                        let jokeFromStoreInNormalText = jokeFromStore.replaceAll("_", " ").toLowerCase();
                        this.$store.commit("updateRandomJoke", jokeFromStoreInNormalText);
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>