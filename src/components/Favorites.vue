<template>
  <div id='mms-favorites'>
    <div v-for='(notepad, index) in notepads'
      :key='notepad.id'
      :notepad='notepad'
      :index='index'>
      <notepad-info
        :notepad='notepad'
        :index='index'
        @favorite-word='onFavoriteWord'/>
      <dotted-line v-if='(index + 1) !== notepads.length'/>
    </div>
  </div>
</template>

<script>
import DottedLine from './DottedLine.vue';
import NotepadInfo from './NotepadInfo.vue';

import { listFavorites, updateWordInNotepad } from '../api';

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
  },
  methods: {
    onFavoriteWord: async function (index) {
      const action = this.notepads[index].is_selected ? 'remove' : 'add';
      await updateWordInNotepad(this.spelling, this.notepads[index].notepad_id, action);
      this.notepads = await listFavorites(this.spelling);
    }
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
