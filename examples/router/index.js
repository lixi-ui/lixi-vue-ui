import Vue from 'vue'
import Router from 'vue-router'
import navConfig from './nav.config.json'

import extend from "../../extend/manifest.json"

import button from "../../src/components/button/docs/index.md"

Vue.use(Router)

const LOAD_MAP = {
  'zh-CN': function(path) {
    return function(r){
      return require.ensure(
        [],
        function() {
          return r(require(`../pages${path}/index.vue`))
        },
        'zh-CN')
    };
  }
};

const load = function(lang, path) {
  return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../pages${path}.md`)),
    'zh-CN');
  }
};

function loadDocs(lang,path){
  return LOAD_DOCS_MAP[lang](path);
};

const LOAD_COM_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../../src/components${path}/docs/index.md`)),
    'zh-CN');
  }
};

function loadComDocs(lang,path){
  return LOAD_COM_DOCS_MAP[lang](path)
}

const LOAD_EXTEND_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../../extend/project/lixi-vue-extend/src/components${path}/docs/index.md`)),
    'zh-CN');
  }
};

function loadExtendDocs(lang,path){
  return LOAD_EXTEND_DOCS_MAP[lang](path)
}

var routes = []

navConfig['zh-CN'].forEach(item => {
  var obj = {};
  if(item.children){
    obj = {
      path: item.path,
      redirect: item.path + item.children[0].path,
      name: "component-" + item.name,
      component: load('zh-CN', item.path)
    }
  } else {
    obj = {
      path: item.path,
      name: "component-" + item.name,
      component: load('zh-CN', item.path)
    }
  }
  if (item.children) {
    var routes1 = []
    item.children.forEach(item1 => {
      var obj1 = {
        path: item1.name,
        name: "component-" + item1.name,
        meta: "",
        component: item.name === 'component'? loadComDocs('zh-CN', item1.path) : loadDocs('zh-CN', item.path +"/zh-CN"+ item1.path)
      }
      routes1.push(obj1)
    })
    obj.children = routes1
  }
  routes.push(obj);
})

routes = routes.concat([{
  path: '/',
  redirect: '/home'
}, {
  path: '*',
  redirect: '/home'
}])

var component = [
  {
    path: "/component/button",
    name: "component-button",
    component: button,
  }
]

routes = routes.concat(component);

var extendNav = [
  {
    "name": "lixi-vue-extend",
    "path": "/lixi-vue-extend",
    "title": "lixi-vue-扩展",
    "children": [
      {
        "path": "/button",
        "urlPath": "/component/button",
        "name": "button",
        "title": "button 按钮"
      }
    ]
  }
]
var extendRoutes = []
extendNav.forEach(item => {
  var obj = {
    path: item.path,
    redirect: item.path + item.children[0].path,
    name: "component-" + item.name,
    component: load('zh-CN', "/extend")
  }
  var routes1 = []
  item.children.forEach(item1 => {
    var obj1 = {
      path: item1.name,
      name: "component-" + item1.name,
      meta: "",
      component: loadExtendDocs('zh-CN', item1.path)
    }
    routes1.push(obj1)
  })
  obj.children = routes1
  extendRoutes.push(obj);
})

// require("" + )


routes = routes.concat(extendRoutes)

export default new Router({
  mode: 'hash',
  routes: routes
})
