<template>
  <div id='mms-favorites'>
    <div v-for='(notepad, index) in notepads'
      :key='notepad.id'
      :notepad='notepad'
      :index='index'>
      <notepad-info :notepad='notepad' :index='index'/>
      <dotted-line v-if='(index + 1) !== notepads.length'/>
    </div>
  </div>
</template>

<script>
import DottedLine from './DottedLine.vue';
import NotepadInfo from './NotepadInfo.vue';

import { listFavorites } from '../api';

export default {
  name: 'mms-favorites',
  components: {
    DottedLine,
    NotepadInfo
  },
  props: ['spelling'],
  data: function () {
    return {
      notepads: []
    };
  },
  created () {
    listFavorites(this.spelling)
      .then(data => {
        this.notepads = data;
      });
  }
};
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
