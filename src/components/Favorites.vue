<template>
  <div id="mms-favorites">
    <div v-for="(notepad, index) in notepads"
      :key="notepad.id"
      :notepad="notepad"
      :index="index">
      <notepad-info :notepad="notepad" :index="index"/>
      <dotted-line v-if="(index + 1) !== notepads.length"/>  
    </div>
  </div>
</template>

<script>
import DottedLine from './DottedLine.vue'
import NotepadInfo from './NotepadInfo.vue'

export default {
  name: 'mms-favorites',
  components: {
    DottedLine,
    NotepadInfo
  },
  data: function() {
    return {
      notepads: [{
        id: 1,
        title: '我的收藏 1',
        is_private: true,
        is_selected: true,
      }, {
        id: 2,
        title: '我的收藏 2',
        is_private: false,
        is_selected: false,        
      }]
    }
  }
}
</script>

<style>
#mms-favorites {
  padding: 5px;
  font-size: 12px;
  background: #FFFFFF;
  margin: 2px;
  border-radius: 5px;
}
</style>