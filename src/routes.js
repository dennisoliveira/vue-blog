import Home from './Home.vue'
import Login from './Login.vue'
import AddPost from './AddPost.vue'
import Logout from './Logout.vue'

const Routes = [
  {
    path: '/', 
    redirect: '/home'
  },
  {
    path: '/home', 
    component: Home
  },
  {
    path: '/login', 
    component: Login
  },
  {
    path: '/logout', 
    component: Logout
  },
  {
    path: '/addPost', 
    component: AddPost
  },
  {
    path: '/removePost', 
    component: {
      template: '<b>removePost</b>'
    }
  }

]

export default Routes
