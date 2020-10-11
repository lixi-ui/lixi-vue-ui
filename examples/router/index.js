// import nav from "nav.config.json";
import home from "../pages/home/index.vue";
import component from "../pages/component.vue";

var routers = [
  {
    name: "home",
    path: "/home",
    component: home,
    mate:{
      title: "lixi-home"
    }
  },
  {
    name: "component",
    path: "/component",
    component: component,
    mate:{
      title: "lixi-component"
    }
  }
]

export default routers;
