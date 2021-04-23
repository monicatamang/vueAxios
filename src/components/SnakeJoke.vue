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
            // Creating a function that will be called when the button is clicked and will change the joke into snake casing
            makeJokeIntoSnakeCase: function() {
                
                // Setting the value of the joke from the store as a variable
                let jokeFromStore = this.$store.state.randomJoke;

                // Creating a for-loop that will check whether the joke has spaces between each word by going through each character in the sentence
                for (let i = 0; i < jokeFromStore.length; i++) {

                        // If a character in the joke has a space, replace the space with an underscore and update or commit the new value of the joke that's in snake case to the store
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