<template>
  <div>
    this is page {{ home }}
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        home: "<<home>>"
      }
    }
  }
</script>
