import { createRouter, createWebHistory } from 'vue-router'
import Service from './components/Service.vue'
import Contact from './components/Contact.vue'
import Document from './components/Document.vue'



export default createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/service', component: Service},
        { path: '/contact', component: Contact },
        { path: '/document', component: Document }
    ]
})


