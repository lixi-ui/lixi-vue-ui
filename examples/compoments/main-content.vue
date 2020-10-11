<template>
  <div class='main-content'>
    <div class="main-side">
      <div class="side-wrap">
        <div class="side-group" v-for="(item,index) in nav" :key="index">
          <div class="title">{{ item.title }}</div>
          <div class="side-item"  v-for="(item1,i) in item.children" :key="i">
            <router-link
              active-class="active"
              :to="item1.urlPath">
                {{ item1.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="main-cnt">
       <div class="md-cnt">
         <slot></slot>
       </div>
       <main-footer></main-footer>
    </div>
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
.main-content{
  position: relative;
  padding-top: 4rem;
  .main-side{
    position: fixed;
    height: calc(100vh - 4rem);
    width: 200px;
    // padding-left: 20px;
    border-right: 1px solid lightblue;
    // background: lightgreen;
    .side-wrap{
      height: 100%;
      overflow: auto;
      .side-group{
        margin-bottom: 10px;
        padding: 10px 20px;
        .title{
          color: #333;
          padding-bottom: 5px;
          margin-bottom: 5px;
          font-weight: 600;
          border-bottom: 1px solid lightgray;
        }
        .side-item{
          a{
            padding: 5px;
            display: inline-block;
            width: 100%;
            color: #444;
            text-decoration: none;
            &:hover{
              color: #fb6638;
            }
          }
          .active{
            color: #fb6638;
          }

        }
      }
    }
  }
  .main-cnt{
    margin-left: 200px;
    min-height: calc(100vh - 4rem - 1px);
    margin-bottom: 0px;
    position: relative;
    top: 0;
    bottom: 0;
    .md-cnt{
      min-height: calc(100vh - 7.4rem - 2px);
      padding-left: 20px;
    }
  }
}
</style>
