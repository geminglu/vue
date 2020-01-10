<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div class="floor">
      <ul>
        <router-link to="/Information" tag="li"><i></i><span>资讯</span></router-link>
        <router-link to="/Ring" tag="li"><i></i><span>辣品</span></router-link>
        <router-link to="/Spicy" tag="li"><i></i><span>圈子</span></router-link>
        <router-link to="/We" tag="li"><i></i><span>我</span></router-link>
      </ul>
    </div>
    <div class="floor1"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {

  },
  // components: {Information,Ring,Spicy,We}
}
</script>

<style scoped>
  #app{right:0;left:0}
  .floor1{height:127px}
  .floor{height:127px;position: fixed;bottom: 0;left:0;right: 0;box-shadow: 0px 0px 8px #00000017;background: white;}
  .floor ul{display: flex;justify-content: space-around;margin-top:17px}
  .floor ul li i{height:60px;width:57px;display: block;background: url(./images/floor.png) no-repeat;background-size: 200%;}
  .floor ul li span{display: block;text-align:center;font:26px/1em "";color:#aaaaaa;margin-top:10px}
  .floor ul li:nth-child(1) i{background-position:0 0;}
  .floor ul li:nth-child(2) i{background-position:0 -120px;}
  .floor ul li:nth-child(3) i{background-position:0 -60px;}
  .floor ul li:nth-child(4) i{background-position:0 -180px;}
  .router-link-active i{background-position-x: -57px !important}
  .router-link-active span{color:#d22222 !important;font-size: 30px !important}
  .router-link-active span{transition: all .1s}
</style>
