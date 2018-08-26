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
  messages: {test:'hello'},
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
          fields:"conversations{id,participants,updated_time}",
          access_token: accessToken,
        },
        function(response) {
          state.conversations = response.conversations;
          
        }
    );
  },
  getFbConversationLog({ commit, state }, conversationId) {
    const accessToken = state.me.fb.pageToken;
    FB.api(
      `/${conversationId}?fields=messages{id,message,created_time,from}`,
      'GET',
      {
        access_token: accessToken,
      },
      function(response) {
        console.log('messages', response);
        state.messages = response.messages;
      });
  },
};

const getters = {
  getMyUuid: state => state.me.uuid,
  getFriends: state => state.friends,
  getFbPageId: state => state.global.fb.pageId,
  getConversations: state => state.conversations,
  getConversationParticipants: state => state.conversations,
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
