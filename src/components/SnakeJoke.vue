<template>
    <div>
        <!-- When the button is clicked, the makeJokeIntoSnakeCase is called -->
        <button @click="makeJokeIntoSnakeCase">Get Snake Joke</button>
    </div>
</template>

<script>
    export default {
        name: "snake-joke",
        methods: {
            // Creating a function that capitalizes the first letter of the joke and calls the function in the mutation options from the store and passes the modified value of the joke as an argument so that it can be updated to the store
            capitalizeFirstLetter: function(lowerCaseJoke) {
                let capitalLetter = lowerCaseJoke.charAt(0).toUpperCase();
                let lowerCaseLetter = lowerCaseJoke.charAt(0);
                let capitalizedSnakeJoke = lowerCaseJoke.replace(lowerCaseLetter, capitalLetter);
                this.$store.commit("updateRandomJoke", capitalizedSnakeJoke);
            },

            // Creating a function that changes the value of the joke in the store to be lower case letter and snake casing and calling the function to change the first letter in the joke to be capitalized
            makeJokeIntoSnakeCase: function() {
                let jokeFromStore = this.$store.state.randomJoke;
                let jokeFromStoreInSnakeCase = jokeFromStore.replaceAll(" ", "_").toLowerCase();
                this.capitalizeFirstLetter(jokeFromStoreInSnakeCase);
            }
        },
    }
</script>

<style scoped>

</style>