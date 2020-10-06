<template>
  <div id="app">
    <div class="heard-nav">
      首页1
      <lxv-button></lxv-button>
      <h5>----------------------------</h5>
      <my-button></my-button>
      <h5>----------------------------</h5>
      <e-my-button></e-my-button>
      <h5>----------------------------</h5>
      <demo></demo>
      <h5>----------------------------</h5>
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
