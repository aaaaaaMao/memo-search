<template>
  <div id='mms-word-detail'>
    <span id='mms-spelling'>{{ word.spelling }}</span>
    <span v-if='word.interpretation.length != 0' class='dot' @click='$emit("favorite-word")'></span>
    <dotted-line/>
    <div id='mms-interpretation'>
      <span>{{ word.interpretation }}</span>
      <span v-if='word.interpretation.length == 0 && !isSearchByYoudao' class='prompt' @click='searchWordByyoudao()'>😭 未在单词库中查询到此单词，点击使用有道进行翻译 </span>
      <template v-if='isSearchByYoudao'>
        <span v-for='(it, index) in translation' class='you-translation' :key='index' > {{ it }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import DottedLine from './DottedLine.vue';
import { searchWordByyoudao } from '../api';

export default {
  name: 'mms-word-detail',
  components: {
    DottedLine
  },
  props: ['word'],
  data: function () {
    return {
      translation: [],
      isSearchByYoudao: false
    };
  },
  methods: {
    searchWordByyoudao: function () {
      console.log(this.word.spelling);
      this.isSearchByYoudao = true;
      searchWordByyoudao(this.word.spelling)
        .then(data => {
          this.translation = data.data.translation;
        });
    }
  }
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
  display: inline-block;
}

#mms-interpretation {
  margin-top: 5px;
}

.dot {
  display: inline-block;
  height: 5px;
  width: 5px;
  border: #469F87 3px solid;
  transform: translateY(5px);
  float: right;
}

.prompt {
  cursor: pointer;
}
</style>
