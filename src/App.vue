<template>
  <div>
    <meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests'>
    <div v-if='(word.spelling || focusContent) && !isEnterEditor' id='memo-search' v-bind:style='coordStyle'>
      <img
          v-if='!showContent && !focusContent && word.spelling'
          id='mms-icon'
          src='../images/logo4.png'
          v-on:click='searchWord'/>
      <div
          v-if='showContent || focusContent'
          id='mms-content'
          @mouseover='focusContent=true'
          @mouseleave='focusContent=false'>
        <div id='mms-bar'>
            <img src='../images/aviator.jpg' class='aviator'>
            <span class='add-book-list' @click='enterEditor()'>新建词本 ➕</span>
        </div>
        <word-detail v-if='!showFavorite' v-bind:word='word' v-on:favorite-word='favoriteWord()'/>
        <favorites v-else :spelling='word.spelling'/>
      </div>
    </div>
    <div v-if='isEnterEditor'>
      <div class='mask' @click='isEnterEditor=false;focusContent=false'></div>
      <notepad-editor :selected-content='word.spelling'></notepad-editor>
    </div>
  </div>

</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.js"></script>
<script>
import WordDetail from './components/WordDetail.vue';
import Favorites from './components/Favorites.vue';
import NotepadEditor from './components/NotepadEditor.vue';

import { searchWordByMaimemo, searchWordByyoudao } from './api';

export default {
  name: 'memo-search',
  components: {
    NotepadEditor,
    WordDetail,
    Favorites
  },
  props: ['selectedContent', 'coord'],
  data: function () {
    return {
      word: {
        spelling: '',
        phoneticUk: '',
        phoneticUs: '',
        interpretation: ''
      },
      coordStyle: {
        top: '0px',
        left: '0px'
      },
      favIconStyle: {
        color: '#FFFFFF'
      },
      showContent: false,
      showFavorite: false,
      focusContent: false,
      isEnterEditor: false,
    };
  },
  watch: {
    selectedContent: function () {
      if (!this.focusContent) {
        if (this.selectedContent !== this.word.spelling) {
          this.showFavorite = false;
        }
        this.word.spelling = this.selectedContent;
        this.word.phoneticUk = '';
        this.word.phoneticUs = '';
        this.word.interpretation = '';
        if (!this.selectedContent) {
          this.showContent = false;
          this.showFavorite = false;
        }
      }
    },
    coord: function () {
      if (!this.focusContent) {
        this.coordStyle.top = `${this.coord.y}px`;
        this.coordStyle.left = `${this.coord.x}px`;
      }
    }
  },
  created () {
    document.body.addEventListener('click', () => {
      if (!this.focusContent && this.showContent) {
        this.showContent = false;
        this.word.spelling = '';
      }
    });
  },
  methods: {
    favoriteWord: function () {
      this.showFavorite = !this.showFavorite;
    },
    enterEditor () {
      this.isEnterEditor = true;
    },
    searchWord () {
      this.showContent = true;
      searchWordByMaimemo(this.word.spelling)
        .then(data => {
          this.word.interpretation = data.interpretation;
        });
    }
  }
};
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
  display: flex;
  justify-content: space-between;
}

.add-book-list {
  display: inline-block;
  height: 25px;
  line-height: 25px;
  color: #FFFFFF;
  font-size: 12px;
  cursor: pointer;
}

#mms-create-notepad > img  {
  display: inline;
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9000;
  background-color: rgba(0, 0, 0, .4);
  opacity: 1;
}

.aviator {
  height: 20px;
  width: 20px;
  border-radius: 20px;
  overflow: hidden;
  transform: translate(5px,2px);
  cursor: pointer;
}
</style>
