import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'
import PostAddView from '../views/PostAddView.vue'
import PostEditView from '@/views/PostEditView.vue'


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
            // props: route => ({ id: route.path.split('/').at(-1) })
        },
    ], 
})

// router.push({ name: 'song-page', params: { id: 47 } })

// SongPage.vue
// <script>
// defineProps<{ id: number }>();

export default router
