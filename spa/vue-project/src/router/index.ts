import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../views/TopView.vue'
import LogInView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import EditView from '../views/EditView.vue'
import PageView from '../views/PageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: TopView
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'logIn',
      component: LogInView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    },
    {
      // クエリパラメータ取得し該当のpageに飛ばす予定
      path: '/page',
      name: 'page',
      component: PageView
    }
  ]
})

export default router
