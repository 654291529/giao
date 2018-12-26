import Vue from "vue";
import Demo2 from "./demo2.vue"

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo2)
}).$mount("#app");

