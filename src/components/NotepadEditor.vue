<template>
  <div class='mms-editor'>
    <div class='notepad-name'>我的收藏</div>
    <div class='active-word'>当前单词: {{ waitToAddContent }}</div>
    <div class='mms-editor-panel'>
      <div class='notepad-container'>
        <textarea class='notepad-container-editor' :value='words'></textarea>
        <div>aaa</div>
      </div>
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
  top: 0;
  right: 0;
  font-size: 12px;
  background: #469F87;
  margin: 2px;
  border-radius: 5px;
  opacity: 1;
  z-index: 9999;
}
.mms-editor-panel {
  background: #FFFFFF;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
  height: 100vh;
}
.notepad-name {
  font-size: 24px;
  font-weight: 600;
  margin: 5px;
  color: #FFFFFF;
}
.notepad-container {
  height: 100%;
  width: 100%;
}
.notepad-container-editor {
  width: 92%;
  height: 90%;
}
.active-word {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px;
  color: #FFFFFF;
}
</style>
