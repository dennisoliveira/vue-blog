import Home from './Home.vue'
import Login from './Login.vue'

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
    component: {
      template: '<b>logout</b>'
    }
  },
  {
    path: '/addPost', 
    component: {
      template: '<b>addPost</b>'
    }
  },
  {
    path: '/removePost', 
    component: {
      template: '<b>removePost</b>'
    }
  }

]

export default Routes
