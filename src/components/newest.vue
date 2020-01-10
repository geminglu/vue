<template>
  <div class="newest">
    <ul>
      <li class="clearfix" v-for='(item,index) in (this.$store.state)' :key="index">
         <div class="left">
           <img :src="item.img" alt="">
         </div>
           <div class="right">
             <div class="right-top">
              {{item.title}} 
             </div>
             <div class="right-bottom">
              <span class="right-top-left">
                {{item.time}} 
              </span>
              <span class="right-top-right">
                {{item.comment}}评 
              </span>
             </div>
           </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'newest',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
  .newest{margin:0 40px;}
  .newest li{display: flex;height:180px;padding:26px 0;border-bottom: 1px solid #eee}
  .left img{width: 240px;height:180px;display: block;border-radius: 10px;background: url(../images/news_thumb_placeholder.png) no-repeat center;background-size: 100%}
  .right{width:100%;margin-left:30px}
  .right-top{display:inline-block;font:38px/60px "";height:120px;overflow: hidden}
  .right-bottom{font:24px/2em "";color:#97a1ad}
  .right-top-left{float:left}
  .right-top-right{float: right}
</style>
