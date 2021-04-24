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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
  max-width: 100vw;
}

section {
  display: grid;
  place-items: center;
  row-gap: 50px;
}

article {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
}

button {
  border-radius: 5px;
  border: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: lemonchiffon;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  margin-top: 10vh;
  font-size: 1rem;
  box-shadow: 1px 1px 5px lightgrey;
  cursor: pointer;
}

button:active {
  box-shadow: none;
}

button:focus {
  outline: none;
}
</style>
