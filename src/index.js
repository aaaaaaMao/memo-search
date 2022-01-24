import Vue from 'vue';
import App from './App.vue';

const init = document.createElement('div');
init.id = 'memo-search';
document.getElementsByTagName('html')[0].appendChild(init);

const mainApp = new Vue({
  el: '#memo-search',
  template: '<app :selectedContent="selectedContent" :coord="coord"/>',
  components: { App },
  data: {
    selectedContent: '',
    coord: { x: 0, y: 0 }
  }
});

window.onmouseup = function (event) {
  const selection = window.getSelection();
  const content = selection.toString().trim();
  const srcElement = event.srcElement;

  mainApp.selectedContent = content;

  if (srcElement.id !== 'mms-icon') {
    if (content) {
      mainApp.coord = getCoord({
        x: event.clientX,
        y: event.clientY
      }, {
        x: 10,
        y: 0
      });
    }
  }
};

function getCoord (base, offset) {
  return {
    x: base.x + offset.x + document.documentElement.scrollLeft + document.body.scrollLeft,
    y: base.y + offset.y + document.documentElement.scrollTop + document.body.scrollTop
  };
}
