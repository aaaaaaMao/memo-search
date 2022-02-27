import Vue from 'vue';
import Popup from '../Popup.vue';

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  template: '<Popup/>',
  components: { Popup },
  data: {
    message: 1
  }
});
