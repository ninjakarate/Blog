import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'
import PostAddView from '../views/PostAddView.vue'


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
    }
    // {
    //   path: '/songs/:id',
    //   name: 'song-page',
    //   component: SomeComponent,

    //   // props: true,
    //   // props: route => ({ id: route.path.split('/').at(-1) })
    // },
  ]
})

// SomeComponent.vue
// <script>
// defineProps<{ id: number}>();

export default router
