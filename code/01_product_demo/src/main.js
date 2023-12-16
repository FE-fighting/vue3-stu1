import { createApp } from 'vue'
import App from './App.vue'
import Productitem from './Productitem.vue'

const app = createApp(App)
app.mount('#app');
app.component("product-item", Productitem)
    /****
     * main.js是webpack打包入口,jsconfig给vscode在读取到其中内容时，给我们代码更友好的提示
     */