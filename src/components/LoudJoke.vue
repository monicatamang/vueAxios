<template>
    <div>
        <!-- When the button is clicked, call the loudJoke function -->
        <button @click="loudJoke">Get Loud Joke</button>
    </div>
</template>

<script>
    export default {
        name: "loud-joke",
        methods: {
            // Creating a function that updates the value of the joke in the store to change the joke to all capital letters
            // This function is passing the payload which is joke in all capital letters and committing this change to the store
            loudJoke: function() {
                this.$store.commit("updateRandomJoke", this.$store.state.randomJoke.toUpperCase());
            },
        },
    }
</script>

<style scoped>

</style>