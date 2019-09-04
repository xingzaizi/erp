import Vue from 'vue'
import Router from 'vue-router'

import basicrouter from '@/router/basicRouter.js'
import procurementRouter from '@/router/procurementRouter.js'
import salesManagementRouter from '@/router/salesManagementRouter.js'
import repertoryRouter from '@/router/repertoryRouter.js'
//import accountRouter from '@/router/accountRouter.js' 账款管理

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  basicrouter,//共用资料
  procurementRouter,//采购管理
  salesManagementRouter,//销售管理
  repertoryRouter,//库存管理
  //accountRouter,//账款管理
]

//移除url上的#锚链接
const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

<<<<<<< HEAD
//路由拦截器
router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem("user") && to.name !== 'login') {
    next('/login')
  } else {
    next() 
  }
})



=======
>>>>>>> e015a17cb95ebb835032c3c22b719d4b70cc16e7
//全局路由对象
export default router