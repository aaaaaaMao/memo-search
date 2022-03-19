<template>
  <div>
    <div class='option'>
      <span class='option-key'>应用 id:</span>
      <input
        v-model='app_key'
        type='text'
        id='app_key'
        class='option-input'

      />
    </div>
    <div class='option'>
      <span class='option-key'>应用密钥:</span>
      <input v-model='app_secret' type='text' id='app_secret' class='option-input'/>
    </div>
    <div class='option'>
      <button @click='save'>保存</button>
    </div>
  </div>
</template>

<script>
import { getLocalStorage, saveOptions } from './api';

export default {
  name: 'memo-options',
  data: function () {
    return {
      app_key: 'aa',
      app_secret: ''
    };
  },
  methods: {
    save: async function () {
      await saveOptions({
        YOUDAO: {
          APP_KEY: this.app_key,
          APP_SECRET: this.app_secret
        }
      });
    }
  },
  created: async function () {
    const result = await getLocalStorage(['YOUDAO']);
    this.app_key = result.YOUDAO.APP_KEY;
    this.app_secret = result.YOUDAO.APP_SECRET;
  }
};
</script>

<style scoped>
.option {
  margin: 2px;
}

.option-key {
  font-weight: bold;
}
</style>
