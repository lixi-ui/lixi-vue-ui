<template>
  <div id="app">
    <div class="heard-nav" style="display: flex;">
      首页1
      <lxv-button></lxv-button>
      <my-button></my-button>
      <demo></demo>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MyButton from '../src/button/docs/index.md';
  export default {
    name: "app",
    components: {
      MyButton
    }
  }
</script>
