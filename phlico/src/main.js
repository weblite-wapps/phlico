// components
import Vue from 'vue'
// global css style
import './helper/style/normalize.css'
import './helper/style/main.css'
import './helper/style/global.css'
// components
import App from './App'


Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
