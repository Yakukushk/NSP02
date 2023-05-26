import { createRouter, createWebHistory } from 'vue-router'
import Service from '@/components/Service.vue'
import Contact from '@/components/Contact.vue'
import Document from '@/components/Document.vue'
import Home from '@/components/Home.vue'



export default createRouter({
    history: createWebHistory(),
    routes : [

        { path: '/home', component: Home, alias: '/'},
        { path: '/service', component: Service},
        { path: '/contact', component: Contact },
        { path: '/document', component: Document }
    ]
})


