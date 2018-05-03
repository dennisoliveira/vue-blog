import Home from './Home.vue'

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
    component: {
      template: '<b>login</b>'
    }
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
