import Vue from 'vue'
import Router from 'vue-router'
import HomeCoponent from '@/components/HomeComponent'
import Login from '@/components/contents/Login'
import Post from '@/components/contents/Post'
import PostList from '@/components/contents/PostList'
import PostWrite from '@/components/contents/PostWrite'
import CategoryEdit from '@/components/contents/CategoryEdit'
import Home from '@/components/contents/Home'
import Join from '@/components/contents/Join'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homeBody',
      component: HomeCoponent,
      children: [
        {path: '', component: Home},
        {path: 'login', component: Login},
        {path: 'post/:post', name:'PostView', component: Post},
        {path: 'category/:category_id', component: PostList},
        {path: 'category', component: CategoryEdit},
        {path: 'write', component: PostWrite},
        {path: 'join', component: Join},
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
