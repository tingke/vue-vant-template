import { createApp } from 'vue';
import App from './App.vue';
// 引入模块后自动生效，支持PC端
import '@vant/touch-emulator';
import '@/style/index.scss'
import { setupRouter } from './router'

const app = createApp(App);

// todo: 注册组件
setupRouter(app)

app.mount('#app');
