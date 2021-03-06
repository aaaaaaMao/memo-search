
import Vue from 'vue';
import OptionsPage from '../OptionsPage.vue';

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  template: '<OptionsPage/>',
  components: { OptionsPage },
  data: {}
});

// eslint-disable-next-line no-undef
chrome.storage.local.get({
  HOST: '',
  TOKEN: '',
  SEARCH_WORD_API: '',
  LIST_FAVORITES_API: '',
  ADD_WORD_TO_NOTEPAD_API: '',
  REMOVE_WORD_FROM_NOTEPAD_API: ''
}, data => {
  for (const key in data) {
    document.getElementById(key.toLowerCase()).value = data[key];
  }
});
