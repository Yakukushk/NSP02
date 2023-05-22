import { createRouter, createWebHistory } from 'vue-router'
import Service from '@/Service.vue'
import Contact from '@/Contact.vue'
import Document from '@/Document.vue'

const routes = [
    { path: '/service', component: Service },
    { path: '/contact', component: Contact },
    { path: '/document', component: Document }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
