import Vue from 'vue'
import App from './App.vue'
import Chatgame from './components/Chatgame.vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.devtools = true
Vue.use(VueRouter);
const routes = [
  {path: "/chatgame",component: Chatgame},
];

const router = new VueRouter({
  routes,
  mode: "history",
});
Vue.use(new VueSocketIO({
    debug: true,
    /* connection: SocketIO('http://localhost:8080',{ transport : ['polling', 'websocket'] }), */
    connection: SocketIO('https://chatgamev2.herokuapp.com',{ transport : ['polling', 'websocket'] }),
  })
);
 
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
