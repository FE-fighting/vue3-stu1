import { createApp } from 'vue'
import App from './App.vue'
import Productitem from './Productitem.vue'

const app = createApp(App)
app.mount('#app');
app.component("product-item", Productitem)