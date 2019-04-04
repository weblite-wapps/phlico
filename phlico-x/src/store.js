// modules
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },

  mutations: {
    changeLoading(state, loading) {
      state.loading = loading;
    }, 
  },
});
