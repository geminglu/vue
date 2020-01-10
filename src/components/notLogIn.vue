<template>
  <div class="notLogIn">
      <input class="button" type="button" value="登录/注册">
      <div class="ThirdPartyLogin">
          <img src="@/images/me_login_qq.png" alt="">
          <img src="@/images/me_login_taobao.png" alt="">
          <img src="@/images/me_login_weibo.png" alt="">
          <img src="@/images/me_login_weixin.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'member',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
    .notLogIn{display:flex;align-items: center;flex-direction: column;margin:0 66px;border-bottom:1px solid #efefef}
    .button{width:207px;height:77px;outline: 0;border:0;background:white;box-shadow: 0 0 5px #33333342;margin:0 auto;margin-top:65px;border-radius: 5px;font:600 36px/77px '';color:#d22222}
    .ThirdPartyLogin{margin:50px 0 38px 0;display: flex}
    .ThirdPartyLogin img{height:100px;border-radius:50%;border:1px solid #efefef;margin:0 35px}
</style>
