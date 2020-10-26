<template>
  <div>
    <span class="count">{{ count }}</span>
    <lxv-button @click="increment">Increment</lxv-button>
  </div>
</template>

<script>
// counter.js
  import lxvButton from "../package/index"

  export default {
    components: {
      lxvButton
    },
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>