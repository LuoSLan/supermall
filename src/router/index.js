import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const Home = () =>
  import ('../views/home/Home')
const Category = () =>
  import ('../views/category/Category')
const Shopcart = () =>
  import ('../views/shopcart/Shopcart')
const Profile = () =>
  import ('../views/profile/Profile')
const Detail = () =>
  import ('../views/detail/Detail')


const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { footShow: true },
  },
  {
    path: '/category',
    component: Category,
    meta: { footShow: true },
  },
  {
    path: '/shopcart',
    component: Shopcart,
    meta: { footShow: true },
  },
  {
    path: '/profile',
    component: Profile,
    meta: { footShow: true },
  },
  {
    path: '/detail/:iid',
    component: Detail
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router