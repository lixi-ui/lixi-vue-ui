import Vue from 'vue';
import myButton from './index11';
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