<template>
  <div>
    <user-profile v-if='!!user' :user='user'></user-profile>
    <login v-else v-on:login-event='getUserProfile'></login>
  </div>
</template>

<script>
import { getLocalStorage } from './api';
import Login from './components/Login.vue';
import UserProfile from './components/UserProfile.vue';

export default {
  components: { UserProfile, Login },
  name: 'memo-popup',
  data: function () {
    return {
      user: null
    };
  },
  methods: {
    getUserProfile: async function () {
      const result = await getLocalStorage(['user']);
      this.user = result.user;
    }
  },
  created: async function () {
    await this.getUserProfile();
  }
};
</script>
