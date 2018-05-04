<template>
  <div id="app">
    
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Blog</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link tag="li" to="/"><a>Home</a></router-link>          
          <router-link tag="li" to="/addPost" v-if="showMenu.addPost"><a>addPost</a></router-link>
          <router-link tag="li" to="/login" v-if="showMenu.login"><a>Login</a></router-link>
          <router-link tag="li" to="/logout" v-if="showMenu.logout"><a>Logout</a></router-link>
        </ul>
      </div>
    </nav>

    <br>

    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import Auth from './auth'
  export default {
    name: 'app',
    data () {
      return {
        showMenu: {
          login: true,
          logout: false,
          addPost: false
        }
      }
    },
    methods: {
      checkLogin: function() {
        let login = Auth.getLogin()
        if (login.token == null) {
          this.showMenu.login = true
          this.showMenu.logout = false,
          this.showMenu.addPost = false
        } else {
          this.showMenu.login = false
          this.showMenu.logout = true,
          this.showMenu.addPost = true
        }
      }
    },
    created: function () {
      this.checkLogin();
    },
    updated: function () {
      this.checkLogin();
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>
