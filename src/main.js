// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

function created() {
  /* eslint-disable */
  window.fbAsyncInit = function () {
    FB.init({
      appId: '266788757017683',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.1',
    });
    FB.api(
      '/602939823441479',
        'GET',
        {"fields":"conversations{id}"},
        function(response) {
          console.log(response);
                // Insert your code here
        }
    );
    FB.getLoginStatus(function(response) {
      console.log(response);
    });
  };

  (function (d, s, id) {
    let js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  /* eslint-enable */
  console.log('hello world');
  const me = {
    uuid: 'createdUuid',
  }; // fb id
  store.commit('setMe', { me });
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created,
});
