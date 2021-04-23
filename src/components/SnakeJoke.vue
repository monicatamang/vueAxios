<template>
    <div>
        <!-- When the button is clicked, call this function that will change the joke into snake casing -->
        <button @click="makeJokeIntoSnakeCase">Get Snake Joke</button>
    </div>
</template>

<script>
    export default {
        name: "snake-joke",
        methods: {

            makeJokeIntoSnakeCase: function() {
                let jokeFromStore = this.$store.state.randomJoke.toLowerCase();

                for (let i = 0; i < jokeFromStore.length; i++) {

                    if (jokeFromStore.charAt(i) === " ") {
                        let jokeFromStoreInSnakeCase = jokeFromStore.replaceAll(" ", "_");
                        this.$store.commit("updateRandomJoke", jokeFromStoreInSnakeCase);
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>