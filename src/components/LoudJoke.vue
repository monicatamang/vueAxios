<template>
    <div>
        <!-- When the button is clicked, call the loudJoke function -->
        <button @click="makeJokeInAllCaps">Get Loud Joke</button>
    </div>
</template>

<script>
    export default {
        name: "loud-joke",
        methods: {
            // Creating a function that updates the value of the joke in the store to change the joke to all capital letters
            // This function is passing the payload which is joke in all capital letters and committing this change to the store
            makeJokeInAllCaps: function() {

                let jokeFromStore = this.$store.state.randomJoke;

                this.$store.commit("updateRandomJoke", jokeFromStore.toUpperCase());

                // Creating a for-loop that will check whether the joke has spaces between each word by going through each character in the sentence
                for (let i = 0; i < jokeFromStore.length; i++) {

                        // If a character in the joke has an underscore, replace the underscore with a space and update or commit the new value of the joke that's in captial letters to the store
                        // This occurs if the user clicks on the button that turn the joke into snake casing and then the loud joke button
                        // To ensure that the joke is in all caps, we create this conditional
                        if ((jokeFromStore.charAt(i) === "_") || (jokeFromStore.toLowerCase())) {
                            let jokeFromStoreInCaps = jokeFromStore.replaceAll("_", " ").toUpperCase();
                            this.$store.commit("updateRandomJoke", jokeFromStoreInCaps);
                    }
                }
            },
        },
    }
</script>

<style scoped>

</style>