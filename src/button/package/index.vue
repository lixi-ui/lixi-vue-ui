<template>
  <div>
    <span>{{ name }}</span>
  </div>
</template>

<script lang="ts">
  let a: number = 1;
  export default {
    name: "lxv-button",
    data(){
      return {
        name: "我是组件button"
      }
    }
  }
</script>
