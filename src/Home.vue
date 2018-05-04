<template>
  <div>
    <div v-show="showProgress" class="progress">
      <div class="indeterminate"></div>
    </div>

    <div class="row" v-for="post in posts" v-bind:key="post._id">
      <div class="col s12">
        <div class="card blue lighten-5">
          <div class="card-content black-text">
            <span class="card-title">{{post.title}}</span>
            <p>{{post.text}}</p>
          </div>
          <div class="card-action">
            <span>
              <i class="material-icons">perm_identity</i> {{post.user.name}}
              <a href="#" class="right blue-text" 
                @click="remove(post)"
                v-if="login.token != null && login.id == post.user._id">
                Remove
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import Auth from './auth'

  export default {
    name: 'home',
    data() {
      return {
        posts: null,
        showProgress: true,
        login: Auth.getLogin()
      }
    },
    created: function() {
      this.loadPosts()
    },
    methods: {
      loadPosts: function () {
        this.showProgress = true
        this.$http.get('/api/posts').then(function (response) {
          this.showProgress = false
          this.posts = response.data

        }, function (error) {
          this.showProgress = false
          Materialize.toast('Error: ' + error.statusText, 3000)
        })
      },
      remove: function(post) {
        let login = Auth.getLogin()
        post.token = login.token

        console.log(post)        

        this.$http.delete('/api/posts/' + post._id,{body: {token: post.token}})
        .then(function (response) {
          this.loadPosts()
          Materialize.toast('Post removido com sucesso!', 3000)
        }, function (error) {
          console.error(error)
          Materialize.toast('Error: ' + error.data.message, 3000)
        })
      }
    }
  }
</script>

