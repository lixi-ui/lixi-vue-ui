<template>
  <div class="main-side">
    <div class="side-wrap">
      <div class="side-group" v-for="(item,index) in data" :key="index">
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
</template>

<script>
  export default {
    props:{
      data: Array
    },
    data () {
      return {
      }
    }
    
  }
</script>

<style lang="scss" scoped>
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
        padding: 10px 5px 10px 20px;
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
</style>