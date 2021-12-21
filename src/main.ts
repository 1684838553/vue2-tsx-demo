import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/style/style.less'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
