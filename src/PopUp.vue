<template>
  <div id='main'>
    <img src='https://www.maimemo.com/res/images/site/logo4.png' alt='' width='30px'>
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
      <p class='text'>
        <a href='#' data-toggle='modal' data-target='.forgetModal'>忘记密码</a>
      </p>
      <p class='error' style='display: none;'></p>
    </form>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  data: function () {
    return {
      message: 1
    };
  }
};
</script>

<style scoped>

</style>
