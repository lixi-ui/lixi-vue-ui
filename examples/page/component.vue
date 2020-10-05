<template>
  <div>
    this is page {{ component }}
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        component: "<<component>>"
      }
    }
  }
</script>
