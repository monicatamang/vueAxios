import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Intializing an empty string as a variable
    randomJoke: "",
  },
  
  mutations: {
    // Creating function that receives the joke from the API and updates the value of the randomJoke to be the joke
    updateRandomJoke: function(state, data) {
      state.randomJoke = data;
    }
  },

  actions: {
    // Creating a function that configures a GET request to the API and receives the random joke variable as an arguement
    requestAPIJoke: function(context) {
      // Configuring the axios request with the url and type
      axios.request({
        url: `https://geek-jokes.sameerkumar.website/api?format=json`,
        method: `GET`
      }).then((res) => {
        // If the network is done and there are no errors, the success function is called and will call the updateRandomJoke function and pass the returned API data, the joke, to that function
        context.commit("updateRandomJoke", res.data.joke);
      }).catch((err) => {
        // If the network is done but the page errors, the failure function is called and an error message will be printed to the user
        document.getElementById("jokeStatus").innerText = `${err}. Please try again.`;
      });
    },
  },

  getters: {

  }
})
