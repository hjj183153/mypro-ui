// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//完整引入mint-ui组件
import Mint from 'mint-ui';
//单独引入mint-ui样式
import "mint-ui/lib/style.css";
Vue.use(Mint);
// import "./font/iconfont.css";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
