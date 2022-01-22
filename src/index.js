import Vue from 'vue'
import App from './App.vue'

const init = document.createElement('div')
init.id = 'memo-search'
document.body.appendChild(init)

const mainApp = new Vue({
  el: '#memo-search',
  template: '<app v-bind:selectedContent="selectedContent"/>',
  components: { App },
  data: {
    selectedContent: ''
  }
})

const memoSearchApp = document.getElementById('memo-search')

window.onmouseup = function(event) {
  const selection = window.getSelection();
  const content = selection.toString().trim()
  const srcElement = event.srcElement

  mainApp.selectedContent = content

  if (srcElement.id !== 'mms-icon') {
    if (content) {
      const coord = getCoord({
          x: event.clientX,
          y: event.clientY
      }, {
          x: 10,
          y: 0
      })

      memoSearchApp.style.top = `${coord.y}px`
      memoSearchApp.style.left = `${coord.x}px`
      memoSearchApp.style.display = 'flex'
      // document.getElementById('mms-spelling').innerHTML = content
    } else {
      memoSearchApp.style.display = 'none'
    }
  }
}

function getCoord(base, offset) {
  return {
    x: base.x + offset.x + document.documentElement.scrollLeft + document.body.scrollLeft,
    y: base.y + offset.y + document.documentElement.scrollTop + document.body.scrollTop
  }
}