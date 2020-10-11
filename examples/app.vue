<template>
  <div id="app">
    <main-header></main-header>
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
