<template>
  <div>
    <div id='memo-search' v-if='(word.spelling || focusContent) && !isEnterEditor' v-bind:style='coordStyle'>
      <img id='mms-icon'
           src='../images/logo4.png'
           v-if='!showContent && !focusContent && word.spelling'
           v-on:click='searchWord'/>
      <div id='mms-content'
           @mouseover='focusContent=true'
           @mouseleave='focusContent=false'
           v-if='showContent || focusContent'>
        <div id='mms-bar'>
          <img id='mms-favorite'
              src='../images/star.256x256.png'
              v-on:click.prevent='favoriteWord'
              v-bind:style='favIconStyle'/>

          <span id='mms-create-notepad' @click='enterEditor'>
          + 新建云词本
          </span>
        </div>
        <word-detail v-if='!showFavorite' v-bind:word='word'/>
        <favorites v-else :spelling='word.spelling'/>
      </div>
    </div>
    <div v-if='isEnterEditor'>
      <div class='mask' @click='isEnterEditor=false;focusContent=false'></div>
      <notepad-editor :selected-content='word.spelling'></notepad-editor>
    </div>
  </div>

</template>

<script>
import WordDetail from './components/WordDetail.vue';
import Favorites from './components/Favorites.vue';
import NotepadEditor from './components/NotepadEditor.vue';

import { searchWord } from './api';

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
      isEnterEditor: false
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
      searchWord(this.word.spelling)
        .then(data => {
          this.word.spelling = data.spelling;
          this.word.phoneticUk = data.phoneticUk;
          this.word.phoneticUs = data.phoneticUs;
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

#mms-favorite {
  width: 18px;
  height: 18px;
  margin: auto 7px;
}

#mms-create-notepad {
  font-size: 14px;
  margin-right: 7px;
  color: #FFFFFF;
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9000;
  background-color: rgba(0,0,0,.4);
  opacity: 1;
}
</style>
