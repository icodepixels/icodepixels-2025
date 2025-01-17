import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import '@fontsource/fira-code';
import './style.css';
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount('#app');
//# sourceMappingURL=main.js.map