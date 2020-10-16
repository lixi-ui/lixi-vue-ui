<template>
    <div class="main-cnt">
       <div class="md-cnt">
         <slot></slot>
       </div>
       <main-footer></main-footer>
    </div>
</template>
<script>
  import Introduce from '../i18n/zh-CN/docs/introduce.md'
  export default {
    name: 'MainContent',
    props:{
      nav: {
        type: Array,
        default: function(){
          return []
        }
      }
    },
    data () {
      return {
        title: 'title',
        options: [{
          value: '0.1.0',
          label: '0.1.0'
        }, {
          value: '1.0.0',
          label: '1.0.0'
        }],
        value: '0.1.0'
      }
    },
    components: {Introduce}
  }
</script>
<style scoped lang="scss">
  .main-cnt{
    margin-left: 200px;
    min-height: calc(100vh - 4rem - 1px);
    margin-bottom: 0px;
    position: relative;
    top: 0;
    bottom: 0;
    .md-cnt{
      min-height: calc(100vh - 7.4rem - 2px);
      padding: 0 40px;
    }
  }
</style>
