<template>
  <div id="Information">
      <div class="head">
        <div class="top clearfix">
          <div class="top-left">
            <img src="../images/splash_logo.png" alt="it之家">
          </div>
          <div class="top-right">
            <img src="../images/calendar_today_dark.png" alt="">
            <img src="../images/icon_toolbar_search_dark.png" alt="">
            <img src="../images/more_btn_dark.png" alt="">
          </div>
        </div>
        <div class="button">
          <ul>
            <li v-for='(item,index) in list' :key="index" @click='style(index); compon(index)' :class="[activate==index? 'activate':'']">{{item}}</li>
          </ul>
        </div>
      </div>
      
  <div class="main">
    <keep-alive>
      <transition mode="out-in">
          <component v-bind:is="com"></component>
      </transition>
    </keep-alive>
  </div>
  </div>
</template>

<script>

import attention from '@/components/attention.vue';
import newest from '@/components/newest.vue';
import Hotlist from '@/components/Hotlist.vue';
import huawei from '@/components/huawei.vue';
import Topcommentators from '@/components/Topcommentators.vue';
import live from '@/components/live.vue';
import G5 from '@/components/g5.vue';
import veranda from '@/components/veranda.vue';
import mobile from '@/components/mobile.vue';
import numerical from '@/components/numerical.vue';
import college from '@/components/college.vue';
import evaluating from '@/components/evaluating.vue';
import perusal from '@/components/perusal.vue';

export default {
  name: 'Information',
  data() {
    return {
      list: ['关注','最新','热榜','华为','热评','精读','评测','直播','5G','阳台','手机','数码','学院'],
      listname: ['attention','newest','Hotlist','huawei','Topcommentators','evaluating','perusal','live','G5','veranda','mobile','numerical','college'],
      activate: 1,
      com :'newest'
    }
  },
  methods: {
    style(index) {
      this.activate = index;
    },
    compon(index) {
      this.com = this.listname[index];
    }
  },
  components :{attention,newest,Hotlist,huawei,Topcommentators,live,G5,veranda,mobile,numerical,college,evaluating,perusal}
}
</script>

<style scoped>
  #Information{}
  .head{padding: 0 40px;padding-top:37px;margin-bottom:26px;box-shadow: 0 0 26px #3333332b;}
  .top-left{float: left;}
  .top-left img{height:60px}
  .top-right{float: right}
  .top-right img{width:50px;margin-left:50px}
  .button{margin-top:30px}
  .button ul{display: -webkit-box;overflow-x: scroll;position: sticky;top:10px}
  .button ul li{padding:0 30px;font:38px/3em ""}
  .button ul::-webkit-scrollbar {display:none}
  .activate{color:#d22222;border-bottom:5px solid #d22222}
  .router-link-active,.myactive{background:aqua;color:white}
  .v-enter,
  .v-leave-to {opacity:0;transform: translateX(1080px);}
  .v-enter-active,
  .v-enter-active {transition: .5s;}
</style>