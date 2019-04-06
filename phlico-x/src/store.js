// modules
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingData: true
  },

  mutations: {
    changeLoadingData(state, loadingData) {
      state.loadingData = loadingData;
    }, 
  },
});
