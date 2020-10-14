<template>
  <div id="app">
    <main-header :navAll="navAll"></main-header>
    <div class="main-cnt main-content page-component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import navsData from './router/nav.config.json'

  export default {
    name: "app",
    data(){
      return {
        meta: this.$route.meta,
        nav: [],
        navAll: []
      }
    },
    components:{
    },
    mounted(){
      // console.log('nav?',navsData["zh-CN"][1].children[0].children);
      this.nav = navsData["zh-CN"][1].children
      this.navAll = navsData["zh-CN"]
    }
  }
</script>
