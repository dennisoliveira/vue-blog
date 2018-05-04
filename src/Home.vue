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
              <!-- <a href="#">This is a link</a> -->
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        posts: null,
        showProgress: true
      }
    },
    created: function() {
      this.showProgress = true;
      this.$http.get('/api/posts').then(function (response) {
        this.showProgress = false;
        this.posts = response.data;

      }, function (error) {
        this.showProgress = false;
        Materialize.toast('Error: ' + error.statusText, 3000);
      })
    }
  }
</script>

