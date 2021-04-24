<template>
  <section id="app">
    <joke-button></joke-button>
    <article>
      <loud-joke></loud-joke>
      <snake-joke></snake-joke>
      <normal-joke></normal-joke>
    </article>
  </section>
</template>

<script>
// Importing the joke button, loud joke, snake joke and normal joke components to the home page
import JokeButton from "./components/JokeButton.vue";
import LoudJoke from "./components/LoudJoke.vue";
import SnakeJoke from "./components/SnakeJoke.vue";
import NormalJoke from "./components/NormalJoke.vue";

// Registering the joke button, loud joke, snake joke and normal joke components
export default {
  name: 'App',
  components: {
    JokeButton,
    LoudJoke,
    SnakeJoke,
    NormalJoke
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

article {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10vh;
}

button {
  cursor: pointer;
}
</style>
