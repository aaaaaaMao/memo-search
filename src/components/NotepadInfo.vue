<template>
  <div class='mms-notepad-info'>
    <div>
      <span class='mms-notepad-title'>{{ notepad.title }}</span>
      <div class='mms-notepad-attr'>
        <span>{{ index + 1 }} - </span>
        <span>{{ notepad.is_private ? '私有' : '公开' }} ({{ notepad.voc_count }})</span>
      </div>
    </div>
    <div class='mms-notepad-selected'
      @click='$emit("favorite-word", index)'>
      {{ notepad.is_selected ? '⚈' : '⚆' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'mms-notepad-info',
  props: ['notepad', 'index']
};
</script>

<style>
.mms-notepad-info {
  display: flex;
  justify-content: space-between;
}

.mms-notepad-title {
  font-size: 14px;
}

.mms-notepad-attr {
  font-size: 12px;
  color: #5E5E5E;
}

.mms-notepad-selected {
  font-size: 20px;
  color: #469F87;
  margin-left: 50px;
}

.mms-notepad-selected:hover {
  cursor: default;
}
</style>
