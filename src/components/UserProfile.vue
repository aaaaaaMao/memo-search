<template>
  <div>
    <img v-bind:src='user.avatar' alt='' class='avatar'>
    <button
      id='logoutBtn'
      @click='login'>登&nbsp;&nbsp;&nbsp;&nbsp;出</button>
  </div>
</template>

<script>

export default {
  name: 'memo-user-profile',
  props: ['user'],
  data: function () {
    return {};
  },
  methods: {
  }
};
</script>

<style scoped>

div {
    text-align: none !important;
}

.avatar {
  height: 85px;
  width: 85px;
  border-radius: 100px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
}

#logoutBtn {
  background-color: #469F87;
  margin: 0px auto;
  width: 40%;
}
</style>
