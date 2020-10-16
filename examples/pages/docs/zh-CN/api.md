
### 安装
```js
  npm install lixi-vue-ui --save
```

### 引入 lixi-vue-ui

在 main.js 中写入以下内容：
```js
  import Vue from 'vue';
  import LixiVueUi from 'lixi-vue-ui';
  import 'lixi-vue-ui/lib/style/lib/index.css';
  import App from './App.vue';

  Vue.use(LixiVueUi);

  new Vue({
    el: '#app',
    render: h => h(App)
  });

```