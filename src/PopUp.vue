<template>
  <div id='main'>
    <img src='../images/logo4.png' alt='' width='30px'>
    登录墨墨
    <form class='login form'>
      <div class='form-group email'>
        <input type='email' class='form-control' placeholder='请输入邮箱/手机号码'>
      </div>
      <div class='form-group password'>
        <input type='password' class='form-control' placeholder='请输入密码'>
        <div class='eye'></div>
      </div>
        <button type='submit' class='btn btn-block' id='loginBtn'>登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
      <p class='error' style='display: none;'></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'memo-popup',
  data: function () {
    return {};
  }
};
</script>

<style scoped>
#loginBtn {
  background-color: #469F87;
  margin: 0px auto;
  width: 30%;
}

.form-group {
  margin: 0 10px;
}
</style>
