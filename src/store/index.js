import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomJoke: ""
  },
  
  mutations: {
    updateRandomJoke: function(state, data) {
      state.randomJoke = data;
    },
  },

  actions: {
    requestAPIJoke: function(context) {
      axios.request({
        url: `https://geek-jokes.sameerkumar.website/api?format=json`,
        method: `GET`
      }).then((res) => {
        context.commit("updateRandomJoke", res.data.joke);
      }).catch((err) => {
        console.log(err);
        document.getElementById("jokeStatus").innerText= `Sorry something went wrong. Please try again.`;
      });
    },
  },

  getters: {
    makeJokeAllCaps: function(state) {
      return state.joke.toUpperCase();
    },
  }
})
