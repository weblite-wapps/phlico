// module
import Vue from 'vue'
import store from "./store";
// global css style
import './helper/style/normalize.css'
import './helper/style/main.css'
import './helper/style/global.css'
// components
import App from './App'


Vue.config.productionTip = false

new Vue({ 
   store,
   render: h => h(App)
 }).$mount('#app')
