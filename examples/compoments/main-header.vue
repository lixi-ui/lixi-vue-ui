<template>
  <div class='main-header'>
    <div class="main-nav-left">
      <img src="./lixi-logo.png" />
      Lixi.js
    </div>
    <div class="main-nav-right">
      <div class="nav-right">
        <div class="nav-right-wrap">
          <div class="nav-item" v-for="(item,index) in navAll" :key="index">
            <span v-if="!item.children">
              <router-link
                active-class="active"
                :to="item.path">
                  {{ item.name }}
              </router-link>
            </span>
             <span v-if="item.children">
              <lxv-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                  {{ item.name }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <lxv-dropdown-menu slot="dropdown">
                  <lxv-dropdown-item v-for="(item1,index1) in item.children" :key="index1">
                    <router-link
                      active-class="active"
                      :to="item1.urlPath">
                        {{ item1.name }}
                    </router-link>
                  </lxv-dropdown-item>
                </lxv-dropdown-menu>
              </lxv-dropdown>
            </span>
          </div>
          <!-- <div class="nav-item">
            <lxv-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                学习<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <lxv-dropdown-menu slot="dropdown">
                <lxv-dropdown-item>黄金糕</lxv-dropdown-item>
                <lxv-dropdown-item>狮子头</lxv-dropdown-item>
                <lxv-dropdown-item>螺蛳粉</lxv-dropdown-item>
                <lxv-dropdown-item disabled>双皮奶</lxv-dropdown-item>
                <lxv-dropdown-item divided>蚵仔煎</lxv-dropdown-item>
              </lxv-dropdown-menu>
            </lxv-dropdown>
          </div> -->
          <!-- <div class="nav-item">
            <lxv-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                生态系统<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <lxv-dropdown-menu slot="dropdown">
                <lxv-dropdown-item>黄金糕</lxv-dropdown-item>
                <lxv-dropdown-item>狮子头</lxv-dropdown-item>
                <lxv-dropdown-item>螺蛳粉</lxv-dropdown-item>
                <lxv-dropdown-item disabled>双皮奶</lxv-dropdown-item>
                <lxv-dropdown-item divided>蚵仔煎</lxv-dropdown-item>
              </lxv-dropdown-menu>
            </lxv-dropdown>
          </div>
          <div class="nav-item">
            团队
          </div>
          <div class="nav-item">
            <lxv-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                资源列表<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <lxv-dropdown-menu slot="dropdown">
                <lxv-dropdown-item>黄金糕</lxv-dropdown-item>
                <lxv-dropdown-item>狮子头</lxv-dropdown-item>
                <lxv-dropdown-item>螺蛳粉</lxv-dropdown-item>
                <lxv-dropdown-item disabled>双皮奶</lxv-dropdown-item>
                <lxv-dropdown-item divided>蚵仔煎</lxv-dropdown-item>
              </lxv-dropdown-menu>
            </lxv-dropdown>
          </div>
          <div class="nav-item">
            <lxv-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                支持lixi<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <lxv-dropdown-menu slot="dropdown">
                <lxv-dropdown-item>黄金糕</lxv-dropdown-item>
                <lxv-dropdown-item>狮子头</lxv-dropdown-item>
                <lxv-dropdown-item>螺蛳粉</lxv-dropdown-item>
                <lxv-dropdown-item disabled>双皮奶</lxv-dropdown-item>
                <lxv-dropdown-item dividled>蚵仔煎</lxv-dropdown-item>
              </lxv-dropdown-menu>
            </lxv-dropdown>
          </div>
          <div class="nav-item">
            <lxv-dropdown
              trigger="click"
              class="nav-dropdown nav-lang"
              :class="{ 'is-active': langDropdownVisible }">
              <span class="el-dropdown-link">
                {{ displayedLang }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <lxv-dropdown-menu
                slot="dropdown"
                class="nav-dropdown-list"
                @input="handleLangDropdownToggle">
                <lxv-dropdown-item
                  v-for="(value, key) in langs"
                  :key="key"
                  @click.native="switchLang(value)">
                  {{ value }}
                </lxv-dropdown-item>
              </lxv-dropdown-menu>
            </lxv-dropdown>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      title: 'title',
      value: '选项1',
      langDropdownVisible: true,
      displayedLang: '中文',
      lang: 'zh-CN',
      langs: {
        'zh-CN': '中文',
        'en-US': 'English',
        'es': 'Español',
        'fr-FR': 'Français'
      }
    }
  },
  props: {
    navAll:{
      type: Array,
      default: function(){
        return []
      }
    }
  },
  methods: {
    switchLang(targetLang){
      if (this.lang == targetLang) {
        return;
      }
      localStorage.setItem('ELEMENT_LANGUAGE', targetLang);
      this.$router.push(this.$route.path.replace(this.lang, targetLang));
    },
    handleLangDropdownToggle(){}
  }
}
</script>



<style lang="scss" scoped>
  .main-header{
    display: flex;
    position: fixed;
    .main-nav-left{
      flex: none;
      width: 110px;
      height: 2.2rem;
      img{
        height: 2.4rem;
        width: 2.4rem;
        vertical-align: middle;
      }
    }
    .main-nav-right{
      flex-grow: 1;
      // background: #ddd;
      .nav-right{
        display: inline-block;
        float: right;
        padding-right: 10px;
        color: #409EFF;
        font-size: 12px;
        .nav-right-wrap{
          display: flex;
          .nav-item{
            padding: 0 5px;
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
