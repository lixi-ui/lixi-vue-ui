<template>
  <div id="app">
    <div class="heard-nav">
      <div class="">
        <main-header></main-header>
      </div>
    </div>
    <div style="padding-top: 50px">
      <lxv-button>
        btn
      </lxv-button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MyButton from '../src/compoments/button/docs/index.md';
  import EMyButton from "../extend/project/lixi-extend/src/compoments/button/docs/index.md";

  export default {
    name: "app",
    components: {
      MyButton,
      EMyButton
    }
  }
</script>
