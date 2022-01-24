<template>
  <div class='mms-editor'>
    <div class='notepad-name'>我的收藏</div>
    <div class='active-word'>当前单词:{{ waitToAddContent }}</div>
    <div class='notepad-container'>
      <textarea class='notepad-container-editor' :value='words'></textarea>
    </div>
  </div>
</template>

<script>
import { words } from '../mock';
export default {
  name: 'mms-notepad-editor',
  props: ['selectedContent'],
  data: function () {
    return {
      words: words.join('\n')
    };
  },
  created: function () {
    this.waitToAddContent = JSON.parse(JSON.stringify(this.selectedContent));
  }

};
</script>

<style scoped>
.mms-editor {
  position: fixed;
  width: 30vw;
  height: 100vh;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
  background: #FFFFFF;
  margin: 2px;
  border-radius: 5px;
  opacity: 1;
  z-index: 9999;
}
.notepad-name {
  font-size: 24px;
  font-weight: 600;
}
.notepad-container {
  margin-top: 30px;
  height: 100%;
  width: 100%;
}
.notepad-container-editor {
  width: 100%;
  height: 90%;
}
.active-word {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
