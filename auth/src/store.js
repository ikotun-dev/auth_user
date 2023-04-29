import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: '',
    userId: '',
    lastTask: '',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserId(state, userId) {
        state.userId = userId;
      },
    setLastTask(state, lastTask){
        state.lastTask = lastTask;
    }
  },
  actions: {},
  modules: {},
});

export default store;
