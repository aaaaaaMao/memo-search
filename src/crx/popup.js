import Vue from 'vue';
import PopUp from '../PopUp.vue';

const app = new Vue({
  el: '#app',
  template: '<PopUp />',
  components: { PopUp },
  data: {
    message: 1
  }
});
