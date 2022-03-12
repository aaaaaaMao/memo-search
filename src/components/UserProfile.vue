<template>
  <div>
    <div id='bar'></div>
    <div id='profile'>
      <img v-bind:src='user.avatar' alt='' class='avatar'>
      <div>
        <div>
          <span class='property'>id:</span> {{ user.id }}
        </div>
        <div>
          <span class='property'>昵称:</span> {{ user.name }}
        </div>
        <div>
          <span class='property'>邮箱:</span> {{ user.email }}
        </div>
        <div>
          <span class='property'>手机:</span> {{ user.phone }}
        </div>
      </div>
    </div>

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

#bar {
  height: 25px;
  background: #469F87;
}

#profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
}

.avatar {
  height: 85px;
  width: 85px;
  border-radius: 100px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
}

.property {
  font-weight: bold;
}

#logoutBtn {
  background-color: #469F87;
  margin: 20px auto 0px auto;
  width: 40%;
}
</style>
