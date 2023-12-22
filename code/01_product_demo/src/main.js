import { createApp } from 'vue'
//import App from './02_组件的通信案例/App.vue'
//import App from './07_生命周期函数的演练/App.vue'
//import App from './09_动态组件的使用/App.vue'
import App from './10_组件的v-model/App.vue'
const app = createApp(App)
app.mount('#app');
/****
 * main.js是webpack打包入口,jsconfig给vscode在读取到其中内容时，给我们代码更友好的提示
 */