<template>
  <div id='mms-word-detail'>
    <span id='mms-spelling'>{{ word.spelling }}</span>
    <dotted-line/>
    <div id='mms-phonetic-uk' class='mms-phonetic'>
      <span>{{ word.phoneticUk }}</span>
    </div>
    <div id='mms-phonetic-us' class='mms-phonetic'>
      <span>{{ word.phoneticUs }}</span>
    </div>
    <div id='mms-interpretation'>
      <span>{{ word.interpretation }}</span>
    </div>
  </div>
</template>

<script>
import DottedLine from './DottedLine.vue';

export default {
  name: 'mms-word-detail',
  components: {
    DottedLine
  },
  props: ['word']
};
</script>

<style>
#mms-word-detail {
  padding: 5px;
  font-size: 12px;
  background: #FFFFFF;
  margin: 2px;
  border-radius: 5px;
}

#mms-spelling {
  color: #D56635;
  font-size: 16px;
  font-weight: bold;
  display: block;
}

.mms-phonetic {
  margin-top: 2px;
}

#mms-interpretation {
  margin-top: 5px;
}
</style>
