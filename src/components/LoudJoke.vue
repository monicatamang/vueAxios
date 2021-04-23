<template>
    <div>
        <button @click="getloudJoke">Get Loud Joke</button>
    </div>
</template>

<script>
    export default {
        name: "loud-joke",

        methods: {
            getLoudJoke: function() {
                this.loudJoke();
            }
        },
        
        computed: {
            loudJoke: function() {
                return this.$store.getters.makeJokeAllCaps;
            }
        },
    }
</script>

<style scoped>

</style>