/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  global: {
    fb: {
      appId:'266788757017683',
      pageId:'602939823441479',
    }
  },
  chats: {},
  chatMessages: {},
  currentChat: '',
  conversations: {},
  friends: [],
  me: {
    uuid: 'default_uuid',
    fb: {
      userToken: '',
      pageToken: '',
    },
  },
};

const mutations = {
  setMe(state, payload) {
    state.me = payload.me;
    console.log(state.me);
  },
};
const actions = {
  getFbConversationList({ commit, state }) {
    const savedConversations = [...state.conversations];
    const pageId = state.global.fb.pageId;
    const accessToken = state.me.fb.pageToken;
    FB.api(
      `/${pageId}`,
        'GET',
        {
          "fields":"conversations{id,participants,updated_time}",
          access_token: accessToken,
        },
        function(response) {
          state.conversations = response.conversations;
        }
    );
  },
};
const getters = {
  getMyUuid: state => state.me.uuid,
  getFriends: state => state.friends,
  getConversations: state => state.conversations,
  getConversationParticipants: state => state.conversations,
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
