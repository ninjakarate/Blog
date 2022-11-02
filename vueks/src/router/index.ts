import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'
import PostAddView from '../views/PostAddView.vue'
import PostEditView from '@/views/PostEditView.vue'
import PostReadView from '@/views/PostReadView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: BlogView,
        },
        {
            path: '/add',
            name: 'add-post',
            component: PostAddView,
        },
        {
            path: '/edit/:id',
            name: 'edit-post',
            component: PostEditView,

            props: true,
        },
        {
            path: '/read/:id',
            name: 'read-post',
            component: PostReadView,

            props: true,
        },
    ], 
});

export default router
