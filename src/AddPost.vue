<template>
  <div>
    <h4>Add Post</h4>

    <div class="progress" v-show="showProgress">
      <div class="indeterminate"></div>
    </div>

    <form class="col s12">
      <div class="row">
        
        <div class="input-field col s12">
          <input type="text" id="title" v-model="post.title">
          <label for="title">Title</label>
        </div>

        <div class="input-field col s12">
          <textarea id="text" class="materialize-textarea" v-model="post.text"></textarea>
          <label for="text">Text</label>
        </div>

        <div class="input-field col s12">
          <button class="waves-effect waves-light btn right" @click="add">Enviar</button>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
  import Auth from './auth'
  export default {
    name: 'addpost',
    data () {
      return {
        post: {
          title: "",
          text: "",
          user: {
            _id: ""
          },
          token: ""
        }
      }
    },
    created: function () {
      let login = Auth.getLogin()
      if (login.token == null) {
        this.$router.push('login')
        Materialize.toast('Para criar um post faça o login!', 3000)
      } else {
        this.post.user._id = login.id
        this.post.token = login.token
      }
    },
    methods: {
      add: function() {
        this.$http.post('/api/posts', this.post)
        .then(function (response) {
          this.$router.push('home')
          Materialize.toast('Post adicionado com sucesso!', 3000)
        }, function (error) {
          //console.error(error)
          Materialize.toast('Error: ' + error.data.message, 3000)
        })
      }
    }
  }
</script>

<style>

</style>


