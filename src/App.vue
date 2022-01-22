<template>
  <div id="memo-search" v-if="word.spelling" v-bind:style="coordStyle">
    <img id="mms-icon" 
      src="../images/logo4.png"
      v-if="!showContent && word.spelling" 
      v-on:click="showContent=true"/>  
    <div id="mms-content" v-if="showContent && word.spelling">
      <div id="mms-bar"></div>
      <word-detail v-bind:word="word"/>
    </div>
  </div>
</template>

<script>
import WordDetail from './components/WordDetail.vue'

export default {
  name: 'memo-search',
  components: {
    WordDetail
  },
  props: ['selectedContent', 'coord'],
  data: function() {
    return {
      word: {
        spelling: '',
        phoneticUk: '英 [ʊps]',
        phoneticUs: '美 [ʊpsˌuːps]',
        interpretation: 'int. 哎哟，啊呀（某人摔倒或出了点小差错时的用语）'
      },
      showContent: false,
      coordStyle: {
        top: '0px',
        left: '0px'
      }
    }
  },
  watch: {
    selectedContent: function() {
      if (!this.selectedContent) {
        this.showContent = false
      }
      this.word.spelling = this.selectedContent
    },
    coord: function() {
      if (!this.showContent) {
        this.coordStyle.top = `${this.coord.y}px`
        this.coordStyle.left = `${this.coord.x}px`
      }
    }
  }
}
</script>

<style>
#memo-search {
  position: absolute;
  align-items: flex-start;
  display: flex;
  z-index: 100;
}

#mms-icon {
  width: 40px;
  height: 40px;
}

#mms-content {
  margin-left: 10px;
  border-radius: 5px;
  font-size: 16px;
  background: #469F87;
  min-width: 200px;
  max-width: 400px;
  display: inline-block;
}

#mms-bar {
  height: 25px;
  background: #469F87;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>