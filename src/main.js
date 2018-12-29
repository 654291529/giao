import Vue from "vue";
import Born from "./born.vue";
import Demo from "./demo.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Born)
}).$mount("#app");

