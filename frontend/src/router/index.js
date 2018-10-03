import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeComponent'
import Login from '@/components/contents/Login'
import Post from '@/components/contents/Post'
import PostList from '@/components/contents/PostList'
import PostWrite from '@/components/contents/PostWrite'
import CategoryEdit from '@/components/contents/CategoryEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: 'login', component: Login},
        {path: 'post/:post_id', name:'PostView', component: Post},
        {path: 'category/:category_id', component: PostList},
        {path: 'categoryedit', component: CategoryEdit},
        {path: 'write', component: PostWrite},
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
