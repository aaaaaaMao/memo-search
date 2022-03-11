<template>
  <div id='main'>
    <img src='../../images/logo4.png' alt='' width='30px'>
    登录墨墨
    <div class='email'>
      <input name='identity' id='identity' class='form-control' placeholder='请输入邮箱/手机号码'>
    </div>
    <div class='password'>
      <input type='password' name='password' id='password' class='form-control' placeholder='请输入密码'>
      <div class='eye'></div>
    </div>
      <button
        class='btn btn-block'
        id='loginBtn'
        @click='login'>登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
    <p class='error' style='display: none;'></p>
  </div>
</template>

<script>
import { login } from '../api';

export default {
  name: 'memo-login',
  data: function () {
    return {};
  },
  methods: {
    login: async function () {
      const identity = document.getElementById('identity').value;
      const password = document.getElementById('password').value;

      await login(identity, password);
      // eslint-disable-next-line no-undef
      $emit('login-event');
    }
  }
};
</script>

<style scoped>
div {
    line-height: 15px;
    font-size: 13px;
    text-align: center;
    margin: 0px 5px;
}

#loginBtn {
  background-color: #469F87;
  margin: 0px auto;
  width: 40%;
}
</style>
