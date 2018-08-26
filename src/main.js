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
    const appId = store.state.global.fb.appId;
    const pageId = store.state.global.fb.pageId;
    console.log(`appId: ${appId}, pageId: ${pageId}`);
    FB.init({
      appId,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.1',
    });
    FB.getLoginStatus(function(response) {
      
      FB.login(function(response) {
        console.log(response);
        if (response.authResponse) {
          FB.api('/me', function(meResp) {
            console.log(meResp);
            console.log('Good to see you, ' + meResp.name + '.');
            const userToken = response.authResponse.accessToken;
            FB.api(`${pageId}?fields=access_token&access_token=${userToken}`, function(pageResp) {
              const pageToken = pageResp.access_token;
              store.commit('setMe', { 
                me: {
                  fb: {
                    userToken,
                    pageToken,
                  }
                },
              });
              store.dispatch('getFbConversationList');
              store.dispatch('getFbConversationLog', 't_10156437529597570');
            });
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {
        scope: 'public_profile,email,manage_pages,pages_show_list,read_page_mailboxes', 
        return_scopes: true
      });
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
