const Routes = [
  {
    path: '/', 
    component: {
      template: '<b>root</b>'
    }
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
