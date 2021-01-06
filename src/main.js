//jshint esversion:6

import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import {store} from './store.js';

Vue.use(VueResource);

Vue.http.options.root = 'https://qrtag.net/api/';


new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
});
