import Vue from 'vue';
import myButton from './index.vue';
const App = Vue.component('app', {
  data() {
    return {
      msg: 'Hello Vue Test Utils'
    }
  },
  components: {
    myButton
  },
  template: `
    <div><myButton></myButton>{{ msg }}</div>

  `
})
export default App;