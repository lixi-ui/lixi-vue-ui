<template>
  <div>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  export default {
    name: "lxv-button",
    data(){
      return {
        name: "我是组件button"
      }
    }
  }
</script>
