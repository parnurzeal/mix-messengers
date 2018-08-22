import Vue from 'vue';
import Router from 'vue-router';
import ChatContainer from '@/components/ChatContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatContainer',
      component: ChatContainer,
    },
  ],
});
