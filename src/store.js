/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  chats: {},
  chatMessages: {},
  currentChat: '',
  friends: [],
  me: {
    uuid: 'default_uuid',
  },
};

const mutations = {
  setMe(state, payload) {
    state.me = payload.me;
  },
};
const actions = {};
const getters = {
  getMyUuid: state => state.me.uuid,
  getFriends: state => state.friends,
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
