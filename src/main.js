import { createApp } from 'vue'
import App from './App.vue'
//import { firestorePlugin } from 'vuefire'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home'

//myApplication.use(firestorePlugin);
const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: Home }]
})

const myApplication = createApp(App);
myApplication.use(router)
//myApplication.use(firestorePlugin)
myApplication.mount('#app')