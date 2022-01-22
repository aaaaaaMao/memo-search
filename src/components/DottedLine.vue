<template>
  <div class="mms-dotted-line"></div>
</template>

<script>
export default {
  name: 'mms-dotted-line'
}
</script>

<style scoped>
.mms-dotted-line {
  margin: 5px 0px;
  height: 1px;
  background-image: linear-gradient(to left, #469F87 50%, #ffffff 50%);
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;  
}
</style>