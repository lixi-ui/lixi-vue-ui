<template>
  <div id="app">
    <div class="heard-nav">
      <div class="">
        <lvx-button>
          按钮
        </lvx-button>
      </div>
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
