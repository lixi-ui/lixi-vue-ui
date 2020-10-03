<template>
  <div id="app">
    首页1
    <lxv-button></lxv-button>
    <my-button></my-button>
    <demo></demo>
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