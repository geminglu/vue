<template>
  <div class="InOrderToLogIn">
      <div class="left">
          <img src="" alt="">
          <div class="left-title">
              <h3>昵称</h3>
              <span style="margin-right:15px">Lv.11 ></span>
              <span>勋章 1 个 ></span>
          </div>
      </div>
      <div class="right">
          签到
      </div>
  </div>
</template>

<script>
export default {
  name: 'InOrderToLogIn',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
    .InOrderToLogIn{display: flex;justify-content: space-between;align-items: center;margin: 86px 0 48px 0;}
    .left{margin-left:40px}
    .left img{width:166px;height:166px;border-radius: 50%;float:left;background:url(~../images/thumbnail.png) no-repeat center;background-size: 100%;}
    .left-title{float:left;margin-left:40px}
    .left-title h3{font:500 50px/2em ""}
    .left-title span{font:500 30px/2em "";background:#f4f5f7;border-radius: 25px;padding:10px 20px;}
    .right{width:160px;height:126px;background: #f4f5f7;border-top-left-radius: 60px;border-bottom-left-radius: 60px;}
</style>
